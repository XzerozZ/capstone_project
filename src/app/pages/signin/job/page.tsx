import { Carousel } from 'flowbite-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-6 p-3'>
      
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <div className='bg-[#fafafa] w-full'>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                    <input 
                    type="text" 
                    id="job" 
                  
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="job"  />
            </div>
          
    </div>
        </div>
    </div>
        </>
  )
}

export default page