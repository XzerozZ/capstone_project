'use server'
import { PrismaClient } from '@prisma/client';
export async function PUT(req: Request) {
  const prisma = new PrismaClient();
  try {
    const formData = await req.formData();
    const job_id = parseInt(formData.get('job_id') as string);
    const work = await prisma.work.findFirst({
      where: { 
        job_id: job_id 
    },
    });
    if (work) {
      await prisma.history.update({
        where: {
          user_id_job_id: {
            user_id: work.user_id,
            job_id: work.job_id,
          },
        },
        data: { 
            status: 'Completed' 
        },
      });
    }
    await prisma.$disconnect();
    return Response.json("Success")
  } catch (error) {
    await prisma.$disconnect();
    return Response.json({ error }, { status: 500 });
  }
}