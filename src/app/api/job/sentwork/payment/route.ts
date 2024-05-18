'use server'
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { Stripe1 } from '@/app/api/interface/interface';
import { sentInvoice } from '../email';
import { sentSalary } from '../salary';

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};

export async function PUT(req : Request) {
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    try{
        const formData = await req.formData();
        const orderId = formData.get('orderId') as string
        const order = await prisma.order.findUnique({
            where : {
                order_id : orderId
            }
        })
        if(order){
            await prisma.history.update({
                where: {
                    user_id_job_id: {
                      user_id: order.user_id2,
                      job_id: order.job_id,
                    },
                  },
                data : {
                    status: 'Completed'
                }
            })
            const wal1 = await prisma.digitalwal.findMany({
                where : {
                    user_id : order.user_id1
                },
                select : {
                    wal_id : true,
                    amount : true
                }
            })
            const wal2 = await prisma.digitalwal.findMany({
                where : {
                    user_id : order.user_id2
                },
                select : {
                    wal_id : true,
                    amount : true
                }
            })
            const customer1 = await stripe.customers.retrieve(wal1[0]?.wal_id);
            const customer2 = await stripe.customers.retrieve(wal2[0]?.wal_id)
            await stripe.customers.update(
                customer1.id,
                {
                    metadata : {
                        order_id : order.order_id
                    },
                    balance : (order.amount - wal1[0]?.amount) * 100 
                }
            )
            await stripe.customers.update(
                customer2.id,
                {
                    metadata : {
                        order_id : order.order_id
                    },
                    balance : -(order.amount + wal2[0]?.amount) * 100 
                }
            )
            await prisma.digitalwal.update({
                where :{
                    wal_id : wal2[0]?.wal_id
                },
                data : {
                    amount :  order.amount + wal2[0]?.amount 
                }
            })
            await prisma.digitalwal.update({
                where : {
                    wal_id : wal1[0]?.wal_id
                },
                data : {
                    amount : - ( order.amount - wal1[0]?.amount )
                }
            })
            await sentSalary(order.user_id2,order.amount)
            await sentInvoice(order.user_id1,order.amount,order.order_id,order.product_name)
            return Response.json("Success")
        }
    }
    catch(error){
        console.log(error)
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}