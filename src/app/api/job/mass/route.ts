'use server'
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe'
import { Stripe1 } from '../../interface/interface';
import { v4 as uuid } from "uuid";

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};

export async function POST( req: Request ) {
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
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
                digitalwal : {
                    select : {
                        amount : true
                    }
                }
            }
        })
        if(job && user && product){
            if(user.digitalwal[0].amount >= product.price){
                const orderId = uuid()
                const seesion = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: 'thb',
                                product_data : {
                                    name: product.name,
                                },
                                unit_amount : (product.price)*100
                            },
                            quantity: 1
                        },
                    ],
                    mode: 'payment',
                    success_url: 'http://localhost:3000/success.html?id=${orderId}',
                    cancel_url: 'http://localhost:3000/cancel.html'
                })
                console.log(seesion)
                const order = await prisma.order.create({
                    data: {
                        order_id : orderId,
                        user_id1 : user.user_id,
                        user_id2 : 1,
                        job_id : job.job_id,
                        amount : product.price,
                        product_name : product.name,
                        product_mass : product.mass,
                        session_id : seesion.id,
                        status : seesion.status
                    }
                })
                await prisma.$disconnect();
                return Response.json({
                    order : order.order_id ,
                    URL : seesion.url
                })
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