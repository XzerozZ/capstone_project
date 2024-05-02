'use server'
import { PrismaClient } from '@prisma/client';

//http://localhost:3000/api/history/[id]
//GET
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const userhistory = await prisma.history.findMany({
            where : {
                user_id : parseInt(params.id)
            },
            include : {
                user : true ,
                job : true
            }
        })
        await prisma.$disconnect();
        if(userhistory) {
            return Response.json(userhistory)
        } else {
            return Response.json({
                message : "Not have any history"
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return  Response.json(
            {
                error : "Server Error"
            }, 
            {
                status : 500
            }
        )
    }
}