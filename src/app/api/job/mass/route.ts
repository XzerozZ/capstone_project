'use server'
import { PrismaClient } from '@prisma/client';
import { sentReceipt } from '../../transaction/email'
import { minus, vat } from '../../transaction/calcutor'
import { v4 as uuid } from "uuid";
export async function PUT( req: Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
        const money = parseInt(formData.get('money') as string)
        const mass = parseInt(formData.get('mass') as string)
        const productId = parseInt(formData.get("productId") as string)
        const job = await prisma.job.findUnique({
            where: {
                job_id: id
            }
        });
        const product = await prisma.product.findUnique({
            where : {
                product_id : productId
            }
          })
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },
            include : {
                wallet : {
                    select : {
                        amount : true
                    }
                }
            }
        })
        if(job && user && product){
            if(user.wallet[0].amount >= money){
                 const updateMass = await prisma.job.update({
                    where : {
                        job_id : job.job_id
                    },
                    data : {
                        mass : mass
                    }
                })
                const transId = uuid()
                const newtrans = await prisma.transaction.create({
                    data: {
                        trans_id : transId,
                        user_id1 : user.user_id,
                        user_id2 : 1,
                        amount : product.price,
                        product_name : product.name,
                    }
                })
                const minusOne = await minus(newtrans.amount,newtrans.user_id1)
                await prisma.wallet.updateMany({
                    where : {
                        user_id : newtrans.user_id1
                    },
                    data : {
                        amount : minusOne
                    }
                })
                const vat1 = parseInt(await vat(newtrans.amount))
                await sentReceipt(newtrans.user_id1,newtrans.amount,vat1,newtrans.trans_id,newtrans.product_name)
                await prisma.$disconnect();
                return Response.json(updateMass)
            }
           else {
            await prisma.$disconnect();
            return Response.json("Don't have enough money")
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