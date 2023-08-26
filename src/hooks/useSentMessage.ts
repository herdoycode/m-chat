import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface UserMessage {
  chatId: string;
  sender: string;
  content: string;
}

const useSentMessage = (empty: () => void) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (message: UserMessage) =>
      apiClient.post("/messages", message).then((res) => res.data),

    onSettled: () => {
      empty();
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
    mutationKey: ["addMessage"],
  });
};
export default useSentMessage;
