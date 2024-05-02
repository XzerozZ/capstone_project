'use server'
import { PrismaClient } from '@prisma/client';

export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const bookmark = await prisma.bookmark.findMany({
            where : {
                user_id : parseInt(params.id)
            },
            include : {
                user : true ,
                job : true
            }
        })
        if(bookmark){
            return Response.json(bookmark)
        } else {
            return Response.json({
                message : "Not habe any your bookmark Job(s)"
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