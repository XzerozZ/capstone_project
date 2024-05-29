
import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';

export async function POST(req : Request) {
  const prisma = new PrismaClient();
  try {
    const file = await fs.readFile(process.cwd() + '/src/app/api/generate/csvjson.json', 'utf8');
    const data = JSON.parse(file);
    let specializations: string[] = [];
    let categoryNames: string[] = [];
    for(let i = 0; i < data.length; i++){
      specializations = [];
      categoryNames = [];
      const specs = data[i]["Specialization"].split('/').map((spec: string) => spec.trim());
      specializations.push(...specs);
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
      const budget = Math.floor(Math.random() * (500000 - 20000 + 1)) + 20000;
      const job = await prisma.job.create({
        data :{
          title : data[i]["Name"] + 'Prject',
          description : data[i]["Description"],
          budget : budget,
          type: 'Full-time',
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
                user_id: 2
              }
          }
        }
      })
    }
    await prisma.$disconnect();

    return Response.json("FINISH");
  } catch (error) {
    await prisma.$disconnect();
    return Response.json(error);
  }
}