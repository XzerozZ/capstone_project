'use client'
import HistoryCard from '@/app/components/HistoryCard'
import React from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {}

const page = (props: Props) => {
    const router = useRouter()
    const {data: session, status} = useSession();
    const [history, setHistory] = React.useState([]);
    // ยังไม่เสร็จเดี๋ยวมาต่อ

    
    React.useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/signin')
        }
        const fetchData = async() =>{
            const formData = new FormData();
            const email: any = session?.user.email // ต้องใช้ any ไปก่อน
            formData.append('email', email)
            const {data: response} = await axios.post("/api/history/user", formData) // ต้องลอง Data จริง
            setHistory(response);
        }
        fetchData();
    }, [status, router])

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
                    history.length !== 0 ?
                    //MockData.map((props: any)=>  <HistoryCard props={props}/>)
                    history.map((history: any)=>  <HistoryCard props={history.job} 
                    image={"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg"}
                    />
                    )
                    :
                    <p className="font-bold text-2xl">ไม่มีงานที่คุณได้ยื่นสมัครในบัญชีนี้</p>
                }
            </div>
            
        </div>
        </div>
    </>
)
}
export default page