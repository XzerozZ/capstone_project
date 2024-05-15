'use server'
import { PrismaClient } from '@prisma/client';

export async function PUT( req: Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
        const money = parseInt(formData.get('money') as string)
        const mass = parseInt(formData.get('mass') as string)
        const job = await prisma.job.findUnique({
            where: {
                job_id: id
            }
        });
        const user = await prisma.user.findUnique({
            where: {
                email : email
            }
        })
        if(job && mass === 1 && user){
            await prisma.job.update({
                where : {
                    job_id : job.job_id
                },
                data : {
                    mass : mass
                }
            })
            await prisma.transaction.create({
                data : {
                    user_id1 : user.user_id,
                    user_id2 : 1,
                    job_id : job.job_id,
                    amount : money
                }
            })
            await prisma.$disconnect();
            return Response.json("Success")
        }
        else if(job && mass === 0 && user) {
            await prisma.job.update({
                where : {
                    job_id : job.job_id
                },
                data : {
                    mass : mass
                }
            })
            await prisma.transaction.create({
                data : {
                    user_id1 : user.user_id,
                    user_id2 : 1,
                    job_id : job.job_id,
                    amount : money
                }
            })
            await prisma.$disconnect();
            return Response.json("Success")
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