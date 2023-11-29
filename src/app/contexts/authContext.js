import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
  login: async (username, password) => {
    // Implemente sua lógica de login aqui
    return Promise.resolve(true);
  },
  logout: () => {
    // Implemente sua lógica de logout aqui
  },
});