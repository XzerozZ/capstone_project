'use server'
import { PrismaClient } from '@prisma/client';

//http://localhost:3000/api/history/user
//GET
export async function GET(req : Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const userhistory = await prisma.history.findMany({
            where : {
                user_id : user?.user_id
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