"use client"
import React, { use, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa';
import { RiVipDiamondFill } from "react-icons/ri";
import { MdClose } from 'react-icons/md';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { set } from 'rsuite/esm/utils/dateUtils';
import Swal from 'sweetalert2';
import { Router } from 'express';

type Props = {}

const page = (props: Props) => {
    const params = useParams()
    const Router = useRouter()
   
    const {data:session,status} = useSession() 
    const [UserEmail, setUserEmail] = React.useState(session?.user?.email)
    const [isLoading, setIsLoading] = React.useState(true)
  

    const ConfirmPayment = async (order_id:any) => {
        const formData = new FormData()
        formData.append('orderId', order_id)
        console.log(order_id)
        await axios.put(`/api/job/mass/payment`, formData).then((res) => {
            console.log(res.data)
           
        })
        
    }
   
    const handleChoose = async (id:any,email:any,pd_id:any) => {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('email', email)
        formData.append('productId', pd_id)
        await axios.post(`/api/job/mass`, formData).then((res) => {
            console.log(res.data)
           
            Swal.fire({
                title: "Are you sure?",
                text: "You want to buy this package?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, do it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  ConfirmPayment(res.data)
                
                  Swal.fire({
                    title: "Success!",
                    text: "Thanks you for payment.",
                    icon: "success"
                  });
                  Router.push('/pages/manage/postwork')
                }
               
              }
             );

        })
    }


    useEffect(() => {
      if (session){
        setUserEmail(session?.user?.email)
        setIsLoading(false)
      }
    }, [session])
    if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }else {
    
  return (
   <>
   <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] max-sm:mb-[250px]'>
        <div className='w-[1140px] flex flex-col gap-6 max-sm:gap-3 max-sm:p-8 min-h-screen mb-[-300px]'>
           <div>
                <h1 className='text-4xl font-bold text-center'>Choose your package</h1>

           </div>
         <div className='flex justify-center'>
         <div className='flex gap-7 justify-center w-[700px] max-sm:w-full  max-sm:gap-2 px-2 max-sm:flex-col'>
              <div className='flex flex-col justify-center p-5 gap-3  rounded-md border border-[#d3d3d3]/90  md:hover:scale-105 w-[350px]'>
                    <div className='flex justify-center '>
                      <RiVipDiamondFill className='text-[#c0c0c0]' size={50}/>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-center'>Standard</h1>
                    </div>
                    
                    <div className='flex justify-center gap-5 max-sm:gap-1'>
                        <div className='text-3xl font-bold'>THB 499</div>
                        <div className='text-[#d3d3d3]'>/ month</div>
                    </div>
                    <div className='text-[#d3d3d3] text-sm text-center'>
                      This is recommended for small business
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <FaCheck className='text-[#39db4a]'size={25}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>manage people</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <MdClose className='text-[#ff0000]' size={30}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>recommended</h1>
                        </div>
                    </div>
                    <button onClick={() => handleChoose(params.id,UserEmail,1)} className='border border-[#202192] text-[#202192] px-4 py-2 rounded-md w-full hover:text-white hover:bg-[#202192]'>Choose</button>

                    
              </div>
              <div className='flex flex-col justify-center p-5 gap-3  rounded-md border border-[#d3d3d3]/90  md:hover:scale-105 w-[350px]'>
                    <div className='flex justify-center '>
                      <RiVipDiamondFill className='text-[#FFD700]' size={50}/>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-center'>Premium</h1>
                    </div>
                    
                    <div className='flex justify-center gap-5 max-sm:gap-1'>
                        <div className='text-3xl font-bold'>THB 999</div>
                        <div className='text-[#d3d3d3]'>/ month</div>
                    </div>
                    <div className='text-[#d3d3d3] text-sm text-center'>
                      This is recommended for big business
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <FaCheck className='text-[#39db4a]'size={25}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>manage people</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                        <FaCheck className='text-[#39db4a]'size={25}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>recommended</h1>
                        </div>
                    </div>
                    <button  onClick={() => handleChoose(params.id,UserEmail,2)} className='border border-[#202192] text-[#202192] px-4 py-2 rounded-md w-full hover:text-white hover:bg-[#202192]'>Choose</button>

                    
              </div>
           </div>
         </div>
           </div>
      </div>
   </>
  )
}
}
export default page