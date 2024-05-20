"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Category, User } from '@/interface'
import { useSession } from 'next-auth/react'
import { Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import EditUser from './component/editUser'
import EditCompany from './component/editCompany'
import { Modal } from 'flowbite-react'
import { FaCloudUploadAlt } from 'react-icons/fa'




const page = () => {

    const {data:session,status} = useSession()
    const [checkFree, setCheckFree] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState<User>({} as User)
    const [isLoading, setIsLoading] = useState(true)
    const [UserId, setUserId] = useState(session?.user?.id)
    const [category, setCate] = useState<Category[]>([] as Category[])
    const [userData, setUserData] = React.useState({
        email: '',
        username: '',
        phone_number: '',
        password: '',
        role: 'user',
        image: '',})
        const [data, setData] = useState({
            id: UserId,
            first_name: '',
            last_name: '',
            name: '',
            phone_number: '',
            password: '',
    
})

const [previewImage, setPreviewImage] = useState<string | null>(null);
const [selectedImage, setSelectedImage] = useState<File | null>(null);

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

const handleSubmit = (e:any,id:any) => {
   
     e.preventDefault
    
    const formData = new FormData();
    console.log(id,'id')
    formData.append('id', id);
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

    
    const fetchUser = async () => {
        const formData = new FormData()
        formData.append('email', session?.user?.email as string)
        axios.post('/api/user/info', formData).then((res) => {
          
            setUser(res.data)
        })
    }
    const fetchCategory = async () => {
        axios.get('/api/category').then((res) => {
            // console.log(res)
            setCate(res.data)
        })
    }
   
    useEffect(() => {
        
       

       if (session) {
        fetchUser()
        fetchCategory()
        setUserId(session?.user?.id)
        if (user !== undefined || user !== null) {
             
            if (user.role === 'user') {
                setCheckFree(true)
                setIsLoading(false)
                
    
              }
            else if (user.role === 'company'){
                setCheckFree(false)
                setIsLoading(false)
            }
           }
       }
      
    })

  
    if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }else {
   
  return (
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
    <div className='w-[1140px] flex flex-col gap-6 p-3'>
       <div className='flex justify-between'>
            <h1 className='text-3xl text-[#202192] font-bold'>ข้อมูลส่วนตัว</h1>
         <button onClick={() => setOpenModal(true)} className='rounded-md border-2 bg-[#fff] border-[#202192] text-lg py-2 px-3 hover:bg-[#202192] hover:text-white text-[#202192]'>แก้ไขข้อมูลส่วนตัว</button>
       </div>
        
        <hr className='border-[#202192] mt-2'/> 
        <div className='flex justify-between'>
            <h1 className='my-auto text-5xl text-[#202192] font-bold w-3/4'>{user.first_name} {user.last_name} ( {user.username} )</h1>
            <div className=''>
                <img src={user?.image}    
                className='w-[120px] h-[150px] rounded-md'
                 alt="" />
            </div>

        </div>
        <div className='flex gap-5'>
            <div className='w-full'>
                <label className='text-[#202192] font-bold'>อีเมล</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user?.email}</p>
            </div>
            
        </div>
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>บัตรประชาชน</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user?.id_card}</p>
            </div>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>เบอร์โทรศัพท์</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user?.phone_number}</p>
            </div>
        </div>
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>อาชีพ</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user?.careers[0] || 'Company'}</p>
            </div>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>สถานะ</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user?.role}</p>
            </div>
           
        </div>
        <div className='flex flex-col gap-3'>
          
           {
             checkFree ?   <div>
             <label className='text-[#202192] font-bold'>ประสบการณ์</label>
             <div className="flex flex-row gap-3 flex-wrap ">
                     {
                         user?.experience.map((item,index) => {
                             return( <div key={index} className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">{item.category.name || ''}</div>
                         )
                         })
                     }                
             </div>
             </div> : <div></div>
           }
        
        </div> 
           {
             checkFree ?    <div>
                   <div className='flex gap-5'>
            <div className='w-full'>
                <label className='text-[#202192] font-bold'>Facebook</label>
                <p className='p-2 border border-[#202192] rounded-md'><Link href={user?.contact[0].facebook}>{user?.contact[0].facebook || ''}</Link></p>
            </div>
            
        </div>
        <div className='flex gap-5'>
            <div className='w-full'>
                <label className='text-[#202192] font-bold'>Instagram</label>
                <p className='p-2 border border-[#202192] rounded-md'><Link href={user?.contact[0].instagram}>{user?.contact[0].instagram || ''}</Link></p>
            </div>
            
        </div>
        <div className='flex gap-5'>
            <div className='w-full'>
                <label className='text-[#202192] font-bold'>Linkedin</label>
                <p className='p-2 border border-[#202192] rounded-md'><Link href={user?.contact[0].linkedin}>{user?.contact[0].linkedin || ''}</Link></p>
            </div>
            
        </div>
             </div>
            : <div></div>}
            
    </div>
    <Modal  show={openModal} onClose={() =>  setOpenModal(false)} >
        <Modal.Header>Change information</Modal.Header>
        <Modal.Body>
        <div className='flex flex-col gap-5 max-sm:p-10  w-full mx-auto' >
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
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="name or company name"  />
                      </div>
                    <div className='flex gap-3 w-full'>
                    <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                              <input 
                              type="text" 
                              id="first_name" 
                             
                              onChange={handleChange}
                              name='first_name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="firstname"  />
                      </div> 
                      <div className='w-full'>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                              <input 
                              type="text" 
                              id="last_name" 
                             
                              onChange={handleChange}
                              name='last_name'
                              
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="lastname"  />
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
                                      
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="phone number"  />
                              </div>
                      
                      </div>

                      <div>
                              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input 
                              type="password" 
                              id="password"
                              name='password'
                              onChange={handleChange}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="Password"  />
                      </div>
                     
                   

                      


                      <button onClick={(e)=> handleSubmit(e,UserId)} className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80">Update</button>

              
                      </div>
        </Modal.Body>
      
      </Modal>
   {/* {
    checkFree ? <EditUser ModalProps={openModal} dataID={UserId} Cate={category}/> : <EditCompany ModalProps={openModal} dataID={UserId}/>
   } */}
    </div>
   
  )
}}

export default page