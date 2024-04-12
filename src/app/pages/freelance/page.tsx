'use client'

import Navbar from "@/app/components/Navbar";
import { useState } from "react";

// หน้าสำหรับบริษัท แสดงรายชื่อผู้สมัคร

export default function Freelance(){

    const MockData : any /* ใส่ any มาปิดเด้ง้เตือน ts7053 */ ={
        "1":{"title": "รับพัฒนาเว็บไซต์ e-commerce",
            "work_id": "1",
            "applicant":[
                {user_id:1, image:"https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg", username:"JaneYu", ratings:4.5},
                {user_id:2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDohX4qAelLzi3t8vCfqccDFxifY-huxkmRrgnSRoig&s", username:"SupharatBoon", ratings:4.1},
                {user_id:3, image:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360", username:"ParisianLover", ratings:3.9},
                {user_id:4, image:"https://www.freelancinggig.com/blog/wp-content/uploads/2021/01/freelancer-profile-tips.jpg", username:"AssemblyHere", ratings:4.6},
                {user_id:5, image:"https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-casual-brunette-3-512.png", username:"BananaBoat", ratings:4.2},
                {user_id:6, image:"https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg", username:"asdfweraSsawR", ratings:1.0},
                {user_id:7, image:"https://i.insider.com/627adde5dd983300191c844d?width=700", username:"KonVises", ratings:4.6},
                {user_id:8, image:"https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg", username:"JaneYu", ratings:4.5},
                {user_id:9, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDohX4qAelLzi3t8vCfqccDFxifY-huxkmRrgnSRoig&s", username:"SupharatBoon", ratings:4.1},
                {user_id:10, image:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360", username:"ParisianLover", ratings:3.9},
                {user_id:11, image:"https://www.freelancinggig.com/blog/wp-content/uploads/2021/01/freelancer-profile-tips.jpg", username:"AssemblyHere", ratings:4.6},
                {user_id:12, image:"https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-casual-brunette-3-512.png", username:"BananaBoat", ratings:4.2},
                {user_id:13, image:"https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg", username:"asdfweraSsawR", ratings:1.0},
                {user_id:14, image:"https://i.insider.com/627adde5dd983300191c844d?width=700", username:"KonVises", ratings:4.6}
            ]},
        "2":{"title": "รับฟรีแลนซพัฒนาเว็บไซต์สำหรับลงบล็อกด้วย React, Next.js",
            "work_id": "2",
            "applicant":[
                {user_id:1, image:"https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg", username:"JaneYu", ratings:4.5},
                {user_id:2, image:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360", username:"ParisianLover", ratings:3.9},
                {user_id:3, image:"https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-casual-brunette-3-512.png", username:"BananaBoat", ratings:4.2}]
            },
        "3":{"title": "ออกแบบ UI, เขียนเพจด้วย HTML, CSS หรือ Tailwind",
            "work_id": "3",
            "applicant":[
                {user_id:1, image:"https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg", username:"JaneYu", ratings:4.5},
                {user_id:2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDohX4qAelLzi3t8vCfqccDFxifY-huxkmRrgnSRoig&s", username:"SupharatBoon", ratings:4.1},
                {user_id:3, image:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360", username:"ParisianLover", ratings:3.9},
                {user_id:4, image:"https://www.freelancinggig.com/blog/wp-content/uploads/2021/01/freelancer-profile-tips.jpg", username:"AssemblyHere", ratings:4.6}]
            }
    }


    const [type, setType] = useState("Freelance"); // สับระหว่างงานฟรีแรนซ์กับงานประจำ
    const [curWorkID, setCurWorkID] = useState("0");

    const setFreelance = () => {
        setType("Freelance")
    }

    const setFullTime = () => {
        setType("Full-Time")
    }

    const search = () => {
        // ปุ่มค้นหาตามหมวดที่เลือก
    }

    const workClick = (evt: any) => {
        setCurWorkID(evt.target.id);
    }

    

    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <div className="w-[100%] mt-[68px] flex flex-col"> {/* Padding top ตามความสูง Navbar */}
                <div className="flex border-solid border-black border-2">
                    <div className="grid overflow-x-auto grid-flow-col auto-cols-auto gap-[5rem] w-[80%]">
                        {/* หมวดงานทั้งหมด */}
                    </div>
                    <div className="flex flex-col items-center w-[20%]">
                        { type === "Freelance" ?
                            <button type="button" className="w-[70%] rounded-lg border-solid border-black border-2 my-6" onClick={setFullTime}>
                                <div className="w-[50%] bg-[#D6CFFF] rounded-l-lg">ฟรีแลนซ์</div>
                            </button>
                        :
                            <button type="button" className="w-[70%] rounded-lg border-solid border-black border-2 flex my-6" onClick={setFreelance}>
                                <div className="w-[50%] bg-[#99F3FF] ml-auto mr-0 rounded-r-lg">งานประจำ</div>
                            </button>
                        }
                        <button type="button" className="w-[50%] rounded-lg bg-[#98AFFF] my-2" onClick={search}>ค้นหา</button>
                    </div>
                </div>
                <div className="flex h-[712px]">
                <div className="w-[25%] border-solid border-black border-x-2 border-b-2 flex flex-col overflow-y-auto">
                    <div className="grid grid-cols-1">
                        {Object.values(MockData).map((object: any)=>
                            <button className="w-full py-1 border-solid border-black border-b-2"> {/* อาจมี Bug */}
                                <p onClick={workClick} id={object["work_id"]}>{object["title"]}</p> {/* onClick กับ id ใส่ตรงนี้เพราะใส่ตรง Button พอกดไปสักพักบัค */}
                            </button>
                        )}
                    </div>
                </div>
                    <div className="w-[75%] flex flex-col ml-10">
                        <div className="w-full flex pr-4 my-5">
                            {
                            curWorkID !== "0" ?
                                <>
                                    <p className="font-bold text-3xl mr-auto">{MockData[curWorkID]["title"]}</p> {/* ts7053 */}
                                    <p className="text-gray-400 mx-3 text-xl">แก้ไขข้อมูลงาน</p>
                                    <p className="text-red-600 mx-3 text-xl">ลบงาน</p>
                                </>
                            :
                                <></>
                            }
                            
                        </div>
                        <div className="w-full flex flex-col overflow-y-auto ">
                            <div className="grid grid-cols-3 gap-4 h-full overflow-y-scroll"> {/* AI-generated/ รายชื่อผู้สมัคร */}
                                {
                                    curWorkID !== "0" ?
                                    <>
                                        {MockData[curWorkID]["applicant"].map((applicant: any) => // ts(7053) แต่รันได้
                                        <div className="flex flex-col w-[75%] bg-gray-200 px-4 pt-10 m-10" id={applicant.user_id}>
                                            <div className="mx-auto">
                                                <img src={applicant.image} alt="Profile Image" className="h-28"/>
                                            </div>
                                            <div className="flex justify-between my-10">
                                                <p>{applicant.username}</p>
                                                <div className="flex">
                                                    <img src="" alt="Ratings:" className="mr-4"/> {/* Star icon */}
                                                    <p>{applicant.ratings}</p>
                                                </div>
                                            </div>
                                            <div className="text-end my-5">
                                                <a href={'/profile/${applicant.user_id}'}>ดูรายละเอียดฟรีแลนซ์</a> {/* ดูรายละเอียดฟรีแลนซ์ */}
                                            </div>
                                        </div>
                                        )}
                                    </>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}