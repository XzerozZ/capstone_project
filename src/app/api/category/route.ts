'use server'
import { PrismaClient } from '@prisma/client';

export async function GET() {
    const prisma = new PrismaClient();
    try{
        const cate = await prisma.category.findMany()
        await prisma.$disconnect();
        return Response.json(cate)
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
} 