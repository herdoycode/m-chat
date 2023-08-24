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
