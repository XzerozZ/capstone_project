'use server'
import { PrismaClient } from '@prisma/client';

export async function GET(req: Request, { params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try {
        const trans = await prisma.transaction.findUnique({
            where : {
                trans_id : params.id
            }
        })
        await prisma.$disconnect();
        return Response.json(trans);
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}