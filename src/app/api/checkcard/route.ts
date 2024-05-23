'use server'
import prisma from '../utils/prisma';

export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const user = await prisma.user.findUnique({
            where : {
                email : formData.get('email') as string
            }
        })
        if(user){
            const wallet = await prisma.wallet.findFirst({
                where : {
                    user_id : user.user_id
                }
            })
            if(wallet){
                await prisma.$disconnect();
                return Response.json({
                    message : "Have card"
                })
            }
            else{
                const bank = await prisma.rep.findFirst({
                    where : {
                        user_id : user.user_id
                    }
                })
                if(bank){
                    await prisma.$disconnect();
                    return Response.json({
                        message : "Not found card or bank account"
                    })
                }
            }
        }
        else{
            await prisma.$disconnect();
            return Response.json({
                message : "Not found user"
            })
        }
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