'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const formData = await req.formData();
    const newRating = await prisma.rating_user.create({
      data: {
        user_id1: parseInt(formData.get('giver') as string),
        user_id2: parseInt(formData.get('receiver') as string),
        job_id: parseInt(formData.get('job_id') as string),
        friendly_rating: parseFloat(formData.get('friendly_rating') as string),
        efficiency_rating: parseFloat(formData.get('efficiency_rating') as string),
        accuracy_rating: parseFloat(formData.get('accuracy_rating') as string),
      },
    });

    await prisma.$disconnect();
    return Response.json(newRating);
  } catch (error) {
    await prisma.$disconnect();
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}