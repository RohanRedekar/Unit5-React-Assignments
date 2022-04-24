import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setIsAuth] = useState(false);
  const [msg, setMsg] = useState(null);

  const toggleAuth = () => {
    if (auth) {
      setIsAuth(false);
      setMsg(null);
      return;
    }
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        setIsAuth(true), setMsg(res.config.data);
      });
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth, msg }}>
      {children}
    </AuthContext.Provider>
  );
};
