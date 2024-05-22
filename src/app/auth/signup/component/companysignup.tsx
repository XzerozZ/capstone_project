import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, use, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

type Props = {}

const companysignup = (props: Props) => {
    const Router = useRouter();
    const [userData, setUserData] = React.useState({
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
      
        password: '',
        role: 'company',
        image: '',
        id_card: '',
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
        formData.append('first_name', userData.first_name);
        formData.append('last_name', userData.last_name);
        formData.append('phone_number', userData.phone_number);
        formData.append('id_card', userData.id_card);
        formData.append('password', userData.password);
        formData.append('role', userData.role);
        if (selectedImage) {
                formData.append('image', selectedImage);
            }
        console.log(formData);
        axios.post('/api/auth/register', formData)
                .then((res) => {
                    if (res.status === 200){
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Register success",
                        });
                        console.log(res);
                        Router.push('/pages/signin/company')
                       }
                       else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                       }
                       
                });

      
        console.log(formData)
        
     
}

  return (
    <>
     <form onSubmit={handleSubmit} className='flex flex-col w-[450px] gap-5 max-sm:p-10'>
            <div className='flex justify-center'>
            <div className=''>
                    {previewImage ? (
                        <label htmlFor='uploadImage'>
                            <img className='w-[100px] h-[100px] rounded-md'
                                src={previewImage}
                                alt='Preview'
                               
                            />
                        </label>
                    ) : (
                        <label htmlFor='uploadImage' className='cursor-pointer my-auto w-[100px] h-[100px] bg-[#d9d9d9] flex justify-center rounded-md'>
                            <FaCloudUploadAlt className='my-auto text-[#b3b3b1] text-5xl' />
                        </label>
                    )}
                   
                    <input
                        id='uploadImage'
                        type='file'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        
                    />
                </div>
                
       
            </div>

             <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                    <input 
                    type="text" 
                    id="username" 
                    onChange={handleChange}
                    name='username'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="company name" required />
            </div>
            <div className='flex flex-row gap-3 w-full justify-between'>
                <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                        <input 
                        type="text" 
                        id="first_name" 
                        name='first_name'
                        onChange={handleChange}
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="firstname" required />
                </div>
                <div  className='w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                    <input 
                    type="text" 
                    id="last_name" 
                    onChange={handleChange}
                    name='last_name'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="lastname" required />
                 </div>

            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">id</label>
                    <input 
                    type="text" 
                    id="id_card" 
                    onChange={handleChange}
                    name='id_card'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="personal id" required />
            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    onChange={handleChange}
                    name='email'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="company@company.com" required />
            </div>
            <div className='flex flex-row gap-3 w-full justify-between'>
                <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                        <input 
                        type="text" 
                        id="phone_number" 
                        name='phone_number'
                        onChange={handleChange}
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="087-123457" required />
                </div>
                

            </div>

            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    onChange={handleChange}
                    name='password'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="password" required />
            </div>


            <button type="submit" className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80">Sign up</button>

            
        </form></>
  )
}

export default companysignup