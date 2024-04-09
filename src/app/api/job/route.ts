'use server'
import { PrismaClient } from '@prisma/client';

//http://localhost:3000/api/job
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
      const formData = await req.formData();
      const id = parseInt(formData.get('id') as string);
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
            },
            post: {
              create: {
                company_id : id
              }
            }
          },
          include: {
            job_exp: true,
            post : {
              include : {
                company : true
              }
            }
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

export async function PUT( req: Request ){
  const prisma = new PrismaClient();
  try {
    const formData = await req.formData();
    const id = parseInt(formData.get('id') as string);
    const existingJob = await prisma.job.findUnique({
      where: {
          job_id: id
      },
    });
    if (!existingJob) {
      return Response.json({
        message: "Job not found"
      });
    }
    if (existingJob.status === "Closed") {
      return Response.json({
          message: "Job status is already 'Closed'"
      });
    }
    const updatedJob = await prisma.job.update({
      where : {
        job_id : existingJob.job_id
      },
      data : {
        status : "Closed"
      }
    })
    await prisma.$disconnect();
    return Response.json({
        message: "Job status updated to 'Closed' successfully"
    });
  } catch(error){
    await prisma.$disconnect();
    return Response.json({
        error
    }, {status:500})
  }

}

export async function DELETE( req: Request ) {
  const prisma = new PrismaClient();
  try {
    const formData = await req.formData();
    const jobId = parseInt(formData.get('id') as string);
    const job = await prisma.job.findUnique({
      where: {
          job_id: jobId
      }
    });
    if (!job || job.status !== "Closed") {
        return Response.json({ error: "Job not found or status is not 'Closed', cannot delete" }, 
        { status: 400 });
    }
    await prisma.$transaction([
        prisma.post.deleteMany({
          where : {
            job_id : jobId
          }
        }),
        prisma.job_exp.deleteMany({
          where : {
            job_id : jobId
          }
        }),
        prisma.job.delete({
          where : {
            job_id: jobId
          }
        })
    ])
  } catch(error){
    await prisma.$disconnect();
    return Response.json({
        error
    }, {status:500})
  }
}
  
