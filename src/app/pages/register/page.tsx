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
                <div className="flex items-center justify-center flex-wrap flex-col mt-[100px]">
                    <h1 className="text-5xl font-bold">Welcome to</h1>
                    <form className="flex w-[50%] flex-wrap flex-col" onSubmit={onSubmit}>
                        <div className="flex justify-between my-[2.5vh] h-[7vh]">
                            <div className="flex flex-col w-[40%]">
                                <label>Name</label>
                                <input type="text" name="name" 
                                    id="name" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[40%]">
                                <label>Last name</label>
                                <input type="text" name="lastname" 
                                    id="lastname" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[7vh]">
                            <div className="flex flex-col w-[40%]">
                                <label>Display name</label>
                                <input type="text" name="username" 
                                    id="username" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[40%]">
                                <label>Email</label>
                                <input type="email" name="email" 
                                    id="email" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[7vh]">
                            <div className="w-full flex flex-col">
                                <label>Password</label>
                                <input type="password" name="password" 
                                    id="password" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between my-[2.5vh] h-[7vh]">
                            <div className="w-full flex flex-col">
                                <label>Confirmed password</label>
                                <input type="password" name="confirmedPassword" 
                                    id="confirmedPassword" 
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex mt-[2.5vh] mb-[5vh] h-[7vh]">
                            <div className="flex flex-col w-[40%]">
                                <label>Role</label>
                                <select name="role" 
                                    id="role"
                                    className="border-solid 
                                    border-[#E2E1E5] border-2 h-[100%]"
                                    onChange={onChange} 
                                    required
                                    >
                                    <option disabled hidden selected value=""> -- select a role -- </option>
                                    <option value="freelancer">Freelancer</option>
                                    <option value="company">Company</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <div className="flex my-[1vh]">
                                    <input type="checkbox"
                                        className="w-[50px]"
                                        name="agreementBox" 
                                        id="agreementBox" required/>
                                    <label>I have read agreements and policies</label>
                                </div>
                                <div className="flex my-[1vh]">
                                    <input type="checkbox"
                                        className="w-[50px]"
                                        name="agreementBox" 
                                        id="agreementBox" required/>
                                    <label>I agree to share my data information</label>
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#6400A1] text-white w-[50%] m-auto">Sign Up</button>
                    </form>
                </div>
        </div>
    );
}