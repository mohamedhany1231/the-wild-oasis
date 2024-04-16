import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //   let { status: filter } = searchParams;
  const filterValue = searchParams.get("status");

  const filter =
    filterValue && filterValue !== "all"
      ? { field: "status", value: filterValue }
      : null;
  //   const filter = { field: "totalPrice", value: 5000, method: "gte" };

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const page = Number(searchParams.get("page") || 1);

  const queryClient = useQueryClient();

  const {
    data: { data: bookings, count } = {},
    isLoading,
    status,
  } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ["bookings", filter, sortBy, page],
  });

  //  pre-fetching

  if (page < Math.ceil(count / PAGE_SIZE))
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      queryKey: ["bookings", filter, sortBy, page + 1],
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
      queryKey: ["bookings", filter, sortBy, page - 1],
    });

  return { bookings, isLoading, status, count };
}
