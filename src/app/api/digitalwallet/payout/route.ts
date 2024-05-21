'use server'
import prisma from '../../utils/prisma';
import Stripe from 'stripe';
import { Stripe1 } from '@/app/api/interface/interface';

const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};

export async function PUT(req : Request){
    const stripe = new Stripe(stripeConfig.key);
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const money = parseInt(formData.get('moeny') as string)
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },
            include : {
                digitalwal : true
            }   
        })
        if(user){
            const customer = await stripe.customers.retrieve(user.digitalwal[0].wal_id);
            await stripe.customers.update(
                customer.id,
                {
                    balance : (money - user.digitalwal[0].amount) * 100 
                }
            )
            await prisma.digitalwal.update({
                where :{
                    wal_id : user.digitalwal[0].wal_id
                },
                data : {
                    amount :  - ( money - user.digitalwal[0].amount )
                }
            })
            await prisma.$disconnect();
            return Response.json("Success")
        }
        else{
            await prisma.$disconnect();
            return Response.json(' Did not found this user ')
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