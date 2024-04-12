import Navbar from "@/app/components/Navbar"
import BookmarkComponent from "@/app/components/BookmarkComponent"

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
        <main className="">
            <Navbar/>
            <div className="w-[90%] mt-[100px] flex flex-col">
                <div>
                    <p>Bookmark</p>
                    <button>งาน Freelance</button>
                    <button>งานประจำ</button>
                </div>
            </div>
            <div className="flex justify-center">   {/* Wrapper */}
                <div className="grid overflow-x-auto grid-flow-col auto-cols-auto min-h-[50vh] gap-[5rem]"> 
                    {MockData.map((prop:any)=> 
                        <BookmarkComponent props={prop}  key={prop.id}/>
                    )}
                </div>
            </div>
        </main>
    )
}