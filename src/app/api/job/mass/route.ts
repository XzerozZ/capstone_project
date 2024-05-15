'use server'
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from "uuid";
import { vat } from './calcutor';
import { sentReceipt } from './email';
export async function PUT( req: Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
        const productId = parseInt(formData.get('productId') as string)
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
        const product = await prisma.product.findUnique({
            where : {
                product_id : productId
            }
        })
        const transactionId = uuid();
        if(job && mass === 1 && user && product){
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
                    trans_id : transactionId,
                    user_id1 : user.user_id,
                    user_id2 : 1,
                    job_id : job.job_id,
                    amount : product.price
                }
            })
            const vat_job = parseFloat(await vat(product.price))
            const sent = await sentReceipt(user.email,product.price,vat_job,transactionId,product.name)
            if(sent){
                await prisma.$disconnect();
                return Response.json("Success")
            }
            else{
                await prisma.$disconnect();
                return Response.json("Error")
            }
        }
        else if(job && mass === 0 && user && product) {
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
                    trans_id : transactionId,
                    user_id1 : user.user_id,
                    user_id2 : 1,
                    job_id : job.job_id,
                    amount : product.price
                }
            })
            const vat_job = parseFloat(await vat(product.price))
            const sent = await sentReceipt(user.email,product.price,vat_job,transactionId,product.name)
            if(sent){
                await prisma.$disconnect();
                return Response.json("Success")
            }
            else{
                await prisma.$disconnect();
                return Response.json("Error")
            }
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