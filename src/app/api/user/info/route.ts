'use server'
import prisma from '../../utils/prisma';

// localhost:3000/api/user/info
export async function POST(req : Request){
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const userid = await prisma.user.findUnique({
            where: {
                user_id: user?.user_id
            },
            include : {
                rating_users2 : true,
                rating_com2 : true,
                contact : true,
                experience : {
                    include: {
                        category: true
                    }
                },
                user_career : {
                    include: {
                        career: true
                    }
                }
            }
        });
        await prisma.$disconnect();
        if (userid && userid.role === "user") {
            const f_rating = userid.rating_users2.map(r => r.friendly_rating);
            const e_rating = userid.rating_users2.map(r => r.efficiency_rating);
            const a_rating = userid.rating_users2.map(r => r.accuracy_rating);
            const averageRating_f = f_rating.length > 0 ? f_rating.reduce((a,b) => a + b) / f_rating.length : 0;
            const averageRating_e = e_rating.length > 0 ? e_rating.reduce((a,b) => a + b) / e_rating.length : 0;
            const averageRating_a = a_rating.length > 0 ? a_rating.reduce((a,b) => a + b) / a_rating.length : 0;
            const averageRating = (averageRating_a + averageRating_e + averageRating_f) / 3
            const categories = userid.experience.map(exp => exp.category.name);
            const careers = userid.user_career.map(car => car.career.name);
            const userwithData = { ...userid , categories , careers ,  averageRating_f , averageRating_e , averageRating_a , averageRating }
            return Response.json(userwithData);
        } 
        else if (userid && userid.role === "company") {
            const f_rating = userid.rating_users2.map(r => r.friendly_rating);
            const v_rating = userid.rating_com2.map(r => r.value_rating);
            const averageRating_f = f_rating.length > 0 ? f_rating.reduce((a,b) => a + b) / f_rating.length : 0;
            const averageRating_v = v_rating.length > 0 ? v_rating.reduce((a,b) => a + b) / v_rating.length : 0;
            const categories = userid.experience.map(exp => exp.category.name);
            const careers = userid.user_career.map(car => car.career.name);
            const averageRating = (averageRating_f + averageRating_v) / 2
            const userwithData = { ...userid , categories , careers  , averageRating }
            return Response.json(userwithData);
        }
        else if (userid && userid.role === "admin") {
            const f_rating = userid.rating_users2.map(r => r.friendly_rating);
            const e_rating = userid.rating_users2.map(r => r.efficiency_rating);
            const a_rating = userid.rating_users2.map(r => r.accuracy_rating);
            const averageRating_f = f_rating.length > 0 ? f_rating.reduce((a,b) => a + b) / f_rating.length : 0;
            const averageRating_e = e_rating.length > 0 ? e_rating.reduce((a,b) => a + b) / e_rating.length : 0;
            const averageRating_a = a_rating.length > 0 ? a_rating.reduce((a,b) => a + b) / a_rating.length : 0;
            const averageRating = (averageRating_a + averageRating_e + averageRating_f) / 3
            const categories = userid.experience.map(exp => exp.category.name);
            const careers = userid.user_career.map(car => car.career.name);
            const userwithData = { ...userid , categories , careers ,  averageRating_f , averageRating_e , averageRating_a , averageRating }
            return Response.json(userwithData);
        }
        else {
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