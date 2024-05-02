'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const newrating = await prisma.rating_com.create({
            data : {
                user_id1 : parseInt(formData.get('giver') as string),
                job_id : parseInt(formData.get('job_id') as string),
                user_id2 : parseInt(formData.get('receiver') as string),
                rating : parseFloat(formData.get('rating') as string)
            }
        })
        await prisma.$disconnect();
        return Response.json(newrating)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json(
            {
                error
            }, 
            {   
                status : 500
            }
        )
    }
}