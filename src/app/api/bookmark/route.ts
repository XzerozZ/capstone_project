'use server'
import { PrismaClient } from '@prisma/client';

//localhost:3000/api/bookmark
//POST
export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const fav = await prisma.bookmark.create({
            data : {
                user_id : parseInt(formData.get('user_id') as string),
                job_id : parseInt(formData.get('job_id') as string)
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : "Favorite Added"
        })
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

export async function DELETE( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        await prisma.bookmark.delete({
            where : {
                user_id_job_id : {
                    user_id : parseInt(formData.get('user_id') as string),
                    job_id : parseInt(formData.get('job_id') as string)
                }
            }
        })
        await prisma.$disconnect();
        return Response.json({
            message : " Delete This Bookmark Successfully",
        })
    }
    catch(error){
        await prisma.$disconnect();
        console.log(error)
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