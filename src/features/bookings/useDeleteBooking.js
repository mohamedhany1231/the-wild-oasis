import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as delBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => {
      delBooking(id);
    },

    onSuccess: () => {
      toast.success(`booking  deleted successfully`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("Error deleting booking");
    },
  });
  return { deleteBooking, isDeleting };
}
