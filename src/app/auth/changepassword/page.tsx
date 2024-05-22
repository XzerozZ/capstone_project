"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'

type Props = {}

const page = (props: Props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const Router = useRouter()


    const handleSubmit = (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password)
        axios.post('/api/password/forgetpass', formData).then((res) => {
            console.log(res)
         
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Please check your email to reset your password',
            })
            Router.push('/auth/signin')
          

        })
        
    }
    localStorage.getItem('verifyOTP');
    if (localStorage.getItem('verifyOTP') === 'not verify') {
      Router.push('/auth/signin')
    }
    
    else if (localStorage.getItem('verifyOTP') === 'verify') {

   
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[640px] flex flex-col gap-6 p-3'>
          <form onSubmit={handleSubmit}>
          <div className='justify-center flex flex-col gap-3'>
           <h1 className='text-3xl text-[#202192] text-center'>Changepassword</h1>
           <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="email@email.com"  />
            </div>
            <div>
                   
                    <input 
                    type="password" 
                    id="password" 
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="input your new password"  />
            </div>
            <button type='submit' className='border-[#202192]  bg-[#202192] border-2 text-white py-2 rounded-md'>ยืนยัน</button>
           </div>
          </form>
        </div>
    </div>
    </>
  )
}}

export default page