"use client"
import React, { useEffect, useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import { Rate } from 'rsuite';
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { Job } from '@/interface';
import { useParams } from 'next/navigation';



const page = () => {

    const params = useParams()
    const [jobData, setJobData] = useState<Job>()
    const fetchJobbyId = async () => {
        axios.get(`http://localhost:3000/api/job/${params.id}`).then((res) => {
            console.log(res.data)
            setJobData(res.data)
        
        })
    }
    useEffect(() => {
        fetchJobbyId()
    }, [])

  
  return (
   <>
   <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
             <div className='flex flex-row justify-between max-sm:flex-col gap-3'>
                <div className='flex gap-2 flex-col'>
                    <h1 className='text-[#202192] font-bold text-3xl '>{jobData?.title}   <span className='text-black text-xl'>โดย {jobData?.post[0]?.user?.username}</span> </h1>
                    <h3 className='text-lg text-black'>Publish {jobData?.posted_date}</h3>
                    <h3 className='text-lg text-[#202192] '>งบประมาณ : {jobData?.budget} THB</h3>
                    <h3 className='text-lg text-black'>สถานะ : {jobData?.status}</h3>
                </div>
                <div className=''>
                    <div className='flex  gap-2'>
                    <button className='bg-[#202192] px-3 py-1 rounded-md text-white text-xl'>สมัครงาน</button>
                    <FaRegHeart size={30}/>

                    </div>
                </div>
             </div>
             <div className="flex flex-row gap-3 flex-wrap ">
               {
                jobData?.categories.map((item:any,index) => {
                    return (
                        <button key={index} className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe] text-sm">{item}</button>
                    )
                
                })
               }
             </div>
            <img src={jobData?.post[0]?.user?.image} alt="" />
            <p className='text-xl'>{jobData?.description}</p>
             

        </div>
   </div>

   </>
  )
}
export default page