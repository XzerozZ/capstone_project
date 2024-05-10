"use client"
import React, { useState } from 'react'
import { Rate } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';


type Props = {}

const page = (props: Props) => {

  const [checkComepany, setCheckComepany] = useState(true)

  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
          <h1 className='text-3xl text-[#202192] font-bold'>ให้คะแนนความพึงพอใจ </h1>
         {checkComepany ?  <div className='flex flex-col gap-3 '>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความเป็นมิตร</h3>
                  <div className='flex justify-center '>
                    <Rate max={5} defaultValue={0} color='yellow'/>
                  </div>
            </div>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความรวดเร็วในการทำงาน</h3>
                  <div className='flex justify-center '>
                    <Rate max={5} defaultValue={0} color='yellow'/>
                  </div>
            </div>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความแม่นยำในการทำงาน</h3>
                  <div className='flex justify-center '>
                    <Rate max={5} defaultValue={0} color='yellow'/>
                  </div>
            </div>
            <div className='flex justify-between flex-col '>
                  <h3 className='text-xl max-sm:text-center text-black'>แสดงความคิดเห็น</h3>
                  <div className='flex justify-center '>
                  <input 
                    type="text" 
                    id="comment"          
                    name='comment'           
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]"  required />
  
                  </div>
            </div>
             
            <div className='flex justify-center'>
                <button className='w-full  py-3 bg-[#202192] text-white rounded-md'>ส่งงาน</button> 
            </div>
            
        
          </div>
          :  
          <div className='flex flex-col gap-3 '>
            <div className='flex flex-row justify-between max-sm:flex-col'>
                    <h3 className='text-xl max-sm:text-center text-black'>ความเป็นมิตร</h3>
                    <div className='flex justify-center '>
                      <Rate max={5} defaultValue={0} color='yellow'/>
                    </div>
              </div>
              <div className='flex flex-row justify-between max-sm:flex-col'>
                  <h3 className='text-xl max-sm:text-center text-black'>ความเหมาะสมระหว่างงานกับราคา</h3>
                  <div className='flex justify-center '>
                    <Rate max={5} defaultValue={0} color='yellow'/>
                  </div>
            </div>
            <div className='flex justify-center'>
                  <button className='w-full  py-3 bg-[#202192] text-white rounded-md'>ส่งงาน</button> 
              </div>
          </div>}
         
        </div>
    </div>
    </>
  )
}
export default page