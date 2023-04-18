export function maiorValor(numbers: number[]): number {
   return numbers.reduce((acumulador: number, item: number) => {
      return acumulador > item ? acumulador : item;
   });
}
