'use server'
import { PrismaClient } from '@prisma/client';
//http://localhost:3000/api/history
export async function POST(request: Request) {
    const prisma = new PrismaClient();
    try{
        const data = await request.json();
        const {user_id, job_id} = data;
        const history =  await prisma.history.create({
            data:{
                user_id,
                job_id
            },
        })
        await prisma.$disconnect();
        return Response.json(history)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}
//http://localhost:3000/api/history
export async function GET() {
    const prisma = new PrismaClient();
    try {
      const histories = await prisma.history.findMany()
      await prisma.$disconnect();
      return Response.json(histories)
    } catch(error){
      await prisma.$disconnect();
      return Response.json({
          error
      }, {status:500})
    }
  }
  