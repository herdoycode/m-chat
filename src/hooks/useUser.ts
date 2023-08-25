import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import User from "../entities/User";

const useUser = (id: string) =>
  useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  });

export default useUser;
