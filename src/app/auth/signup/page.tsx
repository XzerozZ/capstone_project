"use client"
import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import type { CustomFlowbiteTheme } from "flowbite-react";

import { FaCloudUploadAlt } from 'react-icons/fa'
import UserSignup from '@/app/auth/signup/component/usersignup'
import { Tabs } from 'flowbite-react'
import { SiFreelancer } from "react-icons/si";
import { MdDashboard } from 'react-icons/md'
import CompanySignup from '@/app/auth/signup/component/companysignup'
type Props = {}

const page = () => {

       const [tabs , setTabs] = React.useState(true)

  
        const [userData, setUserData] = React.useState({
                email: '',
                username: '',
                phone_number: '',
                birthday: '',
                password: '',
                role: 'user',
                image: '',
        });
        const [selectedImage, setSelectedImage] = useState<File | null>(null);
        const [previewImage, setPreviewImage] = useState<string | null>(null);
        
        const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                setSelectedImage(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewImage(reader.result as string);
                };
                reader.readAsDataURL(file);
            }
        };



        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setUserData((prev:any) => ({
                        ...prev,
                        [name]: value,
                }));
        };
        console.log(selectedImage)
        console.log(userData)
        const handleSubmit = (e:any) => {
                e.preventDefault();
                console.log(selectedImage,'image');
                const formData = new FormData();
                formData.append('email', userData.email);
                formData.append('username', userData.username);
                formData.append('phone_number', userData.phone_number);
                formData.append('birthday', userData.birthday);
                formData.append('password', userData.password);
                formData.append('role', userData.role);
                if (selectedImage) {
                        formData.append('image', selectedImage);
                    }
                console.log(formData);
                axios.post('/api/auth/register', formData)
                        .then((res) => {
                                console.log(res);
                        });
                console.log(formData)
                
             
        }
   
                

  return (
    <>
     <div className='flex justify-center bg-[#FAFAFA] py-[30px] max-sm:p-[50px] max-sm:py-[10px]'>
    <div >
    <h1 className='text-center text-[40px]'>Sign up</h1>
      
     
    <div className='flex flex-col '>
    <div className='Tabs grid grid-cols-2 '>
            <button className='text-center text-xl flex gap-3 rounded-t-lg focus:text-[#202192] focus:bg-gray-300 hover:bg-gray-300 active:bg-gray-300 px-4 py-2 justify-center' onClick={() => setTabs(true)}>
                <SiFreelancer className='text-3xl '/>
                <h3 className=''>Freelance</h3>
            </button>
            <button className='text-center text-xl flex gap-3 rounded-t-lg focus:text-[#202192] focus:bg-gray-300 hover:bg-gray-300 active:bg-gray-300 px-4 py-2 justify-center'  onClick={() => setTabs(false)}>
                <MdDashboard className='text-3xl '/>
                <h3 className=''>Company</h3>
            </button>
           
      </div>
      <hr />
      <br/>
        {tabs ? <UserSignup/> : <CompanySignup/>}
    </div>
    </div>
   </div>
    </>
  )
}

export default page