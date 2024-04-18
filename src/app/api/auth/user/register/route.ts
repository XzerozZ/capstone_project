'use server'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { formatIdcard , formatPhoneNumber } from '../../format';
import { upLoadIMG } from '../../../admin/supabase';

export async function POST(req : Request){
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const contactData = {
            facebook: formData.get('facebook') as string,
            instagram: formData.get('instagram') as string,
            linkedin: formData.get('linkedin') as string
        };
        let image: string | null = null;
        const categoryIds: number[] = [];
        const careerIds: number[] = [];
        for await (const [name,value] of formData.entries()){
            if(name === 'image' && value instanceof File){
                image = await upLoadIMG(value);
            }
            else if(name === 'phone_number'){
                const formatPhone = await formatPhoneNumber(value as string);
                formData.set(name,formatPhone);
            }
            else if(name === 'id_card'){
                const formatCard = await formatIdcard(value as string);
                formData.set(name,formatCard);
            }
            else if(name === 'password'){
                const hashedPassword = bcrypt.hashSync(value as string, 10);
                formData.set(name, hashedPassword);
            }
            else if (name === 'category'){
                const categoryName = value as string;
                let category = await prisma.category.findFirst({
                    where: {
                        name: categoryName
                    }
                });
                if (!category) {
                    category = await prisma.category.create({
                        data: {
                           name: categoryName
                        }
                    });
                }
            }
            else if (name === 'career'){
                const careerName = value as string;
                let career = await prisma.career.findFirst({
                    where: {
                        name: careerName
                    }
                });
                if (!career) {
                    career = await prisma.career.create({
                        data: {
                            name : careerName
                        }
                    });
                }
            }
        }
        const newuser = await prisma.user.create({
            data:{
                first_name : formData.get('first_name') as string,
                last_name : formData.get('last_name') as string,
                username : formData.get('username') as string,
                phone_number : formData.get('phone_number') as string, // 1234567890
                id_card : formData.get('id_card') as string, // 1234567891234
                email : formData.get('email') as string,
                password : formData.get('password') as string,
                role : formData.get('role') as string,
                experience: {
                    create: categoryIds.map(category_id => ({
                        category : {
                            connect: {
                                category_id
                            }
                        }
                    }))
                },
                user_career: {
                    create: careerIds.map(career_id => ({
                        career: {
                            connect: {
                                career_id
                            }
                        }
                    }))
                }
            },
        });
        const newContact = await prisma.contact.create({
            data: {
                ...contactData,
                user: {
                    connect: {
                        user_id: newuser.user_id
                    }
                }
            }
        });
        await prisma.$disconnect();
        return Response.json({
            message : " create account successfully ",
            data : {
                newuser,
                newContact
            }
        })
    } catch(error){
        await prisma.$disconnect();
        return Response.json({
            error
        }, {status:500})
    }
}