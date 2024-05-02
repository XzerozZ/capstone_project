import { PrismaClient } from '@prisma/client';

// localhost:3000/api/company/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try{
        const comid = await prisma.company.findUnique({
            where : {
                company_id: parseInt(params.id)
            },
            include : {
                rating_com : true
            }
        });
        await prisma.$disconnect();
        if (comid) {
            const ratings = comid.rating_com.map(r => r.rating);
            const averageRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b) / ratings.length : 0;
            const companyProfile = {...comid , averageRating}
            return Response.json(companyProfile)
        } else {
            return Response.json({
                message : "Didn't found this company"
            })
        }
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "Server Error"
            }),
            {
                status: 500
            }
        );
    }
}