'use server'
import prisma from '../../utils/prisma';
import { v4 as uuid } from "uuid";
import { IOptions } from 'omise';

const omiseConfig : IOptions = {
    secretKey : process.env.OMISE_SECRET_KEY || '',
    publicKey : process.env.OMISE_PUBLISHABLE_KEY || ''
}

export async function POST( req : Request ) {
    const Omise = require('omise');
    const omise =  Omise(omiseConfig);
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string;
        const city = formData.get('city') as string;
        const postal_code = formData.get('postal_code') as string
        const card_number = formData.get('card_number') as string
        const expiration_month = parseInt(formData.get('exp_month') as string)
        const expiration_year = parseInt(formData.get('exp_year') as string)
        const security_code = formData.get('code') as string
        if(postal_code.length !== 5){
            return Response.json("Postal_code's length is not right")
        }
        if(card_number.length !== 16){
            return Response.json("Card_number's length is not right ")
        }
        if(expiration_month > 12){
            return Response.json('Your exp_month is not correct')
        }
        if(expiration_year < 2025){
            return Response.json("YOur card have already expired")
        }
        if(security_code.length !== 3){
            return Response.json("Security code is not correct")
        }
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },  
        })
        if(user){
            const token = await omise.tokens.create({
                card: {
                  name: user.username,
                  city: city,
                  postal_code: parseInt(postal_code),
                  number: card_number,
                  expiration_month: expiration_month,
                  expiration_year: expiration_year,
                  security_code: "123",
                },
            });
            const wallet = await omise.customers.create({
                email : user.email,
                card : token.id
            })
            await prisma.wallet.create({
                data : {
                    wal_id : wallet.id,
                    user_id : user.user_id,
                    card_number : card_number
                }
            })
            await prisma.$disconnect();
            return Response.json("Add Credit Card Successfully")
        }
        else{
            await prisma.$disconnect();
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