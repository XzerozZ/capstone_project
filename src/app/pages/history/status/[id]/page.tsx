"use client"
import React from 'react'

import 'rsuite/dist/rsuite.min.css';
import { FileInput, Label } from 'flowbite-react';


import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import StatusTimeline from '@/app/components/StatusTimeline';
import axios from 'axios';

type Props = {}

const page = (props: Props) => {
  const [value, setValue] = React.useState([]);

  const handleFakeUpload = () => {
    const formData = new FormData();
    formData.append('id', '12345');
    axios.post('fakeupload', )
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
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput id="file-upload" />
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