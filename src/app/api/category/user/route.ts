'use server'
import prisma from '../../utils/prisma';

export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const categories: { [key: string]: number } = {};
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(user){
            await prisma.experience.deleteMany({
                where : {
                    user_id : user.user_id
                }
            })
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
                        user_id: user.user_id,
                        category_id: categoryId 
                    }
                });
            }
            await prisma.$disconnect();
            return Response.json('Successfully')
        }
        else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not Found User"
            })
        }
    }
    catch(error) {
        await prisma.$disconnect();
        return Response.json(
            {
                error
            }, 
            {
                status : 500
            }
        )
    }
}