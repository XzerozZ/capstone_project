'use server'
import { PrismaClient } from '@prisma/client';
// http://localhost:3000/api/job/[id]
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    try {
        const jobID = await prisma.job.findUnique({
            where: {
                job_id: parseInt(params.id)
            },
            include: {
                job_exp: {
                    include: {
                        category: true
                    }
                }
            }
        });
        await prisma.$disconnect();
        if (jobID) {
            const categories = jobID.job_exp.map(exp => exp.category.name);
            const jobWithCategories = { ...jobID, categories };
            return Response.json(jobWithCategories);
        } else {
            return new Response(JSON.stringify({ error: 'Job not found' }), { status: 404 });
        }
    } catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}