import { useContext } from "react";
import { Login } from "../pages/login";
import { AuthContext } from "./authContext";

export const RequiredAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return children;
};
