import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  mode: "dark" | "light";
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: () =>
        set(({ mode }) => ({ mode: mode === "light" ? "dark" : "light" })),
    }),
    { name: "theme" }
  )
);

interface MessagesCollapse {
  isCollapse: boolean;
  setCollapse: () => void;
}

export const useMessageCollapse = create<MessagesCollapse>((set) => ({
  isCollapse: false,
  setCollapse: () => set(({ isCollapse }) => ({ isCollapse: !isCollapse })),
}));

interface ChatStore {
  selectedChatId: string;
  selectedFriendId: string;
  setChatId: (id: string) => void;
  setFriendId: (id: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  selectedChatId: "",
  selectedFriendId: "",
  setChatId: (id) => set(() => ({ selectedChatId: id })),
  setFriendId: (id) => set(() => ({ selectedFriendId: id })),
}));
