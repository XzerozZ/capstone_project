'use server'
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from "uuid";
import Stripe from 'stripe';
import { Stripe1 } from '../../interface/interface';

const stripeConfig: Stripe1 = {
  key: process.env.STRIPE_SECRET_KEY || ''
};

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  const stripe = new Stripe(stripeConfig.key);
  try {
    const formData = await req.formData();
    const job_id = parseInt(formData.get('job_id') as string);
    const email = formData.get("email") as string
    const job = await prisma.job.findUnique({
      where : {
        job_id : job_id
      }
    })
    const work = await prisma.work.findFirst({
      where: { 
        job_id: job_id 
      },
    });
    const company = await prisma.user.findUnique({
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
    const user = await prisma.user.findUnique({
      where : {
        user_id : work?.user_id
      },
    })
    if (work && user && job && company) {
      if(company.digitalwal[0].amount >= job.budget){
          const orderId = uuid()
          const seesion = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'thb',
                        product_data : {
                            name: job.title,
                        },
                        unit_amount : ( job.budget ) * 100
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
                user_id1 : company.user_id,
                user_id2 : user.user_id,
                job_id : job.job_id,
                amount : job.budget,
                product_name : job.title,
                session_id : seesion.id,
                status : seesion.status
            }
          })
          await prisma.$disconnect();
          return Response.json(order.order_id)
      }
      else {
        await prisma.$disconnect();
        return Response.json("Don't have enough money")
      }
    }
  } catch (error) {
    await prisma.$disconnect();
    return Response.json({ error }, { status: 500 });
  }
}