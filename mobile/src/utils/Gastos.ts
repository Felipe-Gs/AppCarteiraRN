interface IGasto {
   id: string;
   label: string;
   valor: number;
   color: string;
}

interface IGastos {
   [key: string]: IGasto[];
}

export const Gastos: IGastos = {
   Janeiro: [
      {
         id: "1",
         label: "água",
         valor: 30,
         color: "green",
      },
      {
         id: "2",
         label: "luz",
         valor: 60,
         color: "red",
      },
      {
         id: "3",
         label: "alimentação",
         valor: 40,
         color: "blue",
      },
      {
         id: "4",
         label: "viajem",
         valor: 20,
         color: "pink",
      },
   ],
   Fevereiro: [
      {
         id: "5",
         label: "água",
         valor: 20,
         color: "green",
      },
      {
         id: "6",
         label: "luz",
         valor: 70,
         color: "red",
      },
      {
         id: "7",
         label: "alimentação",
         valor: 10,
         color: "blue",
      },
      {
         id: "8",
         label: "viajem",
         valor: 60,
         color: "pink",
      },
   ],
};
