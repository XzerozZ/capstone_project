"use client"
import axios from 'axios';
import { Modal } from 'flowbite-react';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';

type Props = {}

const editCompany = ({ModalProps,dataID}:{ModalProps:boolean,dataID:any}) => {
    const [data, setData] = useState({
                id: dataID,
                first_name: '',
                last_name: '',
                name: '',
                phone_number: '',
                password: '',
        
    })
   
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);
    const [selectedImage2, setSelectedImage2] = useState<File | null>(null);
    const [openModal,setOpenModal] = useState(false)
    const [openModalClose,setOpenModalClose] = useState(openModal)

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
    setData((prev:any) => ({
            ...prev,
            [name]: value,
    }));
};

const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(selectedImage,'image');
        
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('username', data.name);
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('phone_number', data.phone_number);
        formData.append('password', data.password);
        if (selectedImage) {
                formData.append('image', selectedImage);
        }
        axios.put('/api/user',formData)
                .then((res) => {
                console.log(res)
                })
                .catch((err) => {
                console.log(err)
                })
        
}

// useEffect(() => {
//       if ()
      
//     }, [data,openModal,ModalProps])


  return (
   <>
       <Modal dismissible show={openModal} onClose={() =>  setOpenModal(false)} >
        <Modal.Header>Change information</Modal.Header>
        <Modal.Body>
        <form className='flex flex-col gap-5 max-sm:p-10  w-full mx-auto' onSubmit={handleSubmit}>
                      <div className='flex justify-center gap-3'>
                      <div className='w-full'>
                              {previewImage ? (
                                      <label htmlFor='uploadImage'>
                                      <img className='w-[100px] h-[100px] rounded-md'
                                              src={previewImage}
                                              alt='Preview'
                                      
                                      />
                                      </label>
                              ) : (
                                      <label htmlFor='uploadImage' className='cursor-pointer my-auto  bg-[#d9d9d9] flex justify-center rounded-md h-[200px]'>
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
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name or company name</label>
                              <input 
                              type="text" 
                              id="name" 
                             
                              onChange={handleChange}
                              name='name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="name or company name" required />
                      </div>
                    <div className='flex gap-3 w-full'>
                    <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                              <input 
                              type="text" 
                              id="first_name" 
                             
                              onChange={handleChange}
                              name='first_name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="firstname" required />
                      </div> 
                      <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                              <input 
                              type="text" 
                              id="last_name" 
                             
                              onChange={handleChange}
                              name='last_name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="lastname" required />
                      </div>
                    </div>
                      
                    
                      <div className='flex flex-row gap-3 w-full justify-between'>
                              <div  className='w-full'>
                                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                      <input 
                                      type="text" 
                                      id="phone_number"  
                                      name='phone_number'
                                     
                                      onChange={handleChange}
                                      
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="phone number" required />
                              </div>
                      
                      </div>

                      <div>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input 
                              type="password" 
                              id="password"
                              name='password'
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="Password" required />
                      </div>
                     
                   

                      


                      <button type="submit" className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80">Update</button>

              
                      </form>
        </Modal.Body>
      
      </Modal>
   
    </>
  )

}
export default editCompany