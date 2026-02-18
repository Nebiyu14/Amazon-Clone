import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function useAuth() {
  const authContextData = useContext(AuthContext);
  if (!authContextData) {
    throw new Error("useAuth must be used inside an AuthProvider ");
  }

  return authContextData;
}

export default useAuth;


