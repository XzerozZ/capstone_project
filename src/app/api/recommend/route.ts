'use server'
import axios from 'axios'
import { PrismaClient } from '@prisma/client';

export async function POST( req : Request ) {
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        const data = await axios.post('http://localhost:4000/api/processdata', {
            user_id: user?.user_id
        });
        return Response.json(data.data)
    } catch(error){
        return Response.json(error)
    }
}