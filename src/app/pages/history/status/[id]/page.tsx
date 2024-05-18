"use client"
import React, { useEffect, useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import StatusTimeline from '@/app/components/StatusTimeline';
import axios from 'axios';
import { Loader } from 'rsuite';
import { Job } from '@/interface';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { set } from 'rsuite/esm/utils/dateUtils';

type Props = {}

const page = (props: Props) => {
  const [value, setValue] = React.useState([]);
  const [link, setLink] = React.useState('');
  const [dataJob, setDataJob] = React.useState<Job>({} as Job);
  const {data:session} = useSession()
  const [UserID, setUserID] = React.useState(session?.user?.id)
  const [status, setStatus] = useState<String>()
  const params = useParams()
  

  const [isLoading, setIsLoading] = useState(true);

  const fetchDataJob = async (email:any,id:any) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('id', id)
    console.log(email,id ,"email + id")
    axios.post(`/api/history/job`,formData).then((res) => {
      setDataJob(res.data)
    })
  }
  const handleSendWork = (id:any,job_id:any) => {
      const formData = new FormData()
      formData.append('user_id', id);
      formData.append('job_id', job_id);
      formData.append('link', link)
      axios.post('/api/job/work', formData).then((res) => {
          console.log(res.data)
      })}

  
  

  useEffect(() => {
    
    if (session !== undefined || session !== null && dataJob !== undefined || dataJob !== null) {
      fetchDataJob(session?.user?.email,params.id)
      setIsLoading(false)
      console.log(dataJob)
      setStatus(dataJob.status)
      }
    else {
      setIsLoading(true)
    }
      
    
  }, [session,dataJob,status])



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
      <StatusTimeline data={dataJob}/>
       </div>
{
  status !== 'Considering' || status !== "Complete" ?   <div>
     <div>
  <div className="mb-2 block">
  <div >
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github Link</label>
            <input 
            type="text" 
            id="link" 
            name='link'
            onChange={(e) => setLink(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="Github Link"  />
    </div>

  </div>
  
</div>
<div className='flex justify-center '>
  <button className='px-4 py-2 bg-[#202192] text-2xl text-white rounded-lg w-full' onClick={() => handleSendWork(UserID,params.id)}>ส่งงาน</button>
</div>
  </div> : <div></div>
}
        </div>
        
    </div>

    </>
  )
}
export default page