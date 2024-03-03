import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../hashpassword';
import { formatPhoneNumber, formatIdcard } from '../format';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function postHandler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { first_name, last_name, username, image, phone_number, id_card, email, password } = await request.body;
        const oneDay = 24 * 60 * 60 * 1000;
        const newuser = await prisma.user.create({
            data: {
                first_name,
                last_name,
                username,
                image,
                phone_number: await formatPhoneNumber(phone_number),
                id_card: await formatIdcard(id_card),
                email,
                password: await hashPassword(password)
            }
        });
        const token = jwt.sign({ userId: newuser.user_id }, process.env.JWT_SECRET!);
        response.setHeader('Set-Cookie', `token=${token}; Max-Age=${oneDay};`);
        return response.json(newuser)
    } catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
}
