'use server'
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
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
            const sessionId = payment.id
            await prisma.order.update({
                where : {
                    session_id : sessionId
                },
                data : {
                    status : payment.status
                }
            })
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    return Response.json({ received: true, status: result});
}