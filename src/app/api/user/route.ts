'use server'
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { formatPhoneNumber } from "../auth/format";
import { upLoadIMG } from "../admin/supabase";

export async function GET() {
    const prisma = new PrismaClient();
    try{
        const comid = await prisma.user.findMany();
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

export async function PUT( req : Request ){
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
            existingContact = await prisma.contact.create({
                data: {
                    user_id: id,
                    facebook : formData.get('facebook') as string,
                    instagram : formData.get('instagram') as string,
                    linkedin : formData.get('linkedin') as string
                }
            });
        }
        if (formData.has('first_name')) {
            const firstName = formData.get('first_name') as string;
            if (firstName.trim() !== '') {
                existingUser.first_name = firstName;
            }
        }
        if (formData.has('last_name')) {
            const lastName = formData.get('last_name') as string;
            if (lastName.trim() !== '') {
                existingUser.last_name = lastName;
            }
        }
        if (formData.has('username')) {
            const username = formData.get('username') as string;
            if (username.trim() !== '') {
                existingUser.username = username;
            }
        }
        if (formData.has('phone_number')) {
            const phoneNumber = formData.get('phone_number') as string;
            if (phoneNumber.trim() !== '') {
                existingUser.phone_number = await formatPhoneNumber(phoneNumber);
            }
        }
        if (formData.has('password')) {
            const password = formData.get('password') as string;
            if (password.trim() !== '') {
                const hashedPassword = bcrypt.hashSync(password, 10);
                existingUser.password = hashedPassword;
            }
        }
        if (formData.has('image') && formData.get('image') instanceof File) {
            const imageFile = formData.get('image') as File;
            if (imageFile.size > 0) {
                existingUser.image = await upLoadIMG(imageFile);
            }
        }
        
        if (formData.has('facebook')) {
            const facebook = formData.get('facebook') as string;
            if (facebook.trim() !== '') {
                existingContact.facebook = facebook;
            }
        }
        if (formData.has('instagram')) {
            const instagram = formData.get('instagram') as string;
            if (instagram.trim() !== '') {
                existingContact.instagram = instagram;
            }
        }
        if (formData.has('linkedin')) {
            const linkedin = formData.get('linkedin') as string;
            if (linkedin.trim() !== '') {
                existingContact.linkedin = linkedin;
            }
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

export async function DELETE( req : Request ){
    const prisma = new PrismaClient();
    try{
        const formData = await req.formData();
        const id = formData.get('id') as string
        const user = await prisma.user.findUnique({
            where :{
                user_id : parseInt(id)
            }
        })
        await prisma.$disconnect();
        if (user && user.role === "user") {
            await prisma.$transaction([
                prisma.contact.deleteMany({
                  where : {
                    user_id : user.user_id
                  }
                }),
                prisma.digitalwal.deleteMany({
                    where : {
                        user_id : user.user_id
                      }
                }),
                prisma.bookmark.deleteMany({
                    where : {
                      user_id : user.user_id
                    }
                }),
                prisma.user_career.deleteMany({
                    where : {
                      user_id : user.user_id
                    }
                }),
                prisma.history.deleteMany({
                    where : {
                      user_id : user.user_id
                    }
                }),
                prisma.rating_com.deleteMany({
                    where : {
                        user_id1 : user.user_id
                    }
                }),
                prisma.rating_user.deleteMany({
                    where : {
                        user_id2 : user.user_id
                    }
                }),
                prisma.experience.deleteMany({
                  where : {
                    user_id : user.user_id
                  }
                }),
                prisma.user.delete({
                  where : {
                    user_id : user.user_id
                  }
                })
            ])
        } 
        else if (user && user.role === "company") {
            await prisma.$transaction([
                prisma.contact.deleteMany({
                  where : {
                    user_id : user.user_id
                  }
                }),
                prisma.post.deleteMany({
                    where : {
                      user_id : user.user_id
                    }
                }),
                prisma.digitalwal.deleteMany({
                    where : {
                        user_id : user.user_id
                      }
                }),
                prisma.work.deleteMany({
                    where : {
                        user_id : user.user_id
                    }
                }),
                prisma.user_career.deleteMany({
                    where : {
                      user_id : user.user_id
                    }
                }),
                prisma.rating_com.deleteMany({
                    where : {
                        user_id2 : user.user_id
                    }
                }),
                prisma.rating_user.deleteMany({
                    where : {
                        user_id1 : user.user_id
                    }
                }),
                prisma.experience.deleteMany({
                  where : {
                    user_id : user.user_id
                  }
                }),
                prisma.user.delete({
                  where : {
                    user_id : user.user_id
                  }
                })
            ])
        }
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