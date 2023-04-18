import { createContext, ReactNode } from "react";

interface IAuthContext {
   soma: (a: number, b: number) => number;
}

export const AuthContext = createContext({} as IAuthContext);

export default function auth({ children }: { children: ReactNode }) {
   const soma = (a: number, b: number) => a + b;
   return (
      <AuthContext.Provider
         value={{
            soma,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
