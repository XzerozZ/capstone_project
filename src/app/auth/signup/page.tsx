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
import Swal from 'sweetalert2'
type Props = {}

const page = () => {

       const [tabs , setTabs] = React.useState(true)

  
    
                

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