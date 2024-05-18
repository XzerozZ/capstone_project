'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const email = formData.get('giver') as string
        const id = parseInt(formData.get('job_id') as string)
        const job = await prisma.job.findUnique({
            where : {
                job_id : id
            },
            include : {
                post : true
            }
        })
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(user && job){
            const newrating = await prisma.rating_com.create({
                data : {
                    user_id1 : user.user_id,
                    job_id : job.job_id,
                    user_id2 : job.post[0].user_id,
                    friendly_rating : parseInt(formData.get('friendly_rating') as string),
                    value_rating : parseInt(formData.get('value_rating') as string)
                }
            })
            await prisma.$disconnect();
            return Response.json(newrating)
        }
        else{
            await prisma.$disconnect();
            return Response.json("Can't find user or job")
        }
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