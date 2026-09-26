// import { create } from "zustand";

// interface AuthState {
//   token: string | null;

//   setToken: (token: string) => void;

//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   token: localStorage.getItem("token"),

//   setToken: (token) => {
//     localStorage.setItem("token", token);

//     set({ token });
//   },

//   logout: () => {
//     localStorage.removeItem("token");

//     set({ token: null });
//   },
// }));

import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;

  setAuth: (
    token: string,
    user: User
  ) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>(
  (set) => ({
    user: (() => {
      const storedUser =
        localStorage.getItem("user");

      return storedUser
        ? JSON.parse(storedUser)
        : null;
    })(),

    token: localStorage.getItem("token"),

    setAuth: (token, user) => {
      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      set({
        token,
        user,
      });
    },

    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      set({
        token: null,
        user: null,
      });
    },
  })
);