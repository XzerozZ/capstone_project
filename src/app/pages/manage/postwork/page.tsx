"use client"
import 'rsuite/dist/rsuite.min.css';
import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoCodeWorking } from "react-icons/io5";
import StateComponent from '@/app/components/StateComponent/StateComponent';
import { FaArrowRight } from 'react-icons/fa';

type Props = {}


const page = (props: Props) => {

    
  
      
  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[500px] flex flex-col gap-6 p-3'>
            <h1 className='text-3xl text-[#202192] font-bold'>ลงรับสมัครงาน</h1>
            <form className='flex flex-col w-full gap-5 max-sm:p-10'>
            <div className='flex justify-center'>
         
                
       
            </div>

             <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่องาน</label>
                    <input 
                    type="text" 
                    id="name" 
                   
                    name='name'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="ชื่องาน" required />
            </div>
            
            <div className='flex flex-row gap-3 w-full justify-between'>
                <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">งบประมาณ</label>
                        <input 
                        type="text" 
                        id="budget" 
                        name='budget'
                       
                        
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="10000" required />
                </div>
                <div  className='w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชนิดงาน</label>
                    <select 
                    
                    id="type" 
                   
                    name='type'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" required >
                        <option value="1">Fulltime</option>
                        <option value="2">Freelance</option>
                    </select>
                 </div>

            </div>

            <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดงาน</label>
                    <input 
                    type="text" 
                    id="description" 
                   
                    name='description'
                    
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="รายละเอียดงาน" required />
            </div>


            <button type="submit" className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80"><span>ต่อไป</span></button>

            
        </form>
        </div>
    </div>
    </>
  )
}

export default page