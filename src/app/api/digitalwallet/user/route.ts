'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },
            include : {
                digitalwal : true
            }   
        })
        if(user){
            await prisma.$disconnect();
            return Response.json(user)
        }
        else{
            await prisma.$disconnect();
            return Response.json(' Did not found this user ')
        }
    }
    catch(error){
        console.log(error)
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}