'use client'

import Navbar from "@/app/components/Navbar"
import { useState } from "react";
import { useRouter } from "next/router";


const MockData = {
    job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
    image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
    description:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem",
    type: "freelance",
    categories: ["WebDev", "QA Testing", "Communication"], 
    posted_date:"12/12/2566",
    status: "hiring"
};

/* {job="รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
description="Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem",
type= ["WebDev", "QA Testing", "Communication"], 
posted_date="12/12/2566",
status= "hiring"}: any) */


export default function JobDetails({props}: any){ // หน้าย่อยออกมาของข้อมูลงาน
    const  [showDesc, setShowDesc] = useState(false)

    const toggleShowDesc = () => {
        setShowDesc(!showDesc);
    }

    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <div className="w-[90%] mt-[100px] flex flex-col">
                <div className="ml-[5%] mb-[4%]"></div> {/* Path bar */}
                <div className="ml-[5%] flex flex-col"> {/* Info box */}
                    <p className="text-3xl font-bold">{MockData.job}</p> {/* ชื่องาน */}
                    <div className="flex justify-evenly my-[4%]"> {/* ถ้าไม่ใส่ภาพตรงนี้อาจจะเป็น justify-between */}
                        <div className="flex flex-col w-[30%] space-y-20">
                            <p className="text-2xl">ประเภท:</p>
                            <div className="flex flex-wrap mt-10">
                                {MockData.categories.map((category: any) =>
                                    <p className="text-lg">{category}</p> 
                                )}  {/* Category text */}
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <img src={MockData.image} alt="No picture Found"/> {/* ใส่รูปงาน / บริษัทมั้ย */}
                        </div>
                        <div className="flex flex-col w-[30%] items-end space-y-20">
                            <div className="flex flex-col">
                                <p className="text-2xl">วันที่โพสต์:</p>
                                <p className="text-xl">{MockData.posted_date}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-2xl">สถานะ:</p>
                                { MockData.status==="hiring" ? // เปิดรับ
                                    <p className="text-xl text-[#04B500]">เปิดรับ</p> // ถ้างานเปิดรับ
                                :
                                    <p className="text-xl text-[#919191]">ไม่เปิดรับ</p> // ถ้างานไม่เปิดรับ
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-[5%] flex flex-wrap w-[80%] my-[4%]"> {/* Details/ Description */}
                    <p className="text-2xl font-bold">รายละเอียด</p>
                    {!showDesc ? 
                        <div className="flex justify-between" onClick={toggleShowDesc}>
                            <p>ขยายรายละเอียด</p>
                            <p className="font-bold">V</p>
                        </div>
                    : 
                        <div className="flex flex-col ml-16 mt-10">
                            <p>{MockData.description}</p>
                            <div className="flex justify-between self-end" onClick={toggleShowDesc}>
                                <p>ลดรายละเอียด</p>
                                <p className="font-bold">Λ</p>
                            </div>
                        </div>
                    }
                </div> 
                <div className="mx-auto">   {/* Status button */}
                    {MockData.status === "hiring" ? 
                        <button className="bg-[#04BE00] font-bold text-xl unfinished">ติดต่อสมัครงาน</button> // ถ้างานเปิดรับกดได้เด้่งไปหน้าสเตตัสไม่ก็หน้าอื่น
                    :
                        <button className="bg-[#919191] font-bold text-xl unfinished">ติดต่อสมัครงาน</button> // ถ้างานไม่เปิดรับกดไปไม่มีอะไรเกิดขึ้น
                    }
                </div> 
            </div>
        </main>
    )
}