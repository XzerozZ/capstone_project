'use server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client';
import { upLoadIMG } from '../../../admin/supabase';
import { formatPhoneNumber } from '../../format';

export async function POST( req : Request) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        let image : string | null = null;
        for await (const [name,value] of formData.entries()){
            if(name === 'image' && value instanceof File){
                image = await upLoadIMG(value);
            }
            else if(name === 'phone_number'){
                const formattedPhoneNumber = await formatPhoneNumber(value as string);
                formData.set(name, formattedPhoneNumber);
            }
            else if (name === 'password'){
                const hashedPassword = bcrypt.hashSync(value as string, 10)
                formData.set(name, hashedPassword);
            }
        }
        const newcom = await prisma.company.create({
            data : {
                name : formData.get('name') as string,
                image : image , 
                phone_number : formData.get('phone_number') as string , 
                email : formData.get('email') as string ,
                password : formData.get('password') as string
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Created Account Successfully",
            data : {
                newcom
            }
        })
    }
    catch(error) {
        await prisma.$disconnect();
        console.log(error)
        return Response.json(
            {
                error
            }, 
            {
                status : 500
            }
        )
    }
}