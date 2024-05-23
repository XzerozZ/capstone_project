'use server'
import prisma from '../../utils/prisma';
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
        const card_number = formData.get('card_number') as string
        if(card_number.length !== 16){
            return Response.json("Card_number's length is not right ")
        }

        const user = await prisma.user.findUnique({
            where : {
                email : email
            },  
        })
        if(user){
            const cus = await omise.recipients.create({
                name: user.first_name + ' ' + user.last_name,
                email: user.email,
                type: 'individual',
                verified : true,
                bank_account: {
                    brand: 'kbank',
                    number: card_number,
                    name: user.first_name + '' + user.last_name,
                    last_digits: card_number.toString().slice(-4),
                    created : Date(),
                    object: 'bank_account'
                },
            })
            await prisma.rep.create({
                data : {
                    rep_id : cus.id,
                    user_id : user.user_id,
                    brand : cus.bank_account.brand,
                    card_number : card_number,
                }
            })
            return Response.json("Add Credit Card Successfully")
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