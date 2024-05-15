'use server'
import { PrismaClient } from '@prisma/client';
import Stripe from "stripe" ;
import { Stripe1 } from '../interface/interface';
import { v4 as uuid } from "uuid";

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};
export async function POST(req: Request) {
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    try {
      const formData = await req.formData();
      const email = formData.get("email") as string
      const id = parseInt(formData.get("id") as string)
      const productId = parseInt(formData.get("productId") as string)
      const user = await prisma.user.findUnique({
        where : {
            email : email
        }
      })
      const product = await prisma.product.findUnique({
        where : {
            product_id : productId
        }
      })
      const job = await prisma.job.findUnique({
        where : {
            job_id : id
        }
      })
      if(user && product && job){
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
                        unit_amount : product.price
                    },
                    quantity: 1
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success.html?id=${orderId}',
            cancel_url: 'http://localhost:3000/cancel.html'
        })
        const neworder = await prisma.order.create({
            data: {
                order_id : orderId,
                user_id1 : user.user_id,
                user_id2 : 1,
                job_id : job.job_id,
                amount : product.price,
                product_name : product.name,
                session_id : seesion.id,
                status : seesion.status
            }
        })
        await prisma.$disconnect();
        return Response.json(neworder);
      }
      else {
        await prisma.$disconnect();
        return Response.json("Somethign went wrong");
      }
    } catch (error) {
      await prisma.$disconnect();
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
  }
