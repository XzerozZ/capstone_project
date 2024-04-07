'use client'

import Link from "next/link"
import Image from "next/image"
import MockLogo from "@/app/favicon.ico"
import React, { useState } from "react"

export default function Navbar(){
    const [logIn, setLogIn] = useState(false);

    const toggleLogin = () =>{
        setLogIn(!logIn);
    }
    return(
        <div className="overflow-hidden bg-[#6400A1] fixed w-full top-0"> {/* ไม่ Responsive, ตวามกว้างจอน้อยกว่า 768 px = เละ */}
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
                    <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/">Find jobs</Link>
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
                            <Link className="float-left block text-[#f2f2f2] text-center no-underline text-[12px] md:text-[17px] px-4 py-3.5" href="/" onClick={toggleLogin}>Log in</Link>
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
        </div>
    )
}
