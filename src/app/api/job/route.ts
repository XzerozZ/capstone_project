'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    try {
      const data = await request.json();
      const { title, description, budget, type } = data;
  
      const newjob = await prisma.job.create({
        data: {
          title,
          description,
          budget,
          type,
        },
      });
      await prisma.$disconnect();
      console.log('New job:', newjob);
      return new Response(JSON.stringify(newjob), { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      await prisma.$disconnect();
      return new Response(JSON.stringify({ error: 'Invalid request data' }), { status: 400 });
    }
  }
  
