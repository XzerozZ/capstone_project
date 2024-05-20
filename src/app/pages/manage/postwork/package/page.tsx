import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { RiVipDiamondLine } from "react-icons/ri";
import { MdClose } from 'react-icons/md';
type Props = {}

const page = (props: Props) => {
  return (
   <>
   <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] max-sm:mb-[250px]'>
        <div className='w-[1140px] flex flex-col gap-6 max-sm:gap-3 max-sm:p-8 min-h-screen '>
           <div>
                <h1 className='text-4xl font-bold text-center'>Choose your package</h1>

           </div>
         <div className='flex justify-center'>
         <div className='flex gap-7 justify-center w-[700px] max-sm:w-full  max-sm:gap-2 px-2 max-sm:flex-col'>
              <div className='flex flex-col justify-center p-5 gap-3  rounded-md border border-[#d3d3d3]/90  hover:scale-105 '>
                    <div className='flex justify-center '>
                      <RiVipDiamondLine className='text-[#202192]' size={50}/>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-center'>Standard</h1>
                    </div>
                    
                    <div className='flex justify-center gap-5 max-sm:gap-1'>
                        <div className='text-3xl font-bold'>THB 499</div>
                        <div className='text-[#d3d3d3]'>/ month</div>
                    </div>
                    <div className='text-[#d3d3d3] text-sm text-center'>
                      This is recommended for small business
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <FaCheck className='text-[#39db4a]'size={25}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>manage people</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <MdClose className='text-[#ff0000]' size={30}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>recommended</h1>
                        </div>
                    </div>
                    <button className='border border-[#202192] text-[#202192] px-4 py-2 rounded-md w-full hover:text-white hover:bg-[#202192]'>Choose</button>

                    
              </div>
              <div className='flex flex-col justify-center p-5 gap-3  rounded-md border border-[#d3d3d3]/90  hover:scale-105 '>
                    <div className='flex justify-center '>
                      <RiVipDiamondLine className='text-[#202192]' size={50}/>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-center'>Standard</h1>
                    </div>
                    
                    <div className='flex justify-center gap-5 max-sm:gap-1'>
                        <div className='text-3xl font-bold'>THB 499</div>
                        <div className='text-[#d3d3d3]'>/ month</div>
                    </div>
                    <div className='text-[#d3d3d3] text-sm text-center'>
                      This is recommended for small business
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <FaCheck className='text-[#39db4a]'size={25}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>manage people</h1>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center '>
                        <div>
                            <MdClose className='text-[#ff0000]' size={30}/>
                        </div>
                        <div>
                            <h1 className='text-lg  text-center'>recommended</h1>
                        </div>
                    </div>
                    <button className='border border-[#202192] text-[#202192] px-4 py-2 rounded-md w-full hover:text-white hover:bg-[#202192]'>Choose</button>

                    
              </div>
           </div>
         </div>
           </div>
      </div>
   </>
  )
}

export default page