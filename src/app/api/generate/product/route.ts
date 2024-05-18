import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';

export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try {
        const file = await fs.readFile(process.cwd() + '/src/app/api/generate/product/product.json', 'utf8');
        const data = JSON.parse(file);
        for(let i = 0; i < data.length; i++){
            await prisma.product.create({
                data : {
                    name : data[i]["name"],
                    price : parseInt(data[i]["price"]),
                    mass : parseInt(data[i]['mass'])
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