'use server'
import { PrismaClient } from '@prisma/client';

// localhost:3000/api/company/selector/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try{
        const jobid = parseInt(params.id)
        const candidate = await prisma.job.findMany({
            where : {
                job_id : jobid
            },
            include : {
                history : {
                    include : {
                        user : true
                    }
                }
            }
        });
        await prisma.$disconnect();
        return Response.json(
            candidate
        )
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "SERVER ERROR"
            }),
            {
                status: 404
            }
        );
    }
}

export async function PUT(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const status = formData.get('status') as string
        const jobid = parseInt(params.id)
        const user_id = parseInt(formData.get('id') as string)
        const job = await prisma.job.findMany({
            where : {
                job_id : jobid
            },
            include : {
                history : true
            }
        });

        if(job && status === 'true'){
            const candidate = await prisma.history.update({
                where : {
                    user_id_job_id: { 
                        user_id: user_id, 
                        job_id: jobid 
                    }
                },
                data: {
                    status: "Accepted" 
                }
            })
            await prisma.$disconnect();
            return Response.json(
                candidate
            )
        }
        else if(job && status === 'false'){
            const candidate = await prisma.history.update({
                where : {
                    user_id_job_id: { 
                        user_id: user_id, 
                        job_id: jobid 
                    }
                },
                data: {
                    status: "Rejected" 
                }
            })
            await prisma.$disconnect();
            return Response.json(
                candidate
            )
        }
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "SERVER ERROR"
            }),
            {
                status: 404
            }
        );
    }
}
