'use server'
import prisma from '../../utils/prisma';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const email = formData.get("email") as string
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(user){
            const transfer = await prisma.transfer.findMany({
                where : {
                    user_id2 : user.user_id
                }
            })
            await prisma.$disconnect();
            return Response.json(transfer);
        }
        else {
            await prisma.$disconnect();
            return Response.json("Something went wrong");
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}