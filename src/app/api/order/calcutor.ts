'use server'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const vat = ( money : number ) => {
    const vatRate = 0.07;
    const vatAmount = money * vatRate;
    return vatAmount.toFixed(2);
};
