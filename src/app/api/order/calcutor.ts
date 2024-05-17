'use server'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const vat = ( money : number ) => {
    const vatRate = 0.07;
    const vatAmount = money * vatRate;
    return vatAmount.toFixed(2);
};
export const minus = async ( money : number , id : number) => {
    const wallet = await prisma.wallet.findFirst({
        where : {
            user_id : id
        }
    })
    const balance = (wallet?.amount ?? 0) - money;
    await prisma.$disconnect();
    return balance
}
export const plus = async ( money : number , id : number) => {
    const wallet = await prisma.wallet.findFirst({
        where : {
            user_id : id
        }
    })
    const balance = money + (wallet?.amount ?? 0);
    await prisma.$disconnect();
    return balance
}