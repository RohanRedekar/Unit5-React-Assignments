import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const LoginStatus = () => {
  const { auth, msg } = useContext(AuthContext);
  return <h2>{auth ? `User: ${msg}` : "Logged out"}</h2>;
};
