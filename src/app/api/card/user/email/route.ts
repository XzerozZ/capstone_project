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
                rep : true
            }
        })
        if(user){
            const customer = await omise.recipients.retrieve(user.rep[0].rep_id)
            const rep = await prisma.rep.findFirst({
                where : {
                    user_id : user.user_id
                }
            })
            return Response.json({
                "customer" : customer,
                "user"  : rep
            })
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}