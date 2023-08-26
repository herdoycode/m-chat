import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import Message from "../entities/Message";

const useMessages = (chatId: string) =>
  useQuery<Message[], Error>({
    queryKey: ["messages", chatId],
    queryFn: () =>
      apiClient
        .get<Message[]>("/messages", { params: { chatId } })
        .then((res) => res.data),
  });

export default useMessages;
