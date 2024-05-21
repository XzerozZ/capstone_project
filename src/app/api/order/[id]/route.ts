'use server'
import prisma from '../../utils/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }){
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