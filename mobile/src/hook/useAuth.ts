import { AuthContext } from "../context/auth";
import { useContext } from "react";

export default function useAuth() {
   const context = useContext(AuthContext);
   return context;
}
