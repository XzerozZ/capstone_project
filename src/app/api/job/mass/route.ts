'use server'
import { PrismaClient } from '@prisma/client';

export async function PUT( req: Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const money = parseInt(formData.get('money') as string)
        const mass = parseInt(formData.get('mass') as string)
        const job = await prisma.job.findUnique({
            where: {
                job_id: id
            }
        });
        if(job && mass === 1){
            const updateMass = await prisma.job.update({
                where : {
                    job_id : job.job_id
                },
                data : {
                    mass : mass
                }
            })
            await prisma.$disconnect();
            return Response.json(updateMass)
        }
        else {
            await prisma.$disconnect();
            return Response.json({
                message : "Didn't found this job"
            })
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}