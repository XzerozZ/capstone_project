'use client'

import { useState } from "react"
import Navbar from "@/app/components/Navbar"


export default function Profile(){
    /*
    const information: UserInterface = {

    }*/
    const onChange = (evt: any) => {
        const key = evt.target.name;
        const value = evt.target.value; /*
        setRegData((oldData) => 
        ({...oldData, [key]: value})); // เปลี่ยนข้อมูลใหม่ที่กรอกลงแบบฟอร์ม */
    }

    return(
        <>
           
            <div className="flex items-center justify-center flex-wrap flex-col mt-[100px]"> {/* Margin top ให้ component เด้งลงมา */}
                <form className="flex w-[70%] flex-wrap flex-col">
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Your Profile text, image */}
                        <h1 className="text-4xl">Your Profile</h1>
                        <input type="file" name="image" accept="image/*" className="bg-gray-300 rounded-full"/> {/* Image input; ไม่เสร็จ */}
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Name / Lastname box */}
                        <div className="flex flex-col w-[40%]"> {/* Name box */}
                            <label className="text-[1rem]">Name</label>
                            <input type="text" name="name" id="name" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* Lastame box */}
                            <label className="text-[1rem]">Last name</label>
                            <input type="text" name="lastname" id="lastname" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Display name(Username) / Tel. number */}
                        <div className="flex flex-col w-[40%]"> {/* Display name(Username) box */}
                            <label className="text-[1rem]">Display name</label>
                            <input type="text" name="username" id="username" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* Email box */}
                            <label className="text-[1rem]">Tel. </label>
                            <input type="number" name="phone_number" id="phone_number" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                    </div>

                    <hr className="border-black my-10"/>

                    <div className="flexmy-[2.5vh] h-[8vh]"> {/* Resume text */}
                        <h1 className="text-4xl">Resume</h1>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* ประเภทของฟรีแรนซ์ / ความถนัด */}
                        <div className="flex flex-col w-[40%]"> {/* ประเภทของฟรีแรนซ์ */}
                            <label className="text-[1rem]">ประเภทของฟรีแรนซ์</label>
                            <input type="text" name="freelance_type" id="freelance_type" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* ความถนัด */}
                            <label className="text-[1rem]">ความถนัด</label>
                            <input type="text" name="skills" id="skills" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Email / ประสบการณ์ในการทำงาน และขอบเขตงานที่สามารถทำได้ */}
                        <div className="flex flex-col w-[40%]"> {/* Email box */}
                            <label className="text-[1rem]">อีเมลที่ติดต่อได้</label>
                            <input type="email" name="email" id="email" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* ประสบการณ์ในการทำงาน และขอบเขตงานที่สามารถทำได้ */}
                            <label className="text-[1rem]">ประสบการณ์ในการทำงาน และขอบเขตงานที่สามารถทำได้</label>
                            <input type="text" name="work_exp" id="work_exp" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange}/>
                        </div>
                    </div>
                    <div className="flex my-[2.5vh] h-[8vh]"> {/* ลิงก์เว็บไซต์รวบรวมผลงานหรือวีดีโอแนะนำตัว (ถ้ามี) */}
                        <div className="flex flex-col w-[40%]"> {/* ลิงก์เว็บไซต์รวบรวมผลงานหรือวีดีโอแนะนำตัว (ถ้ามี) */}
                            <label className="text-[1rem]">ลิงก์เว็บไซต์รวบรวมผลงานหรือวีดีโอแนะนำตัว (ถ้ามี)</label>
                            <input type="url" name="contact_links" id="contact_links" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange}/>
                        </div>
                    </div>

                    <hr className="border-black my-10"/>

                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* เลขบัตรประชาชน / ธนาคาร */}
                        <div className="flex flex-col w-[40%]"> {/* เลขบัตรประชาชน */}
                            <label className="text-[1rem]">เลขบัตรประชาชน</label>
                            <input type="number" name="id_card" id="id_card" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* ธนาคาร */}
                            <label className="text-[1rem]">ธนาคาร</label>
                            <input type="text" name="bank" id="bank" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* ชื่อ - นามสกุลตามบัตรประชาชน (ภาษาไทย) / เลขบัญชีธนาคาร */}
                        <div className="flex flex-col w-[40%]"> {/* ชื่อ - นามสกุลตามบัตรประชาชน (ภาษาไทย) */}
                            <label className="text-[1rem]">ชื่อ - นามสกุลตามบัตรประชาชน (ภาษาไทย)</label>
                            <input type="text" name="id_card_name" id="id_card_name" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* เลขบัญชีธนาคาร */}
                            <label className="text-[1rem]">เลขบัญชีธนาคาร</label>
                            <input type="number" name="bank_number" id="bank_number" className="border-solid border-[#E2E1E5] border-2 h-full rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[12vh]"> {/* สำเนาบัตรประชาชน / ภาพสมุดบัญชีหน้าแรกที่มีชื่อบัญชีตรงกับบัตรประชาชน */}
                        <div className="flex flex-col w-[40%]"> {/* สำเนาบัตรประชาชน */}
                            <label className="text-[1rem]">สำเนาบัตรประชาชน</label>
                            <input type="file" name="id_card_copy" id="id_card_copy" onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* ภาพสมุดบัญชีหน้าแรกที่มีชื่อบัญชีตรงกับบัตรประชาชน */}
                            <label className="text-[1rem]">ภาพสมุดบัญชีหน้าแรกที่มีชื่อบัญชีตรงกับบัตรประชาชน</label>
                            <input type="file" name="bank_acc_img" id="bank_acc_img" onChange={onChange} required/>
                        </div>
                    </div>

                    <div className="my-[10vh] flex flex-row-reverse"> {/*  ปุ่ม Submit */}
                        <button className="bg-[#D9D9D9] text-black rounded-xl">Submit</button>
                    </div>

                    {/* Footer */}

                </form>
            </div>
        </>
    );
}