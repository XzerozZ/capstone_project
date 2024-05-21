'use server'
import prisma from '../utils/prisma';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string
    const id =  parseInt(formData.get('job_id') as string)
    const job = await prisma.job.findUnique({
      where : {
          job_id : id
      },
      include : {
          work : true
      }
    })
    const user = await prisma.user.findUnique({
        where : {
            email : email
        }
    })
    if(user && job){
       const newRating = await prisma.rating_user.create({
        data: {
          user_id1: user.user_id,
          user_id2: job.work[0].user_id,
          job_id: job.job_id,
          comment : formData.get('comment') as string,
          friendly_rating: parseInt(formData.get('friendly_rating') as string),
          efficiency_rating: parseInt(formData.get('efficiency_rating') as string),
          accuracy_rating: parseInt(formData.get('accuracy_rating') as string),
        },
      });
      await prisma.$disconnect();
      return Response.json(newRating);
    }
    else{
      await prisma.$disconnect();
      return Response.json("Can't find user or job")
    }
  } catch (error) {
    await prisma.$disconnect();
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}