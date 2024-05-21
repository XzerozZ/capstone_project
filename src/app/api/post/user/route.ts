'use server'
import prisma from '../../utils/prisma';

export async function POST(req : Request) {
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const userpost = await prisma.post.findMany({
            where : {
                user_id : user?.user_id,
            },
            include : {
                user : true ,
                job : true
            }
        })
        await prisma.$disconnect();
        if(userpost) {
            await prisma.$disconnect();
            return Response.json(userpost)
        } else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not have any Post(s)"
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
