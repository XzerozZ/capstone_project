'use server'
import prisma from '../utils/prisma';

export async function GET() {
    try {
      const jobs = await prisma.job.findMany({
        where : {
            status : 'Open',
            NOT : {
                mass : 0,
            }
        },
        include : {
          post : {
            include : {
              user : true
            }
          }
        }
      })
      await prisma.$disconnect();
      return Response.json(jobs)
    } catch(error){
      await prisma.$disconnect();
      return Response.json({
          error
      }, {status:500})
    }
  }
  