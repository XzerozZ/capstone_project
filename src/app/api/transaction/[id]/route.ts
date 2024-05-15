'use server'
import { PrismaClient } from '@prisma/client';

export async function GET(request: Request, { params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try {
        const order = await prisma.order.findUnique({
            where : {
                order_id : params.id
            }
        })
        await prisma.$disconnect();
        return Response.json(order);
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}