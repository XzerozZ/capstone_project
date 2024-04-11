'use server'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { formatPhoneNumber } from "../auth/format";
import { upLoadIMG } from "../admin/supabase";

export async function PUT( req : Request){
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const existingUser = await prisma.user.findUnique({
            where : {
                user_id : id
            }
        });
        if (!existingUser) {
            return Response.json({
                message : "User not found"
            })
        }
        let existingContact = await prisma.contact.findFirst({
            where: {
                user_id : id
            }
        });
        if (!existingContact) {
            return Response.json({
                message : "Contact not found"
            })
        }
        if(formData.has('first_name')) {
            existingUser.first_name = formData.get('first_name') as string;
        }
        if(formData.has('last_name')) {
            existingUser.last_name = formData.get('last_name') as string;
        }
        if(formData.has('username')) {
            existingUser.username = formData.get('username') as string;
        }
        if(formData.has("phone_number")) {
            const phoneNumber = formData.get('phone_number') as string;
            existingUser.phone_number = await formatPhoneNumber(phoneNumber)
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            existingUser.image = await upLoadIMG(formData.get('image') as File);
        }
        if(formData.has('password')) {
            const Password = formData.get('password') as string
            const hashedPassword = bcrypt.hashSync(Password, 10)
            existingUser.password = hashedPassword
        }
        if(formData.has('facebook')){
            existingContact.facebook = formData.get('facebook') as string;
        }
        if(formData.has('instagram')){
            existingContact.instagram = formData.get('instagram') as string;
        }
        if(formData.has('linkedin')){
            existingContact.linkedin = formData.get('linkedin') as string;
        }
        const updatedUser = await prisma.user.update({
            where : {
                user_id : existingUser.user_id
            },
            data : existingUser,
        });
        const updateContact = await prisma.contact.update({
            where : {
                contact_id : existingContact.contact_id
            },
            data : existingContact
        })
        await prisma.$disconnect();
        return Response.json({
            updatedUser ,
            updateContact
        })
    }
    catch (error) {
        await prisma.$disconnect();
        return Response.json(
            {
                error: "Server Error"
            },
            {
                status: 500
            }
        );
    }
}