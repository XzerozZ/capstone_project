'use server'
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { plus, vat } from '../calcutor';
import { sentReceipt } from '../email';
import { Stripe1 } from '../../interface/interface';
import { Endpoint } from '../../interface/interface';

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};
const endpointConfig: Endpoint = {
    endpoint: process.env.ENDPOINTSECRET || ''
}

export async function POST(req: Request) {
    const rawBody = await req.text()
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    const sig = req.headers.get('stripe-signature');
    let event;
    let result = "Webhook called."
    try {
        event = stripe.webhooks.constructEvent(rawBody,sig!,endpointConfig.endpoint!)
    }catch(error){
        return Response.json({
            error
        }, {status:500})
    }
    switch(event.type){
        case "checkout.session.completed" :
            const payment = event.data.object;
            console.log(payment)
            const sessionId = payment.id
            const order = await prisma.order.update({
                where : {
                    session_id : sessionId
                },
                data : {
                    status : payment.status
                }
            })
            const plusx = await plus(order.amount,order.user_id1)
            await prisma.wallet.updateMany({
                where : {
                    user_id : order.user_id1
                },
                data : {
                    amount : plusx
                }
            })
            const vat1 = parseInt(await vat(order.amount))
            await sentReceipt(order.user_id1,order.amount,vat1,order.order_id,order.product_name)
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return Response.json({ received: true, status: result});
}