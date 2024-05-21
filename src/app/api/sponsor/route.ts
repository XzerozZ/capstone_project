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
  