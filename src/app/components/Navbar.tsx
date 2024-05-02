'use client'

import Link from "next/link"
import Image from "next/image"
import MockLogo from "@/app/favicon.ico"
import React, { useState } from "react"
import { signIn } from 'next-auth/react'



export default function Navbar(){
    const [logIn, setLogIn] = useState(false);
    // Overlay State
    
    const [showOverlay, setShowOverlay] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleShowOverlay = () => {
        setShowOverlay(true)
    }
    
      const handleHideOverlay = () => {
        setShowOverlay(false)
    }
      
    const handleSubmit = (e: any) => {
        e.preventDefault()
        signIn('credentials', { username, password })
    }
    
    // End of overlay state


    const toggleLogin = () =>{
        setLogIn(!logIn);
        setShowOverlay(!showOverlay);
    }
    return(
        <div className="overflow-hidden bg-[#6400A1] fixed w-full top-0 z-10"> {/* ไม่ Responsive, ตวามกว้างจอน้อยกว่า 768 px = เละ */}
            <div className="flex justify-between px-0 py-1">
                <div className="gap-[15px] fixed pt-[70px] pb-5 px-5 inset-0 md:flex md:static md:p-0">
                    <Link href="/">
                        <Image 
                            src={MockLogo}
                            width={60}
                            height={7.5}
                            alt=""
                        />
                    </Link>
                    <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/">Find freelancers</Link>
                    <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/pages/jobs">Find jobs</Link>
                    <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/pages/profile/company">Post a job</Link>
                </div>
                <div className="gap-[15px] fixed pt-[70px] pb-5 px-5 inset-0 md:flex md:static md:p-0">
                    <Link href="/">
                        <Image 
                            src={MockLogo}
                            width={60}
                            height={7.5}
                            alt=""
                        />
                    </Link>
                    <Link href="/pages/status/freelancer">
                        <Image 
                            src={MockLogo}
                            width={60}
                            height={7.5}
                            alt=""
                            className="mix-blend-multiply"
                        />
                    </Link>
                    {!logIn ? 
                        <div className="flex">
                            <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/pages/register">Sign up</Link>
                            <button className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" onClick={toggleLogin}>Log in</button>
                        </div> 
                    : 
                        <div className="flex">
                            <Link href="/pages/profile/freelancer">
                                <Image 
                                    src={MockLogo}
                                    width={60}
                                    height={7.5}
                                    alt=""
                                />
                            </Link>
                            <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[17px] px-4 py-3.5" href="/" onClick={toggleLogin}>Sign out</Link>
                        </div>}
                </div>
            </div>
            {/* (Login) Overlay Component / AI-Generated */}
            {showOverlay && (
                <div className="fixed inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="block w-full p-2 border border-gray-300 rounded" />
                        </label>
                        <label className="block mb-2">
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full p-2 border border-gray-300 rounded" />
                        </label>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
                        <button type="button" onClick={handleHideOverlay} className="bg-gray-300 text-gray-800 py-2 px-4 rounded ml-2">Cancel</button>
                    </form>
                    <Link href="/pages/register">Sign up</Link>
                    <button onClick={() => signIn('google')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Login with Google</button>
                    </div>
                </div>
            )}

            {/* End of Overlay Component */}
        </div>
    )
}
