'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    try {
      const data = await request.json();
      const { title, description, budget, type , categories } = data;
      const categoryIds: number[] = [];
      for (const categoryName of categories) {
        let category = await prisma.category.findFirst({
            where: { name: categoryName }
        });

        if (!category) {
            category = await prisma.category.create({
                data: { name: categoryName }
            });
        }
        categoryIds.push(category.category_id);
    }
      const newjob = await prisma.job.create({
        data: {
          title,
          description,
          budget,
          type,
          job_exp: {
            create: categoryIds.map(category_id => ({
              category: { 
                connect: { 
                  category_id 
                } 
              }
            }))
          }
        },
        include: {
          job_exp: true
        },
      });
      await prisma.$disconnect();
      return Response.json(newjob)
    } catch (error) {
      console.error('Error:', error);
      await prisma.$disconnect();
      return new Response(JSON.stringify({ error: 'Invalid request data' }), { status: 400 });
    }
}
export async function GET() {
  const prisma = new PrismaClient();
  try {
    const jobs = await prisma.job.findMany()
    await prisma.$disconnect();
    return Response.json(jobs)
  } catch (error) {
    console.error('Error:', error);
    await prisma.$disconnect();
    return new Response(JSON.stringify({ error: 'Invalid request data' }), { status: 400 });
  }
}

  
