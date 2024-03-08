import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatIdcard , formatPhoneNumber } from '../format';
export async function POST(req : Request){
    const prisma = new PrismaClient();
    try{
        const { first_name,last_name,username,phone_number,id_card,email, password } = await req.json()
        const hashedPassword = bcrypt.hashSync(password, 10)
        const newuser = await prisma.user.create({
            data:{
                first_name,
                last_name,
                username,
                phone_number : await formatPhoneNumber(phone_number),
                id_card : await formatIdcard(id_card),
                email,
                password : hashedPassword
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " create account successfully ",
            data : {
                newuser 
            }
        })
    } catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}