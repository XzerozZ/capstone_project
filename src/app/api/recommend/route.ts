'use server'
import axios from 'axios'
import prisma from '../utils/prisma';

export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const email = formData.get('email') as string
        const user = await prisma.user.findUnique({
            where :{
                email : email
            }
        })
        if(user){
            const data = await axios.post('http://localhost:4000/api/processdata', {
                user_id: user.user_id
            });
            if(data){
                return Response.json(data.data)
            }
            else{
                return Response.json({message: 'Data not found'})
            }
        }
        else{
            return Response.json({message: 'User not found'})
        }
    } catch(error){
        return Response.json(error)
    }
}