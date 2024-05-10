"use client"
import React from 'react'

type Props = {}

const page = (props: Props) => {

    const [Verify, setVerify] = React.useState('')
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[640px] flex flex-col gap-6 p-3'>
           <div className='justify-center flex flex-col gap-3'>
           <h1 className='text-3xl text-[#202192] text-center'>Please verify your email</h1>
            <div>
                   
                    <input 
                    type="text" 
                    id="Verify" 
                    value={Verify}
                    onChange={(e) => setVerify(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="6 digit"  />
            </div>
            <button className='border-[#202192]  bg-[#202192] border-2 text-white py-2 rounded-md'>ยืนยัน</button>
           </div>
        </div>
    </div>
    </>
  )
}

export default page