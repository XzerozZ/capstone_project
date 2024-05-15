export const vat = ( money : number ) => {
    const vatRate = 0.07;
    const vatAmount = money * vatRate;
    return vatAmount.toFixed(2);
};