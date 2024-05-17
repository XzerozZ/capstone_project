'use server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import Stripe from "stripe" ;
import { Stripe1 } from '../../interface/interface';
import { formatIdcard , formatPhoneNumber } from '../format';
import { upLoadIMG } from '../../admin/supabase';
const stripeConfig: Stripe1 = {
    key: process.env.STRIPE_SECRET_KEY || ''
};
export async function POST(req: Request) {
    const prisma = new PrismaClient();
    const stripe = new Stripe(stripeConfig.key);
    try {
        const formData = await req.formData();
        let image: string | null = null;
        for await (const [name, value] of formData.entries()) {
            if (name === 'image' && value instanceof File) {
                image = await upLoadIMG(value);
            } else if (name === 'phone_number') {
                const formatPhone = await formatPhoneNumber(value as string);
                formData.set(name, formatPhone);
            } else if (name === 'id_card') {
                const formatCard = await formatIdcard(value as string);
                formData.set(name, formatCard);
            } else if (name === 'password') {
                const hashedPassword = bcrypt.hashSync(value as string, 10);
                formData.set(name, hashedPassword);
            }
        }
        const newuser = await prisma.user.create({
            data: {
                first_name: formData.get('first_name') as string,
                last_name: formData.get('last_name') as string,
                username: formData.get('username') as string,
                image: image,
                phone_number: formData.get('phone_number') as string, // 1234567890
                id_card: formData.get('id_card') as string, // 1234567891234
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                role: formData.get('role') as string,
            },
        });
        if(newuser.role === 'company') {
            const wal = await stripe.customers.create({
                name: newuser.username,
                email: newuser.email,
                balance: -10000000
            });
            await prisma.digitalwal.create({
                data : {
                    wal_id : wal.id,
                    user_id : newuser.user_id,
                    amount : -(wal.balance) / 100
                }
            })
            await prisma.$disconnect();
            return Response.json(newuser);
        }
        else if(newuser.role === 'user'){
            const wal = await stripe.customers.create({
                name: newuser.username,
                email: newuser.email,
                balance: 0
            });
            await prisma.digitalwal.create({
                data : {
                    wal_id : wal.id,
                    user_id : newuser.user_id,
                    amount : wal.balance
                }
            })
            await prisma.$disconnect();
            return Response.json(newuser);
        }
        else {
            await prisma.$disconnect();
            return Response.json(newuser);
        }    
    } catch (error) {
        await prisma.$disconnect();
        console.log(error);
        return Response.json({
            error
        }, { status: 500 });
    }
}
