'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const contact = await prisma.contact.create({
            data: {
                user_id: parseInt(formData.get('id') as string),
                facebook: formData.get('facebook') as string,
                instagram: formData.get('instagram') as string,
                linkedin: formData.get('linkedin') as string
            }
        });
        return Response.json('Successfully')
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}