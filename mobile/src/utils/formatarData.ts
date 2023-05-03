export default function formatarData(data: string) {
   const d = new Date(data);
   const dia = ("0" + d.getDate()).slice(-2);
   const mes = ("0" + (d.getMonth() + 1)).slice(-2);
   const ano = d.getFullYear();
   const hora = ("0" + d.getHours()).slice(-2);
   const minuto = ("0" + d.getMinutes()).slice(-2);
   return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}
