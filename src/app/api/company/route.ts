'use server'
import { PrismaClient } from '@prisma/client';

// localhost:3000/api/company
export async function GET(){
    const prisma = new PrismaClient();
    try{
        const comid = await prisma.user.findMany({
            where : {
                role : 'company'
            }
        });
        await prisma.$disconnect();
        return Response.json(
            comid
        )
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "SERVER ERROR"
            }),
            {
                status: 404
            }
        );
    }
}
