'use server'
import prisma from '../../utils/prisma';

export async function POST(req: Request) {
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const categories: { [key: string]: number } = {};
        for await (const [name, value] of formData.entries()) {
            if (name === 'category') {
                const categoryName = value as string;
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
                categories[categoryName] = category.category_id;
            }
        }
        for (const [name, categoryId] of Object.entries(categories)) {
            await prisma.experience.create({
                data: {
                    user_id: id,
                    category_id: categoryId 
                }
            });
        }
        return Response.json('Successfully')
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}