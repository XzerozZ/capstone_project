'use server'
import { PrismaClient } from '@prisma/client';

//http://localhost:3000/api/job
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
      const formData = await req.formData();
      const categoryIds: number[] = [];
      for await (const [name,value] of formData.entries()){
        if (name === 'category'){
          const categoryName = value as string;
                let category = await prisma.category.findFirst({
                    where: {
                        name: categoryName
                    }
                });
                if (!category) {
                    category = await prisma.category.create({
                        data: {
                            name: categoryName
                        }
                    });
            }
         }
         const newjob = await prisma.job.create({
          data: {
            title : formData.get('title') as string,
            description : formData.get('description') as string,
            budget : parseInt(formData.get('budget') as string),
            type : formData.get('type') as string,
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
      } 
    }catch(error){
      await prisma.$disconnect();
      return Response.json({
          error
      }, {status:500})
  }
}

export async function GET() {
  const prisma = new PrismaClient();
  try {
    const jobs = await prisma.job.findMany()
    await prisma.$disconnect();
    return Response.json(jobs)
  } catch(error){
    await prisma.$disconnect();
    return Response.json({
        error
    }, {status:500})
  }
}

export async function PUT(){

}

export async function DELETE() {
  
}
  
