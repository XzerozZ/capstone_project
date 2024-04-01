'use client' // useState on client side

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Register(){

    // ใช้ useState Mock ข้อมูลที่จะเก็บไว้ แก้ไขอีกที่ตามข้อมูลจริง
    const [regData, setRegData] = useState({
        name: "",
        lastname: "",
        username: "",
        email:"",
        password: "",
        confirmedPassword: "",
        role: ""
    });

    // Function / Method แก้ไขได้
    const onChange = (evt: any) => {
        const key = evt.target.name;
        const value = evt.target.value; 
        setRegData((oldData) => 
        ({...oldData, [key]: value})); // เปลี่ยนข้อมูลใหม่ที่กรอกลงแบบฟอร์ม
    }

    // ตอนกดปุ่ม Sign up / ยืนยัน
    const onSubmit = (evt: any) => {
        evt.preventDefault();
    }


    return(
        <div>
            <Navbar/>
                <div className="flex items-center justify-center flex-wrap flex-col mt-[100px]"> {/* Margin top ให้ component เด้งลงมา */}
                    <h1 className="text-5xl font-bold">Welcome to</h1>
                    <form className="flex w-[50%] flex-wrap flex-col" onSubmit={onSubmit}> {/* Forms Box */}
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Name / Lastname box */}
                            <div className="flex flex-col w-[40%]"> {/* Name box */}
                                <label className="text-[1rem]">Name</label>
                                <input type="text" name="name" id="name" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.name} required />
                            </div>
                            <div className="flex flex-col w-[40%]"> {/* Lastame box */}
                                <label className="text-[1rem]">Last name</label>
                                <input type="text" name="lastname" id="lastname" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.lastname} required />
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Display name(Username) / Email box */}
                            <div className="flex flex-col w-[40%]"> {/* Display name(Username) box */}
                                <label className="text-[1rem]">Display name</label>
                                <input type="text" name="username" id="username" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.username} required />
                            </div>
                            <div className="flex flex-col w-[40%]"> {/* Email box */}
                                <label className="text-[1rem]">Email</label>
                                <input type="email" name="email" id="email" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.email} required />
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Password box */}
                            <div className="w-full flex flex-col">
                                <label className="text-[1rem]">Password</label>
                                <input type="password" name="password" id="password" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.password} required/>
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[8vh]"> {/* Confirmed password box */}
                            <div className="w-full flex flex-col">
                                <label className="text-[1rem]">Confirmed password</label>
                                <input type="password" name="confirmedPassword" id="confirmedPassword" className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange}value={regData.confirmedPassword} required/>
                            </div>
                        </div>
                        <div className="flex mt-[2.5vh] mb-[4vh] h-[8vh]"> {/* Role box */}
                            <div className="flex flex-col w-[40%]">
                                <label className="text-[1rem]">Role</label>
                                <select name="role" id="role"className="border-solid border-[#E2E1E5] border-2 h-[100%] rounded-md"onChange={onChange} value={regData.role} required>
                                    <option disabled hidden selected value=""> -- select a role -- </option> {/* กล่องเริ่มต้นบอกให้กรอก role */}
                                    <option value="freelancer">Freelancer</option>
                                    <option value="company">Company</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col mb-[5vh]"> {/* Agreement box, Checkbox ไม่ได้ปรับ border-radius*/}
                            <div className="flex my-[1vh]">
                                <input type="checkbox" className="w-[50px]" name="agreementBox" id="agreementBox" required />
                                <label className="text-[1rem]">I have read agreements and policies</label>
                            </div>
                            <div className="flex my-[1vh]">
                                <input type="checkbox" className="w-[50px]" name="agreementBox" id="agreementBox" required />
                                <label className="text-[1rem]">I agree to share my data information</label>
                            </div>
                        </div>
                        <button className="bg-[#6400A1] text-white w-[50%] m-auto rounded-3xl">Sign Up</button> {/* Submit / Sign up button */}
                    </form>
                </div>
        </div>
    );
}