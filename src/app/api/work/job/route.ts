'use server'
import prisma from '../../utils/prisma';

export async function POST(req : Request) {
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const work = await prisma.work.findFirst({
            where : {
                job_id : id
            },
            select: {
                job_id: true,
                user_id: true,
                work_link: true,
                job: {
                  select: {
                    history: {
                      where: {
                        status: {
                            in: ['Completed', 'Checking'], 
                          },
                      },
                      select: {
                        status: true,
                        user : true
                      },
                    },
                  },
                },
              },
        })
        if(work){

            return Response.json(work)
        }
        else{
            return Response.json({
                message : 'Freelance still not send the work'
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return  Response.json(
            {
                error : "Server Error"
            }, 
            {
                status : 500
            }
        )
    }
}