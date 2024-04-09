'use server'
import { PrismaClient } from '@prisma/client';
import { formatPhoneNumber } from '../auth/format';
import { upLoadIMG } from '../admin/supabase';
import bcrypt from 'bcrypt';

// localhost:3000/api/company
export async function GET(){
    const prisma = new PrismaClient();
    try{
        const comid = await prisma.company.findMany({});
        await prisma.$disconnect();
        return Response.json(
            comid
        )
    }
    catch(error){
        return new Response(
            JSON.stringify({
                error: "SERVER ERROR"
            }),
            {
                status: 404
            }
        );
    }
}

export async function PUT( req : Request ) {
    const prisma = new PrismaClient();
    try {
        const formData = await req.formData();
        const id = parseInt(formData.get('id') as string)
        const existingCompany = await prisma.company.findUnique({
            where : {
                company_id : id
            }
        })
        if (!existingCompany) {
            return Response.json({
                message : "Company not found"
            })
        }
        if (formData.has('name')) {
            existingCompany.name = formData.get('name') as string
        }
        if (formData.has('phone_number')) {
            const phoneNumber = formData.get('phone_number') as string;
            existingCompany.phone_number = await formatPhoneNumber(phoneNumber);
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            existingCompany.image = await upLoadIMG(formData.get('image') as File);
        }
        if (formData.has('password')) {
            const Password = formData.get('password') as string
            const hashedPassword = bcrypt.hashSync(Password, 10)
            existingCompany.password = hashedPassword
        }
        const updateCompany = await prisma.company.update({
            where: {
                company_id: existingCompany.company_id
            },
            data: existingCompany
        });
        await prisma.$disconnect();
        return Response.json(updateCompany)
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