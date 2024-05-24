'use server'
import prisma from '../utils/prisma';

//localhost:3000/api/checkbookmark
//POST
export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const user = await prisma.user.findUnique({
            where : {
                user_id : parseInt(formData.get('user_id') as string),
            }
        })
        const job = await prisma.job.findUnique({
            where : {
                job_id : parseInt(formData.get('job_id') as string)
            }
        })
        if(user && job){
            const mark = await prisma.bookmark.findUnique({
                where : {
                    user_id_job_id : {
                        user_id : user.user_id,
                        job_id : job.job_id
                    }
                }
            })
            if(mark){
                await prisma.$disconnect();
                return Response.json({
                    message : "Already Added"
                })
            }
            else {
                await prisma.$disconnect();
                return Response.json({
                    message : "Not Added"
                })
            }
        }
         else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not Found User or Job"
            })
        }
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