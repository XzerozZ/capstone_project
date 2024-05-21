'use server'
import prisma from '../../utils/prisma';

//http://localhost:3000/api/history/user
//GET
export async function POST(req : Request) {
    try {
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const userhistory = await prisma.history.findMany({
            where : {
                user_id : user?.user_id,
                NOT : {
                    status : 'Completed'
                }
            },
            include : {
                user : true ,
                job : true
            }
        })
        await prisma.$disconnect();
        if(userhistory) {
            return Response.json(userhistory)
        } else {
            return Response.json({
                message : "Not have any history"
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