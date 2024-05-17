"use client"
import React, { useEffect, useState } from 'react'

import 'rsuite/dist/rsuite.min.css';
import { FileInput, Label } from 'flowbite-react';


import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import StatusTimeline from '@/app/components/StatusTimeline';
import axios from 'axios';
import { Loader } from 'rsuite';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

type Props = {}

const page = (props: Props) => {
  const {data: session, status} = useSession()
  const [value, setValue] = React.useState([]);
  const [link, setLink] = React.useState('');
  const router = useRouter()

  
  React.useEffect(() => {
    if (status === 'unauthenticated') {
        router.push('/auth/signin')
    }
}, [status, router])

  const handleFakeUpload = () => {
    const formData = new FormData();
    formData.append('id', '12345');
    axios.post('fakeupload', )
  }
  


  const [isLoading, setIsLoading] = useState(false);

 
  // useEffect(() => {
  //   if (dataRes.length > 0 && dataBlog.length > 0) {
  //     setIsLoading(false);
  //   }
  // }, []);

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
          <h1 className='text-3xl text-[#202192] font-bold'>สถานะของงาน</h1>
       <div className=''>
      <StatusTimeline />
       </div>
          <div>
          <div className="mb-2 block">
          <div >
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github Link</label>
                    <input 
                    type="text" 
                    id="link" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="Github Link"  />
            </div>

          </div>
          
        </div>
        <div className='flex justify-center '>
          <button className='px-4 py-2 bg-[#202192] text-2xl text-white rounded-lg w-full' onClick={() => handleFakeUpload}>ส่งงาน</button>
        </div>
        </div>
        
    </div>

    </>
  )
}
export default page