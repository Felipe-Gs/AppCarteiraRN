export declare global {
   namespace ReactNavigation {
      interface RootParamList {
         Login: undefined;
         Home: undefined;
         Cadastro: undefined;
         RecuperarSenha: undefined;
         homeTabs: undefined;
      }
   }
}
declare global {
   interface Number {
      toFormattedPhoneString(): string;
   }
}

declare global {
   interface Array<T> {
      maiorValor(): number;
   }
}
