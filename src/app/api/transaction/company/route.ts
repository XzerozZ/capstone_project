'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const email = formData.get("email") as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(user && user.role === 'company'){
            const trans = await prisma.transaction.findMany({
                where : {
                    user_id1 : user.user_id
                }
            })
            await prisma.$disconnect();
            return Response.json(trans);
        }
        else if(user && user.role === 'user'){
            const trans = await prisma.transaction.findMany({
                where : {
                    user_id2 : user.user_id
                }
            })
            await prisma.$disconnect();
            return Response.json(trans);
        }
        else if(user && user.role === 'admin'){
            const trans = await prisma.transaction.findMany({
                where : {
                    user_id2 : user.user_id
                }
            })
            await prisma.$disconnect();
            return Response.json(trans);
        }
        else {
            await prisma.$disconnect();
            return Response.json("Something went wrong");
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}