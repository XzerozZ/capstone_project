"use client"
import axios from 'axios';
import { Router } from 'express';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Loader, Rate } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Swal from 'sweetalert2';



type Props = {}

const page = (props: Props) => {

  const {data:session} = useSession()
  const params = useParams()
  const [UserEmail, setUserEmail] = React.useState(session?.user?.email)
  const [RecId, setRecId] = React.useState('mock')
  const Router = useRouter()
  const [checkComepany, setCheckComepany] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [UserCommentbyCompany, setUserComment] = useState({
    comment: '',
  })

  const [hoverValueCom1, setHoverValue1] = React.useState<number>(0);
  const [hoverValueCom2, setHoverValue2] = React.useState<number>(0);
  const [hoverValueCom3, setHoverValue3] = React.useState<number>(0);

  const [hoverValueUser1, setHoverValueUser1] = React.useState<number>(0);
  const [hoverValueUser2, setHoverValueUser2] = React.useState<number>(0);
  console.log(hoverValueUser1);
  console.log(hoverValueUser2);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserComment((prev:any) => ({
            ...prev,
            [name]: value,
    }));
  }
  
  const handleCompany = (giver:any,job_id:any) => {
      const formData = new FormData()
      formData.append('email',giver);
      console.log(giver,job_id)
      formData.append('comment', UserCommentbyCompany.comment);
      formData.append('job_id', job_id);
      formData.append('friendly_rating',hoverValueCom1.toString());
      formData.append('efficiency_rating', hoverValueCom2.toString());
      formData.append('accuracy_rating', hoverValueCom3.toString()); 
      console.log(UserCommentbyCompany)
      console.log(hoverValueCom1,hoverValueCom2,hoverValueCom3)
      axios.post('/api/rating_user', formData).then((res) => {
        console.log(res.data)
        Swal.fire({
          icon: 'success',
          title: 'คุณได้ทำการให้คะแนนเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500
        })
        Router.push('/history')
      })
  }
  const handleUser = (giver:any,job_id:any) => {
    const formData = new FormData()
    formData.append('email', giver);
   
    formData.append('job_id', job_id);
    formData.append('friendly_rating', hoverValueUser1.toString());
    formData.append('value_rating', hoverValueUser2.toString());
    axios.post('/api/rating_com', formData).then((res) => {
      console.log(res.data)
      Swal.fire({
        icon: 'success',
        title: 'คุณได้ทำการให้คะแนนเรียบร้อยแล้ว',
        showConfirmButton: false,
        timer: 1500
      })
     })

  }
  useEffect(() => {
   if (session){
    setUserEmail(session?.user?.email)
    if (session?.user?.role === 'company') {
      setUserEmail(session?.user?.email)
      setCheckComepany(true)
    } else {
      setCheckComepany(false)
    }
   }
  },[session])


  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }
  else {


  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3 min-h-screen'>
          <h1 className='text-3xl text-[#202192] font-bold'>ให้คะแนนความพึงพอใจ </h1>
         {checkComepany ?  <div className='flex flex-col gap-3 '>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความเป็นมิตร</h3>
                  <div className='flex justify-center '>
                  <Rate defaultValue={hoverValueCom1} onChangeActive={setHoverValue1} color='yellow'/>
                  </div>
            </div>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความรวดเร็วในการทำงาน</h3>
                  <div className='flex justify-center '>
                  <Rate defaultValue={hoverValueCom2} onChangeActive={setHoverValue2} color='yellow'/>
                  </div>
            </div>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความแม่นยำในการทำงาน</h3>
                  <div className='flex justify-center '>
                  <Rate defaultValue={hoverValueCom3} onChangeActive={setHoverValue3} color='yellow'/>
                  </div>
            </div>
            <div className='flex justify-between flex-col '>
                  <h3 className='text-xl max-sm:text-center text-black'>แสดงความคิดเห็น</h3>
                  <div className='flex justify-center '>
                  <input 
                    type="text" 
                    id="comment"          
                    name='comment' 
                    onChange={handleChange}
                    placeholder='แสดงความคิดเห็น'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]"  required />
  
                  </div>
            </div>
             
            <div className='flex justify-center'>
                <button className='w-full  py-3 bg-[#202192] text-white rounded-md' onClick={() => handleCompany(UserEmail,params.id)}>แสดงความคิดเห็น</button> 
            </div>
            
        
          </div>
          :  
          <div className='flex flex-col gap-3 '>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                    <h3 className='text-xl max-sm:text-center text-black'>ความเป็นมิตร</h3>
                    <div className='flex justify-center '>
                            <Rate defaultValue={hoverValueUser1} onChange={setHoverValueUser1} color='yellow'/>
                    </div>
              </div>
              <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความเหมาะสมระหว่างงานกับราคา</h3>
                  <div className='flex justify-center '>
                          <Rate defaultValue={hoverValueUser2} onChange={setHoverValueUser2} color='yellow'/>
                  </div>
            </div>
            <div className='flex justify-center'>
                  <button className='w-full  py-3 bg-[#202192] text-white rounded-md' onClick={() => handleUser(UserEmail,params.id)}>แสดงความคิดเห็น</button> 
              </div>
          </div>}
         
        </div>
    </div>
    </>
  )
}}
export default page