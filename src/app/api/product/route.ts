'use server'
import prisma from '../utils/prisma';

export async function POST(req: Request) {
    try {
      const formData = await req.formData();
      const newProduct = await prisma.product.create({
        data: {
            name : formData.get('name') as string,
            price : parseInt(formData.get('price') as string),
            mass : parseInt(formData.get('mass') as string)
        },
      });
  
      await prisma.$disconnect();
      return Response.json(newProduct);
    } catch (error) {
      await prisma.$disconnect();
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
  }

export async function DELETE( req : Request ){
    try{
        const formData = await req.formData();
        const id = formData.get('id') as string
        const user = await prisma.product.delete({
            where :{
                product_id : parseInt(id)
            }
        })
        return Response.json("Delete Successfully")
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