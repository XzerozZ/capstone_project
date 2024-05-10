'use server'
import { PrismaClient } from "@prisma/client";

export async function GET() {
    const prisma = new PrismaClient();
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
  