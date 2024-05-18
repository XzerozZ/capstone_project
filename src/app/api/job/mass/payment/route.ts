'use server'
import { PrismaClient } from '@prisma/client';
import { vat } from '@/app/api/order/calcutor';
import { sentReceipt } from '@/app/api/order/email';
import Stripe from 'stripe';
import { Stripe1 } from '@/app/api/interface/interface';

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};

export async function PUT(req : Request) {
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    try {
        const formData = await req.formData();
        const orderId = formData.get('orderId') as string
        const order = await prisma.order.findUnique({
            where : {
                order_id : orderId
            }
        })
        if(order){
            await prisma.job.update({
                where : {
                    job_id : order.job_id
                },
                data : {
                    mass : order.product_mass
                }
            })
            const wal = await prisma.digitalwal.findMany({
                where : {
                    user_id : order.user_id1
                },
                select : {
                    wal_id : true,
                    amount : true
                }
            })
            const customer = await stripe.customers.retrieve(wal[0]?.wal_id);
            await stripe.customers.update(
                customer.id,
                {
                    metadata : {
                        order_id : order.order_id
                    },
                    balance : (order.amount - wal[0]?.amount) * 100
                }
            )
            await prisma.digitalwal.update({
                where : {
                    wal_id : wal[0]?.wal_id
                },
                data : {
                    amount : - ( order.amount - wal[0]?.amount )
                }
            })
            const vat1 = parseInt(await vat(order.amount))
            await sentReceipt(order.user_id1,order.amount,vat1,order.order_id,order.product_name)
            return Response.json("Success")
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}