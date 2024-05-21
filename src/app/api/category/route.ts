'use server'
import prisma from '../utils/prisma';

export async function GET() {
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