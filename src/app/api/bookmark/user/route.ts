'use server'
import prisma from '../../utils/prisma';

export async function POST(req : Request) {
    try {
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        if(user){
            const bookmark = await prisma.bookmark.findMany({
                where : {
                    user_id : user.user_id
                },
                include : {
                    user : true ,
                    job : {
                        include : {
                            post : {
                                include : {
                                    user : true
                                }
                            }
                        }
                    }
                }
            })
            if(bookmark){
                return Response.json(bookmark)
            } 
            else {
                return Response.json({
                    message : "Not habe any your bookmark Job(s)"
                })
            }
        }
        else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not Found User or Job"
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
