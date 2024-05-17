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
        if(user){
            const order = await prisma.order.findMany({
                where : {
                    user_id1 : user.user_id
                }
            })
            await prisma.$disconnect();
            return Response.json(order);
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