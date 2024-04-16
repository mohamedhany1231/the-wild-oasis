import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const clientQuery = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationKey: ["cabins"],
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("cabin deleted successfully");
      clientQuery.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => {
      toast.error("error deleting cabin");
    },
  });

  return { isDeleting, deleteCabin };
}
