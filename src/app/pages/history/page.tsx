import HistoryCard from '@/app/components/HistoryCard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const MockData = [ // ข้อมูลต้องปรับตามฐานข้อมูลจริง
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["Webdev", "QA", "Comm"],
        type: "freelance",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:1,
        work_status: "done"
    },
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["Webdev", "QA", "Comm"],
        type: "freelance",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:2,
        work_status: "done"
    },
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["Comm"],
        type: "freelance",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:3,
        work_status: "done"
    },
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["Webdev", "QA", "Hardware", "System Admin"],
        type: "Full-Time",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:4,
        work_status: "done"

    },
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["QA"],
        type: "Full-Time",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:5,
        work_status: "done"
    },
    {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        rating:"4.5",
        categories: ["Webdev", "QA", "Comm"],
        type: "Full-Time",
        budget: "2000",
        posted_date: "12/12/2566",
        status: "hiring",
        id:6,
        work_status: "done"
    }
]

  return (
    <>
       <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
            <h1 className='text-3xl text-[#202192] font-bold'>ประวัติการทำงาน</h1>
            <div className="flex flex-col gap-1">
                                <label>รูปแบบของงาน</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Full-time</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Freelance</button>
                                </div>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    MockData.map((props: any)=>  <HistoryCard props={props}/>)
                }
            </div>
            
        </div>
        </div>
    </>
)
}
export default page