'use server'
import axios from 'axios'


export async function POST( req : Request ) {
    try{
        const formData = await req.formData();
        const id = formData.get('user_id') as string
        const data = await axios.post('http://localhost:4000/api/processdata', {
            user_id: id
        });
        return Response.json(data.data)
    } catch(error){
        return Response.json(error)
    }
}