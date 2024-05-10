'use server'
import { PrismaClient } from '@prisma/client';

export async function POST( req: Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const user_id = parseInt(formData.get('user_id') as string)
        const job_id = parseInt(formData.get('job_id') as string);
        const link = formData.get('link') as string
        const work = await prisma.work.create({
            data : {
                user_id : user_id,
                job_id : job_id,
                work_link : link
            }
        })
        await prisma.history.update({
            where : {
                user_id_job_id : {
                    user_id : user_id,
                    job_id : job_id
                }
            },
            data : {
                status : 'Checking'
            }
        })
        await prisma.$disconnect();
        return Response.json(work)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}