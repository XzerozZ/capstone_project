import { PrismaClient } from '@prisma/client';

// localhost:3000/api/user/[id]
export async function GET(req : Request,{ params }: { params: { id: string } }){
    const prisma = new PrismaClient();
    try{
        const userid = await prisma.user.findUnique({
            where: {
                user_id: parseInt(params.id)
            },
            include : {
                rating_user : true
            }
        });
        await prisma.$disconnect();
       if (userid) {
            const f_rating = userid.rating_user.map(r => r.friendly_rating);
            const e_rating = userid.rating_user.map(r => r.efficiency_rating);
            const a_rating = userid.rating_user.map(r => r.accuracy_rating);
            const averageRating_f = f_rating.length > 0 ? f_rating.reduce((a,b) => a + b) / f_rating.length : 0;
            const averageRating_e = e_rating.length > 0 ? e_rating.reduce((a,b) => a + b) / e_rating.length : 0;
            const averageRating_a = a_rating.length > 0 ? a_rating.reduce((a,b) => a + b) / a_rating.length : 0;
            const averageRating = (averageRating_a + averageRating_e + averageRating_f) / 3
            const userwithData = { ...userid , averageRating_f , averageRating_e , averageRating_a , averageRating}
            return Response.json(userwithData);
       } else {
        return Response.json({
            message : "Didn't found this User"
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