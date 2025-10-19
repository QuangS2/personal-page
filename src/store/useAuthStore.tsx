
import { create } from "zustand";
import type { User } from "../types/User";

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    login: (userData: User, token: string) =>{
        localStorage.setItem("token", token);
        set({ user: userData, token: token });
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
    }
}));    