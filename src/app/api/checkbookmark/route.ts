'use server'
import prisma from '../utils/prisma';

//localhost:3000/api/checkbookmark
//POST
export async function POST( req : Request ) {
    try {
        const formData = await req.formData();
        const mark = await prisma.bookmark.findUnique({
            where : {
                user_id_job_id : {
                    user_id : parseInt(formData.get('user_id') as string),
                    job_id : parseInt(formData.get('job_id') as string)
                }
            }
        })
        if(mark){
            await prisma.$disconnect();
            return Response.json({
                message : "Already Added"
            })
        } else {
            await prisma.$disconnect();
            return Response.json({
                message : "Not Added"
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