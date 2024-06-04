'use server'
import prisma from '../utils/prisma';

//http://localhost:3000/api/job
export async function POST( req: Request ) {
  try {
      const formData = await req.formData();
      const id = parseInt(formData.get('id') as string);
      const user = await prisma.user.findUnique({
          where: {
              user_id: id
          }
      });

      if (!user || user.role !== "company") {
          return Response.json({
              message: "You don't have permission to perform this action"
          });
      }

      const categoryNames: string[] = [];
      for await (const [name, value] of formData.entries()) {
          if (name === 'category') {
              categoryNames.push(value as string);
          }
      }
      for await (const [name,value] of formData.entries()){
        if(name === 'submitted_date'){
            const date = new Date(value as string);
            const dateString = date.toISOString();
            formData.set(name, dateString);
        }
      }
      const categories = await Promise.all(categoryNames.map(async (categoryName) => {
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
          return category;
      }));

      const categoryIds = categories.map(category => category.category_id);

      const newjob = await prisma.job.create({
          data: {
              title: formData.get('title') as string,
              description: formData.get('description') as string,
              budget: parseInt(formData.get('budget') as string),
              type: formData.get('type') as string,
              submitted_date: formData.get('submitted_date') as string, // 2000-07-17
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
                      user_id: id
                  }
              }
          },
          include: {
              job_exp: true,
              post: {
                  include: {
                      user: true
                  }
              }
          },
      });
      await prisma.$disconnect();
      return Response.json(newjob);
  } catch (error) {
      await prisma.$disconnect();
      return Response.json({
          error
      }, { status: 500 });
  }
}


export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where : {
        status : "Open"
      },
      include : {
        job_exp : {
          include : {
            category : true
          }
        },
        post : {
          include : {
            user : true
          }
        }
      }
    })
    if(jobs.length > 0){
      const jobsWithCategories = jobs.map((job) => ({
        ...job,
        categories: job.job_exp.map((exp) => exp.category.name),
        company: job.post.map((post) => post.user.image)
      }));
      await prisma.$disconnect();
      return Response.json(jobsWithCategories);
    }
    else {
      await prisma.$disconnect();
      return Response.json('No avaliable jobs')
    }
    
  } catch(error){
    await prisma.$disconnect();
    return Response.json({
        error
    }, {status:500})
  }
}

export async function PUT( req: Request ){
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
  try {
    const formData = await req.formData();
    const jobId = parseInt(formData.get('id') as string);
    const job = await prisma.job.findUnique({
      where: {
          job_id: jobId
      }
    });
    if (!job || job.status === "Closed") {
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
        prisma.history.deleteMany({
          where : {
            job_id : jobId
          }
        }),
        prisma.transfer.deleteMany({
          where : {
            job_id : jobId
          }
        }),
        prisma.order.deleteMany({
          where : {
            job_id : jobId
          }
        }),
        prisma.work.deleteMany({
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
    return Response.json("Delete Successfully")
  } catch(error){
    await prisma.$disconnect();
    console.log(error)
    return Response.json({
        error
    }, {status:500})
  }
}
  
