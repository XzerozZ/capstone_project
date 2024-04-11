'use server'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { cookies } from "next/headers";


export async function POST( req : Request ) {
    const prisma = new PrismaClient()
    try {
        const prisma = new PrismaClient();
        const formData = await req.formData();
        const Email = formData.get('email') as string;
        const Password = formData.get('password') as string;
        const findcompany = await prisma.company.findUnique({
            where : {
                email : Email
            }
        })
        if (!findcompany) {
            return Response.json({
                status: "500",
                message: "Company not found",
            });
        }
        const compare = bcrypt.compareSync(Password , findcompany.password);
        if (!compare) {
            return Response.json({
                status: "500",
                message: "Password is not correct",
            });
        }
        const oneDay = 24 * 60 * 60 * 1000
        
        const token = cookies().set(
            findcompany.name, 
            'A_to_Z_Dragon_Buster_Cannon', 
            { expires: Date.now() - oneDay }
        )
        return Response.json({
            status: "success",
            message: "Login success",
            token
        });
    } catch(error) {
        await prisma.$disconnect();
        console.log(error)
        return Response.json(
            {
                error
            }, 
            {
                status : 500
            }
        )
    }
}   