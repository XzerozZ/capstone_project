'use server'
import prisma from '../../utils/prisma';

export async function POST(req : Request) {
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },
            include : {
                digitalwal : true
            }   
        })
        if(user){
            await prisma.$disconnect();
            return Response.json(user)
        }
        else{
            await prisma.$disconnect();
            return Response.json(' Did not found this user ')
        }
    }
    catch(error){
        console.log(error)
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}