'use server'
import { PrismaClient } from '@prisma/client';

export async function POST(req : Request) {
    const prisma = new PrismaClient();
    try{
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
                status : "Completed"
            },
            include : {
                user : true ,
                job : {
                    include : {
                        post : {
                            include : {
                                user : true
                            }
                        },
                        rating_user : true
                    }
                }
            }
        })
        await prisma.$disconnect();
        if(userhistory.length > 0) {
            const historyComplete = userhistory.map((history) => {
                const { rating_user, ...restOfHistory } = history.job;
                const { friendly_rating, efficiency_rating, accuracy_rating } = rating_user[0];
                const averageRating = (friendly_rating + efficiency_rating + accuracy_rating) / 3;
         
                return {
                  ...restOfHistory,
                  averageRating,
                };
              });
            return Response.json(historyComplete)
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
