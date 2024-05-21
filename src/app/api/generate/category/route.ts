import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';

export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try {
        const file = await fs.readFile(process.cwd() + '/src/app/api/generate/category/name.json', 'utf8');
        const data = JSON.parse(file);
        for(let i = 0; i < data.length; i++){
            await prisma.category.create({
                data : {
                    name : data[i]["name"]
                }
            })
        }
        await prisma.$disconnect();
        return Response.json("FINISH");  
    }catch (error) {
      await prisma.$disconnect();
      return Response.json(error);
    }
  }