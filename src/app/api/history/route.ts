'use server'
import { PrismaClient } from '@prisma/client';

//http://localhost:3000/api/history
//POST
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const history =  await prisma.history.create({
            data:{
                user_id : parseInt(formData.get('user_id') as string),
                job_id : parseInt(formData.get('job_id') as string)
            },
        })
        await prisma.$disconnect();
        return Response.json(history)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
} 