import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success("user account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    mutationKey: "cabins",
  });

  return { updateUser, isUpdating };
}
