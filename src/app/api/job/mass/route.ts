'use server'
import prisma from '../../utils/prisma';
import Omise from "omise";
import { IOptions } from 'omise';
import { v4 as uuid } from "uuid";

const omiseConfig : IOptions = {
    secretKey : process.env.OMISE_SECRET_KEY || ''
}

export async function POST( req: Request ) {
    const omise =  Omise(omiseConfig);
    try{
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const email = formData.get('email') as string
        const productId = parseInt(formData.get("productId") as string)
        const job = await prisma.job.findUnique({
            where: {
                job_id: id
            }
        });
        const product = await prisma.product.findUnique({
            where : {
                product_id : productId
            }
          })
        const user = await prisma.user.findUnique({
            where : {
                email : email
            },
            include : {
                wallet : {
                    select : {
                        wal_id : true
                    }
                }
            }
        })
        if(job && user && product){
<<<<<<< HEAD
            const orderId = uuid()
            const customer = await omise.customers.retrieve(user.wallet[0].wal_id);
            const session = await omise.charges.create({
                currency: 'thb',
                customer: customer.id,
                card: customer.cards.data[0].id,
                amount: product.price*100
            })
            const order = await prisma.order.create({
                data: {
                    order_id : orderId,
                    user_id1 : user.user_id,
                    user_id2 : 1,
                    job_id : job.job_id,
                    amount : product.price,
                    product_name : product.name,
                    product_mass : product.mass,
                    session_id : session.id,
                    status : 'success'
                }
            })
=======
            if(user.digitalwal[0].amount >= product.price){
                const orderId = uuid()
                const seesion = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: 'thb',
                                product_data : {
                                    name: product.name,
                                },
                                unit_amount : (product.price)*100
                            },
                            quantity: 1
                        },
                    ],
                    mode: 'payment',
                    success_url: 'http://localhost:3000/success.html?id=${orderId}',
                    cancel_url: 'http://localhost:3000/cancel.html'
                })
                console.log(seesion)
                const order = await prisma.order.create({
                    data: {
                        order_id : orderId,
                        user_id1 : user.user_id,
                        user_id2 : 1,
                        job_id : job.job_id,
                        amount : product.price,
                        product_name : product.name,
                        product_mass : product.mass,
                        session_id : seesion.id,
                        status : seesion.status
                    }
                })
                await prisma.$disconnect();
                return Response.json({
                    order : order.order_id ,
                    URL : seesion.url
                })
            }
           else {
>>>>>>> parent of 9321c93 (Merge branch 'main' into connect-api)
            await prisma.$disconnect();
            return Response.json(
                order.order_id
            )
        }
        else {
            await prisma.$disconnect();
            return Response.json({
                message : "Didn't found this job"
            })
        }
    }
    catch(error){
        console.log(error)
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}