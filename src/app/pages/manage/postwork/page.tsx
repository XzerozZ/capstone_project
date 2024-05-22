"use client"
import 'rsuite/dist/rsuite.min.css';
import React, { useEffect, useState } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoCodeWorking } from "react-icons/io5";

import { FaArrowRight } from 'react-icons/fa';
import { MultiSelect } from 'react-multi-select-component';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import options from '@/app/components/Options';

type Props = {}


const page = (props: Props) => {
  const [category, setCategory] = useState([] as any[])
  const [selected, setSelected] = useState<{ label: string; value: string }[]>([]);
  const {data:session,status} = useSession()
  const [UserID, setUserID] = React.useState(session?.user?.id)
  const [work, setWork] = useState({
    title: '',
    budget: '',
    type: '',
    description: '',
    submitted_date: '',
  
  })
  console.log(work.type)
 

  // const fetchCategory = async () => {
  //   axios.get('/api/category').then((res) => {
       
  //       setCategory(res.data)
  //   })
  // }
  const handlePostWork = (id:any) => {
    const formData = new FormData()
    formData.append('title', work.title)
    formData.append('budget', work.budget)
    formData.append('type', work.type)
    formData.append('description', work.description)
    formData.append('submitted_date', new Date().toISOString())
    formData.append('id',id)
    for (let i = 0; i < selected.length; i++) {
      formData.append('category', selected[i].value);
      console.log(selected[i].value)
    }
    
    axios.post('/api/job', formData).then((res) => {
       
    })
  }
  const handleChange = (e:any) => {
    const {name, value} = e.target
    setWork((prev) => ({
      ...prev,
      [name]: value
    }))
  }

 
  useEffect(() => {
    if (session) {
      // fetchCategory()
      
    }
  }, [category,session])
      
  return (
    <>
     <div className='w-full flex justify-center my-[70px] max-sm:my-[10px] '>
        <div className='w-[500px] flex flex-col gap-1 p-3 min-h-screen'>
            <h1 className='text-3xl text-[#202192] font-bold'>ลงรับสมัครงาน</h1>
            <form className='flex flex-col w-full gap-5 max-sm:p-5'>
            <div className='flex justify-center'>
         
            </div>

             <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่องาน</label>
                    <input 
                    type="text" 
                    id="title" 
                    onChange={handleChange}
                    name='title'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="ชื่องาน" required />
            </div>
            
            <div className='flex flex-row gap-3 w-full justify-between'>
                <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">งบประมาณ</label>
                        <input 
                        type="text" 
                        id="budget" 
                        name='budget'
                        onChange={handleChange}
                       
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="10000" required />
                </div>
                <div  className='w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชนิดงาน</label>
                    <select 
                    
                    id="type" 
                   
                    name='type'
                    onChange={handleChange}
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" required >
                        <option value="Fulltime">Fulltime</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                 </div>

            </div>
            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทงาน</label>
                   
                    <MultiSelect
                        // options={category.map((cate)=>({label:cate.name,value:cate.name}))}
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                        />       </div>

            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">รายละเอียดงาน</label>
                    <textarea
                  
                    id="description" 
                    onChange={handleChange}
                    name='description'
                    
                    className="h-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="รายละเอียดงาน" required >
                    </textarea>
            </div>


            <button type="submit" className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80" onClick={() => {handlePostWork(UserID)}}><span>ต่อไป</span></button>

            
        </form>
        </div>
    </div>
    </>
  )
}

export default page

