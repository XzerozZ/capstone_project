"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import Logo from '@/components/logo'
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


 const NewNav = () => {

    const [showLogin, setShowLogin] = useState(true)
    return (
     <>
    <div className='bg-[#202192] w-full '>
            <div className='flex justify-center '>
                <div className='w-[1140px] flex flex-row gap-3 my-auto justify-between'>
                <div className='flex flex-row gap-10'>
                    <Logo />
                    {
                        showLogin ? <ul>
                            
                        </ul> : 
                        <ul className='text-xl text-white my-auto'>
                          <li >Job</li>
                        </ul>
                    } 
                </div>
                {
                    showLogin ? 
                    <div className='my-auto flex gap-5 p-1'>
                    <button className='text-white'>Sign up</button>
                    <button className='bg-[white] text-black rounded-lg px-5 py-2 b-[#202192]'>Sign in</button>
                </div> : 
                <div className='flex flex-row gap-10 my-auto'>
                <FaRegHeart size={30} className='text-white'/>
                <FaUser size={30} className='text-white'/>

            </div> 

                }
              
                
              
                </div>
                
            </div>
    </div>
    </>
)}
export default NewNav