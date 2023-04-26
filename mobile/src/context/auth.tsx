import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

interface IAuthContext {
   handleLogin: () => void;
   user: {
      email: string;
      password: string;
   };
   setUser: (user: { email: string; password: string }) => void;
   dados: {
      email: string;
      id: string;
      nome: string;
      password: string;
   };
   logado: boolean;
}

export const AuthContext = createContext({} as IAuthContext);

export default function auth({ children }: { children: ReactNode }) {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const [dados, setDados] = useState({
      email: "",
      id: "",
      nome: "",
      password: "",
   });

   const [logado, setLogado] = useState(false);

   const handleLogin = async () => {
      if (!user.email || !user.password)
         return alert("Existem campos vazios, complete para prosseguir");
      try {
         const response = await api.post("/login", {
            email: user.email,
            password: user.password,
         });
         setDados(response.data.dados);
         console.log(response.data.dados);
         setLogado(true);
         alert(response.data.message);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <AuthContext.Provider
         value={{
            handleLogin,
            user,
            dados,
            setUser,
            logado,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
