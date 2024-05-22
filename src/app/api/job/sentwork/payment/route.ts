'use server'
import prisma from '../../../utils/prisma';
import { sentInvoice } from '../email';
import { sentSalary } from '../salary';

export async function PUT(req : Request) {
    try{
        const formData = await req.formData();
        const orderId = formData.get('orderId') as string
        const order = await prisma.order.findUnique({
            where : {
                order_id : orderId
            }
        })
        if(order){
            await prisma.history.update({
                where: {
                    user_id_job_id: {
                      user_id: order.user_id2,
                      job_id: order.job_id,
                    },
                  },
                data : {
                    status: 'Completed'
                }
            })
            await sentSalary(order.user_id2,order.amount)
            await sentInvoice(order.user_id1,order.amount,order.order_id,order.product_name)
            return Response.json("Success")
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