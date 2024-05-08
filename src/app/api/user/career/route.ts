'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const careers: { [key: string]: number } = {};
        for await (const [name, value] of formData.entries()) {
            if (name === 'career') {
                const careerName = value as string;
                let career = await prisma.career.findFirst({
                    where: {
                        name: careerName
                    }
                });
                if (!career) {
                    career = await prisma.career.create({
                        data: {
                            name: careerName
                        }
                    });
                }
                careers[careerName] = career.career_id;
            }
        }
        for (const [name, career_id] of Object.entries(careers)) {
            await prisma.user_career.create({
                data: {
                    user_id: id,
                    career_id: career_id
                }
            });
        }
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