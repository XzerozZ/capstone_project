'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const bookmark = await prisma.bookmark.findMany({
            where : {
                user_id : user?.user_id
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