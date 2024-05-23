'use server'
import prisma from '../../utils/prisma';

export async function GET(req: Request, { params }: { params: { id: string } }){
    try {
        const transfer = await prisma.transfer.findUnique({
            where : {
                transfer_id : params.id
            }
        })
        await prisma.$disconnect();
        return Response.json(transfer);
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}