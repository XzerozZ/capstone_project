import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../hashpassword';
import { formatPhoneNumber, formatIdcard } from '../format';

export async function postRegister(request : Request) {
    const prisma = new PrismaClient();
    try {
        const requestBody = request.body as Record<string, any>;
        const { first_name, last_name, username, image, phone_number, id_card, email, password } = requestBody;
        const oneDay = 24 * 60 * 60 * 1000;
        const newUser = await prisma.user.create({
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
        const token = jwt.sign({ userId: newUser.user_id }, process.env.JWT_SECRET!);
        const cookieHeaderValue = `token=${token}; Max-Age=${oneDay};`;
        return Response.json(newUser);
    } catch (error) {
        Response.json({ error: 'Internal server error' });
    } finally {
        await prisma.$disconnect();
    }
}
