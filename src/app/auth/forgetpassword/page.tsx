"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

type Props = {}

const page = (props: Props) => {
    const  router = useRouter()
    const [email, setEmail] = React.useState('')
    const handleClick = async (e: any) => {
        e.preventDefault()
        console.log('test')
        const formData = new FormData();
        formData.append("email", email);
        try{
          const response = await axios.post("/api/password/email", formData)
          console.log(response);
        }
        catch(error)  { // must be with error handling, doesnt work
          console.log("An Error occurred");
          return;
        }

        router.push("/auth/verify") // Push to verify
    }
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[640px] flex flex-col gap-6 p-3'>
          
          
           <form onSubmit={handleClick} className='justify-center flex flex-col gap-3'>
           <h1 className='text-3xl text-[#202192] text-center'>Forgetpassword</h1>
           <div >
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="email@email.com"  />
            </div>
            <button className='border-[#202192]  bg-[#202192] border-2 text-white py-2 rounded-md' type='submit'>ยืนยัน</button>
           </form>
           
        </div>
    </div>
    </>
  )
}

export default page