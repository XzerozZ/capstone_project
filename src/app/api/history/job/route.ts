'use server'
import prisma from '../../utils/prisma';

export async function POST(req : Request) {
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
        const job = await prisma.job.findUnique({
            where : {
                job_id : id
            }
        })
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(job && user){
            const specifichistory = await prisma.history.findUnique({
                where : {
                    user_id_job_id : {
                        user_id : user.user_id,
                        job_id : job.job_id
                    }
                },
            })
            await prisma.$disconnect();
            if(specifichistory) {
                return Response.json(specifichistory)
            } 
            else {
                return Response.json({
                    message : "Not have any history"
                })
            }
        }
        else{
            await prisma.$disconnect();
            return Response.json({
                message : "Not have this job or user"
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