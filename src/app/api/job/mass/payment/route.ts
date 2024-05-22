'use server'
import prisma from '../../../utils/prisma';
import { vat } from '@/app/api/order/calcutor';
import { sentReceipt } from '@/app/api/order/email';

export async function PUT(req : Request) {
    try {
        const formData = await req.formData();
        const orderId = formData.get('orderId') as string
        const order = await prisma.order.findUnique({
            where : {
                order_id : orderId
            }
        })
        if(order){
            await prisma.job.update({
                where : {
                    job_id : order.job_id
                },
                data : {
                    mass : order.product_mass,
                    status : 'Open'
                }
            })
            const vat1 = parseInt(await vat(order.amount))
            await sentReceipt(order.user_id1,order.amount,vat1,order.order_id,order.product_name)
            return Response.json("Success")
        }
    }
    catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, { status: 500 });
    }
}