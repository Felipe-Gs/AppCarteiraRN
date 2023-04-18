export function toFormattedPhoneString(this: number): string {
   const phoneNumber = String(this);
   const areaCode = phoneNumber.slice(0, 2);
   const prefix = phoneNumber.slice(2, 6);
   const suffix = phoneNumber.slice(6, 11);
   return `(${areaCode}) ${prefix}-${suffix}`;
}
