import { useQuery } from "@tanstack/react-query";
import Chat from "../entities/Chat";
import apiClient from "../services/apiClient";

const useChats = (userId: string) =>
  useQuery<Chat[], Error>({
    queryKey: ["chats", userId],
    queryFn: () =>
      apiClient
        .get<Chat[]>("/chats", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
  });

export default useChats;
