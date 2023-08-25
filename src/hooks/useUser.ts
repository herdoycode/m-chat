import { useQuery } from "@tanstack/react-query";
import User from "../entities/User";
import apiClient from "../services/apiClient";

const useUser = (id: string) =>
  useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: () => apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  });

export default useUser;
