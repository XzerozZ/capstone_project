'use server'
import bcrypt from 'bcrypt';
import prisma from '../../utils/prisma';
import { formatIdcard , formatPhoneNumber } from '../format';
import { upLoadIMG } from '../../admin/supabase';

export async function POST(req: Request) {
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
        await prisma.$disconnect();
        return Response.json(newuser);
    } catch (error) {
        await prisma.$disconnect();
        console.log(error);
        return Response.json({
            error
        }, { status: 500 });
    }
}
