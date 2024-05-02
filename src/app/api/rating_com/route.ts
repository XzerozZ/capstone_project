'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const newrating = await prisma.rating_com.create({
            data : {
                user_id : parseInt(formData.get('user_id') as string),
                job_id : parseInt(formData.get('job_id') as string),
                company_id : parseInt(formData.get('company_id') as string),
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