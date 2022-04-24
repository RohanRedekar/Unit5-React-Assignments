import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
  const { auth, toggleAuth } = useContext(AuthContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        border: "1px solid black",
        fontSize: "18px",
      }}
    >
      <button onClick={toggleAuth}>{auth ? "Logout" : "Login"}</button>
    </nav>
  );
};
