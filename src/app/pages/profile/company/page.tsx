'use client' // Lazy copy of current freelancer profile

import { useState } from "react"
import Navbar from "@/app/components/Navbar"
import { UserInterface } from "@/app/interface/interface"

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
            <Navbar/>
            <div className="flex items-center justify-center flex-wrap flex-col mt-[100px]"> {/* Margin top ให้ component เด้งลงมา */}
                <form className="flex w-[70%] flex-wrap flex-col">
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Your Profile text, image */}
                        <h1 className="text-4xl">Your Profile</h1>
                        <input type="file" name="image" accept="image/*" className="bg-gray-300 rounded-full"/> {/* Image input; ไม่เสร็จ */}
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Name / Lastname box */}
                        <div className="flex flex-col w-[40%]"> {/* Name box */}
                            <label className="text-[1rem]">Name</label>
                            <input type="text" name="name" id="name" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* Lastame box */}
                            <label className="text-[1rem]">Last name</label>
                            <input type="text" name="lastname" id="lastname" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Display name(Username) / Tel. number */}
                        <div className="flex flex-col w-[40%]"> {/* Display name(Username) box */}
                            <label className="text-[1rem]">Display name</label>
                            <input type="text" name="username" id="username" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* Tel. number box */}
                            <label className="text-[1rem]">Tel. </label>
                            <input type="number" name="phone_number" id="phone_number" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                    </div>

                    <hr className="border-black my-10"/>

                    <div className="flex my-[2.5vh] h-[8vh]"> {/* Company Details text */}
                        <h1 className="text-4xl">More details</h1>
                    </div>
                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* ชื่อบริษัท */}
                        <div className="flex flex-col w-[40%]"> {/* ชื่อบริษัท */}
                            <label className="text-[1rem]">ชื่อบริษัท</label>
                            <input type="text" name="company_name"  id="company_name" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required />
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* ชื่อบริษัท */}
                            <label className="text-[1rem]">เลขผู้เสียภาษี</label>
                            <input type="text" name="tax_payer"  id="tay_payer" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required />
                        </div>
                    </div>

                    <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* ธนาคาร / เลขบัญชีธนาคาร */}
                        <div className="flex flex-col w-[40%]"> {/* ธนาคาร */}
                            <label className="text-[1rem]">ธนาคาร</label>
                            <input type="text" name="bank" id="bank" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                        <div className="flex flex-col w-[40%]"> {/* เลขบัญชีธนาคาร */}
                            <label className="text-[1rem]">เลขบัญชีธนาคาร</label>
                            <input type="number" name="bank_number" id="bank_number" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="flex my-[2.5vh] h-[8vh]"> {/* ลิงก์บริษัท */}
                        <div className="flex flex-col"> {/* ลิงก์บริษัท */}
                            <label className="text-[1rem]">ลิงก์บริษัท</label>
                            <input type="url" name="company_links" id="company_links" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="flex my-[2.5vh] h-[8vh]"> {/* เอกสารยืนยัน */}
                        <div className="flex flex-col w-[40%]">
                            <label className="text-[1rem]">เอกสารยืนยัน</label>
                            <input type="file" name="id_card_copy" id="id_card_copy" onChange={onChange} required/>
                        </div>
                    </div>

                    <hr className="border-black my-10"/>

                    <div className="flex flex-col my-[2.5vh]"> {/* ที่อยู่ */}
                        <h1 className="text-4xl mb-3">ที่อยู่</h1>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* บ้านเลขที่/หมู่ / ซอย */}
                            <div className="flex flex-col w-[40%]"> {/* บ้านเลขที่/หมู่ */}
                                <label className="text-[1rem]">บ้านเลขที่/หมู่</label>
                                <input type="text" name="address_number" id="address_number" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>

                            <div className="flex flex-col w-[40%]"> {/* ซอย */}
                                <label className="text-[1rem]">ซอย </label>
                                <input type="text" name="alley" id="alley" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange}/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* แยก / ถนน */}
                            <div className="flex flex-col w-[40%]"> {/* แยก */}
                                <label className="text-[1rem]">แยก</label>
                                <input type="text" name="lane" id="lane" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange}/>
                            </div>

                            <div className="flex flex-col w-[40%]"> {/* ถนน */}
                                <label className="text-[1rem]">ถนน </label>
                                <input type="text" name="road" id="road" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* แขวง/อำเภอ / เขต/ตำบล */}
                            <div className="flex flex-col w-[40%]"> {/* แขวง/อำเภอ */}
                                <label className="text-[1rem]">แขวง/อำเภอ</label>
                                <input type="text" name="khwaeng" id="khwaeng" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>

                            <div className="flex flex-col w-[40%]"> {/* เขต/ตำบล */}
                                <label className="text-[1rem]">เขต/ตำบล</label>
                                <input type="text" name="district" id="district" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* จังหวัด / รหัสไปรษณีย์ */}
                            <div className="flex flex-col w-[40%]"> {/* จังหวัด */}
                                <label className="text-[1rem]">จังหวัด</label>
                                <input type="text" name="province" id="province" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>
                            <div className="flex flex-col w-[40%]"> {/* รหัสไปรษณีย์ */}
                                <label className="text-[1rem]">รหัสไปรษณีย์</label>
                                <input type="text" name="mail_address" id="mail_address" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md" onChange={onChange} required/>
                            </div>
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
