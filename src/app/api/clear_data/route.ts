'use server'
import { PrismaClient } from '@prisma/client';

export async function DELETE() {
    const prisma = new PrismaClient();
    try {
        await prisma.job_exp.deleteMany()
        await prisma.user_career.deleteMany()
        await prisma.history.deleteMany()
        await prisma.work.deleteMany()
        await prisma.oTP.deleteMany()
        await prisma.post.deleteMany()
        await prisma.experience.deleteMany()
        await prisma.contact.deleteMany()
        await prisma.bookmark.deleteMany()
        await prisma.rating_com.deleteMany()
        await prisma.rating_user.deleteMany()
        await prisma.category.deleteMany()
        await prisma.career.deleteMany()
        await prisma.job.deleteMany()
        await prisma.user.deleteMany()
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