import Navbar from "@/app/components/Navbar"
import BookmarkComponent from "@/app/components/BookmarkComponent"
import CardWork from "@/app/components/CardWork"

const MockData = [ // ข้อมูลต้องปรับตามฐานข้อมูลจริง
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:1
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:2
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:3
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:4
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:5
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:6
        },
        
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:7
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:8
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:9
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:10
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:11
        },
        {job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
            image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
            rating:"4.5",
            categories: ["Webdev", "QA", "Comm"],
            budget: "2000",
            posted_date: "12/12/2566",
            status: "hiring",
            id:12
        }
    ]


export default function Bookmark(/*{props}: any*/){
    return(
        <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
           
                <div className="">
                <div className="flex flex-col gap-1">
                                <h1 className='text-[#202192] font-bold text-3xl '>Bookmark</h1>
                                <label>รูปแบบของงาน</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Full-time</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Freelance</button>
                                </div>
                           </div>
                    </div>
                    <div className="flex justify-center">   {/* Wrapper */}
                    <div className="grid mx-auto grid-cols-4 gap-7 my-8 max-sm:grid-cols-2 max-sm:p-1"> {/* ชุดผลลัพธ์ */}
                            {MockData.map((props: any)=>
                            <CardWork props={props}/>)}
                        </div>
                    </div>
           
          </div>
           
        </div>
    )
}