'use server'
import { PrismaClient } from '@prisma/client';

// localhost:3000/api/company/selector/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try{
        const jobid = parseInt(params.id)
        const candidate = await prisma.history.findMany({
            where : {
                job_id : jobid,
                NOT : {
                    status: "Rejected"
                }
            },
            include : {
                user : true
            }
        });
        await prisma.$disconnect();
        return Response.json(candidate)
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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const status = formData.get('status') as string;
        const jobId = parseInt(params.id);
        const userId = parseInt(formData.get('id') as string);

        const job = await prisma.job.findUnique({
            where: {
                job_id: jobId
            },
            include: {
                history: true
            }
        });

        if (!job) {
            throw new Error('Job not found');
        }
        const updatePromises: Promise<any>[] = [];
        if (status === 'true') {
            updatePromises.push(prisma.history.update({
                where: {
                    user_id_job_id: {
                        user_id: userId,
                        job_id: jobId
                    }
                },
                data: {
                    status: "On working"
                }
            }));

            job.history.forEach((candidate) => {
                if (candidate.user_id !== userId) {
                    updatePromises.push(prisma.history.update({
                        where: {
                            user_id_job_id: {
                                user_id: candidate.user_id,
                                job_id: jobId
                            }
                        },
                        data: {
                            status: "Rejected"
                        }
                    }));
                }
            });
            await prisma.job.update({
                where : {
                    job_id : jobId
                },
                data : {
                    status : "Closed"
                }
            })
        } else if (status === 'false') {
            updatePromises.push(prisma.history.update({
                where: {
                    user_id_job_id: {
                        user_id: userId,
                        job_id: jobId
                    }
                },
                data: {
                    status: "Rejected"
                }
            }));
        }
        await Promise.all(updatePromises);

        await prisma.$disconnect();
        return Response.json({ message: "Success" });

    } catch (error) {
        return new Response(
            JSON.stringify({
                error: "SERVER ERROR"
            }),
            {
                status: 500
            }
        );
    }
}
