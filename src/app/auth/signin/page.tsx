"use client";
import React from 'react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

type Props = {}

const  LoginPage = (props: Props) => {

   
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const  Router = useRouter()
   


    const handleSignIn = async (e:any) => {
      
        e.preventDefault()
        try{
            console.log(email)
            console.log(password)
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            })
            console.log(result)
            Router.push('/')
            
        }
        catch(err){
            console.log(err)
        }
    }
  return (
   <>
   <div className='flex justify-center bg-[#FAFAFA] py-[150px] max-sm:p-[75px]'>
    <div >
        <form onSubmit={handleSignIn} className='flex flex-col w-[450px] gap-5 max-sm:p-10'>
        <h1 className='text-center text-[40px]'>Sign in</h1>
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
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="password"  />
            </div>
            <div className='flex  justify-end'>
               <Link href='/auth/forgetpassword'> <h1 className='text-sm'>forget password?</h1></Link>
            </div>
            <button type="submit" className="w-full text-white bg-[#202192] hover:bg-[#202192]/90 focus:ring-3 focus:ring-[#202192]/60 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#202192]/60 dark:hover:bg-[#202192]/70 focus:outline-none dark:focus:ring-[#202192]/80">Sign in</button>

 
        </form>
    </div>
   </div>
   </>
  )
}

export default LoginPage