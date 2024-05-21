'use server'
import prisma from '../../utils/prisma';

export async function POST(req: Request) {
    try{
        const formData = await req.formData();
        await prisma.contact.create({
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