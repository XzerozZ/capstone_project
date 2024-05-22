"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Logo from '@/components/logo'
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Dropdown } from 'flowbite-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Loader } from 'rsuite';


 const NewNav = () => {

    const [showLogin, setShowLogin] = useState(false)
    const [isCompany, setIsCompany] = useState(true)
    const {data:session,status} = useSession()

    useEffect(() => {
        if (session) {
            if (session.user.role === 'company') {
                setIsCompany(true)
               
            } else {
                setIsCompany(false)
               
            }
            
        }
    }, [session])


    if (session === null || session === undefined ) {
     
    return (
     <>
    <div className='bg-[#202192] w-full '>
            <div className='flex justify-center '>
                <div className='w-[1140px] flex flex-row gap-3 my-auto justify-between '>
                <div className='flex flex-row gap-10 max-sm:gap-2'>
                    <Link href='/'><Logo /></Link>   
                </div>
                
                    <div className='my-auto flex gap-5 p-1'>
                  <Link href='/auth/signup'>  <button className='text-white px-5 py-2 '>Sign up</button></Link>
                  <Link href='/auth/signin'> <button className='bg-[white] text-black rounded-lg px-5 py-2 b-[#202192]' >Sign in</button>
                </Link>
                </div> 
                </div>          
            </div>
    </div>
    </>
)}
else {
    if (isCompany) {
        return (
          <div className='bg-[#202192] w-full '>
          <div className='flex justify-center '>
              <div className='w-[1140px] flex flex-row gap-3 my-auto justify-between'>
              <div className='flex flex-row gap-10'>
                  <Link href='/'><Logo /></Link>
                
                      <ul className='text-2xl text-white my-auto'>
                        <li ><Link href="/pages/jobs" className='hover:text-white no-underline text-white hover:no-underline'>Job</Link></li>
                      </ul>
                   
              </div>
            
              <div className='flex flex-row gap-10 my-auto'>
              <Link href='/pages/bookmark'><FaRegHeart size={30} className='text-white'/></Link>
             
              <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><FaUser className='w-[30px] h-[30px] text-white'/></span>}>
                <Dropdown.Item><Link href="/pages/profile" className='hover:text-[#202192] no-underline text-black hover:no-underline'>Profile</Link></Dropdown.Item>
                
                   <Dropdown.Item><Link href="/pages/manage" className='hover:text-[#202192] no-underline text-black hover:no-underline'>Company</Link></Dropdown.Item> 
                
                
                <Dropdown.Item><Link href="/pages/history" className='hover:text-[#202192] no-underline text-black hover:no-underline'>History</Link></Dropdown.Item>
                <Dropdown.Item><Link href="/pages/bookmark" className='hover:text-[#202192] no-underline text-black hover:no-underline'>Bookmark</Link></Dropdown.Item>
        
                <Dropdown.Item onClick={() => signOut({callbackUrl:'/auth/signin'})} className='hover:text-[#202192]'>Sign out</Dropdown.Item>
              </Dropdown>
              
        
          </div> 
        
              
            
              
            
              </div>
              
          </div>
        </div>
        )
    }
    else {
      return (
        <div className='bg-[#202192] w-full '>
        <div className='flex justify-center '>
            <div className='w-[1140px] flex flex-row gap-3 my-auto justify-between'>
            <div className='flex flex-row gap-10'>
                <Link href='/'><Logo /></Link>
              
                    <ul className='text-2xl text-white my-auto'>
                      <li ><Link href="/pages/jobs" className='hover:text-white no-underline text-white hover:no-underline'>Job</Link></li>
                    </ul>
                 
            </div>
          
            <div className='flex flex-row gap-10 my-auto'>
            <Link href='/pages/bookmark'><FaRegHeart size={30} className='text-white'/></Link>
           
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><FaUser className='w-[30px] h-[30px] text-white'/></span>}>
              <Dropdown.Item><Link href="/pages/profile" className='hover:text-[#202192] no-underline text-black hover:no-underline'>Profile</Link></Dropdown.Item>
              
              
              
              
              <Dropdown.Item><Link href="/pages/history" className='hover:text-[#202192] no-underline text-black hover:no-underline'>History</Link></Dropdown.Item>
              <Dropdown.Item><Link href="/pages/bookmark" className='hover:text-[#202192] no-underline text-black hover:no-underline'>Bookmark</Link></Dropdown.Item>
      
              <Dropdown.Item onClick={() => signOut({callbackUrl:'/auth/signin'})} className='hover:text-[#202192]'>Sign out</Dropdown.Item>
            </Dropdown>
            
      
        </div> 
      
            
          
            
          
            </div>
            
        </div>
      </div>
      )
    }
}
}
export default NewNav