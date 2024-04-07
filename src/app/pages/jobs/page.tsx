'use client'

import Navbar from "@/app/components/Navbar";
import JobComponent from "@/app/components/JobComponent";

export default function Jobs(/*{props}:amy */){

    const MockData = [ // ข้อมูลต้องปรับตามฐานข้อมูลจริง
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:1
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:2
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:3
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:4
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:5
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            type: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:6
        }
    ]

    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <div className="w-[90%] mt-[100px] flex flex-col">
                <p className="text-3xl font-bold">บอร์ดประกาศหางาน</p>
                <div className="flex flex-col"> {/* Filter */}
                    <div></div> {/* หมวด/ประเภทงาน */}
                    <div></div> {/* ราคา/ปุ่มค้นหา */}
                </div>
                <div className="grid mx-auto grid-cols-2 gap-24 my-8"> {/* ชุดผลลัพธ์ */}
                    {MockData.map((props: any)=>
                    <JobComponent props={props}/>)}
                </div>
            </div>
        </main>
    )
}