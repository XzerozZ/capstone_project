'use server'
import prisma from '../utils/prisma';

// localhost:3000/api/company
export async function GET(){
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
