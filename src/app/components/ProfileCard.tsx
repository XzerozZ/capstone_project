import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Rate } from 'rsuite'
import { Table } from "flowbite-react";



const ProfileCard = ({Person} : {Person :any}) => {

  const handleSubmit = async (job_id:any,freelance_id:any,status:any) => {
    console.log(job_id,freelance_id,status)
    const formData = new FormData()
    formData.append('id', freelance_id)
    formData.append('status', status)
    axios.put(`/api/company/selector/${job_id}`,formData).then((res) => {
      console.log(res.data)
    })
  }
  
  
  return (
   <>
  
  <div  className='shadow-md rounded-lg hover:scale-105'>
  <Link href={`/pages/manage/freelance/${Person?.user?.email}`} className='hover:no-underline'>
            <img  src={Person?.user?.image || "no data"} alt="" className='rounded-t-md aspect-square'/>
            <div className='flex flex-col gap-3 px-3 py-1'>
                <h1 className='text-xl text-[#202192] font-bold'>{Person?.user?.first_name || "no data"} {Person?.user?.last_name || "no data"}</h1>
                <h3 className='text-lg text-black flex '><Rate max={5} size='xs' defaultValue={4} allowHalf  readOnly color='yellow'/></h3>
            </div>
                                        
     </Link>
     <div className='flex justify-between gap-3 px-3 py-2'>
                                            <button className='text-[#202192]' onClick={() => handleSubmit(Person.job_id,Person?.user_id,'true')}>ยอมรับ</button>
                                            <button className='text-[#ff0000]' onClick={() => handleSubmit(Person.job_id,Person?.user_id,'false')}>ลบ</button>
       
     </div>
    </div>
    
   </>
  )
}

export default ProfileCard






