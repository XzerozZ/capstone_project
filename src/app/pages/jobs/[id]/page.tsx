"use client"
import React, { useEffect, useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import { Loader, Rate } from 'rsuite';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import axios from 'axios';
import { Job } from '@/interface';
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';


const page = () => {

    const params = useParams()
    const {data:session,status} = useSession()
    const [jobData, setJobData] = useState<Job>()
    const [isFav, setIsFav] = useState(false);
    const [userid, setUserId] = useState(session?.user?.id)
    const [isLoading, setIsLoading] = useState(true)

    const fetchJobbyId = async () => {
        await axios.get(`http://localhost:3000/api/job/${params.id}`).then((res) => {
           
            setJobData(res.data)
        
        })
    }
    const handleJob = (user_id:any,job_id:any) => {
        const formData = new FormData()
        formData.append('user_id', user_id)
        formData.append('job_id', job_id)
        axios.post('/api/history', formData).then((res) => {
           console.log(res)

        })
    }

    const handleFav = (user_id:any,job_id:any) => {
        const formData = new FormData()
        formData.append('user_id', user_id)
        formData.append('job_id', job_id)
       
        axios.post('/api/bookmark', formData).then((res) => {
           
        })
        setIsFav(true)
    };
    const deleteFav = (user_id:any,job_id:any) => {
        const formData = new FormData()
        console.log(user_id,job_id)
        formData.append('user_id', user_id)
        formData.append('job_id', job_id)
        axios.delete('/api/bookmark', { data: formData }).then((res) => {
           
        })
        setIsFav(false)
    };
    const checkFav = async (user_id:any,job_id:any) => {
        const formData = new FormData()
      
        formData.append('user_id', user_id)
        formData.append('job_id', job_id)
        await axios.post('/api/checkbookmark',formData).then((res) => {
       
            if (res.data.message === 'Not Added') {
                setIsFav(false)
            }
            else if (res.data.message === 'Already Added') {
                setIsFav(true)
            }
            
        })
    }
    const DateFormatter = ({ timestamp }:any) => {
        if (!timestamp) {
          return <div>No timestamp provided</div>;
        }
      
        // Extract the date part
        const date = timestamp.substring(0, 10);
        // Replace hyphens with slashes
        const formattedDate = date.replace(/-/g, '/');
      
        return <span className='text-lg text-black'>{formattedDate}</span>;
      };
      

    useEffect(() => {
            if (session){
                fetchJobbyId()
                if (jobData !== undefined || jobData !== null && session !== undefined || session !== null) {
                    setIsLoading(false)
                    checkFav(userid,params.id)
                }
        
        
            }
    }, [params.id,session])
  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
  else {

  

  
  return (
   <>
   <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
             <div className='flex flex-row justify-between max-sm:flex-col gap-3'>
                <div className='flex gap-2 flex-col'>
                    <h1 className='text-[#202192] font-bold text-3xl '>{jobData?.title}   <span className='text-black text-xl'>โดย {jobData?.post[0]?.user?.username}</span> </h1>
                    <h3 className='text-lg text-black'>Publish <DateFormatter timestamp={jobData?.posted_date}/></h3>
                    <h3 className='text-lg text-[#202192] '>งบประมาณ : {jobData?.budget} THB</h3>
                    <h3 className='text-lg text-black'>สถานะ : {jobData?.status}</h3>
                </div>
                <div className=''>
                    <div className='flex  gap-2'>
                    <button className='bg-[#202192] px-3 py-1 rounded-md text-white text-xl' onClick={()=> handleJob(userid,params.id)}>สมัครงาน</button>
                    {isFav ? (
                      <FaHeart onClick={() => deleteFav(userid,params.id)} className='text-[#ff0000]' size={35} />
                    ) : (
                        
                      <FaRegHeart onClick={() => handleFav(userid,params.id)} size={35} />
                    )}


                    </div>
                </div>
             </div>
             <div className="flex flex-row gap-3 flex-wrap ">
               {
                jobData?.categories.map((item:any,index) => {
                    return (
                        <div key={index} className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe] text-sm">{item}</div>
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
}}
export default page