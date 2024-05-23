'use server'
import prisma from '../../../utils/prisma';
import Omise from "omise";
import { IOptions } from 'omise';

const omiseConfig : IOptions = {
    secretKey : process.env.OMISE_SECRET_KEY || '',
    publicKey : process.env.OMISE_PUBLISHABLE_KEY || ''
}

export async function POST( req : Request ){
    const omise =  Omise(omiseConfig);
    try {
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },  
            include : {
                wallet : true
            }
        })
        if(user){
            const wallet = await prisma.wallet.findFirst({
                where : {
                    user_id : user.user_id
                }
            })
            if(wallet){
                const customer = await omise.customers.retrieve(user.wallet[0].wal_id)
                await prisma.$disconnect();
                return Response.json({
                    "customer" : customer,
                    "user"  : wallet
                })
            }
            else{
                await prisma.$disconnect();
                return Response.json("Not Found Card(s)")
            }
        }
        else{
            await prisma.$disconnect();
            return Response.json("Not Found This user")
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}

export async function DELETE( req : Request ){
    const Omise = require('omise');
    const omise =  Omise(omiseConfig);
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string;
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },  
            include : {
                wallet : true
            }
        })
        if(user){
            await omise.customers.destroy(user.wallet[0].wal_id);
            await prisma.wallet.deleteMany({
                where : {
                    user_id : user.user_id
                }
            })
            return Response.json("Delete Success")
        }
        else{
            return Response.json("Not Found This user")
        }
    }
    catch(error){
        console.log(error)
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}