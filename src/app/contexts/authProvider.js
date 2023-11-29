import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  const login = async (username, password) => {
    const data = await api.login(username, password);
    if (data === undefined) {
      return false;
    }

    setUser(data.user);
    setToken(data.token);
    return true;
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
