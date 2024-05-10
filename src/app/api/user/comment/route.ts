'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        const userComment = await prisma.rating_user.findMany({
            where : {
                user_id2 : user?.user_id
            },
            include : {
                user1 : true
            }
        })
        return Response.json(userComment)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}