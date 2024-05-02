import { useState } from "react"
import MoreDetails from "./MoreDetails";


export default function WorkStatusBox({props} : any){ /* {props.role, src, props.job, details, budget, work_type, post_date, props.status} */

    const [moreDetails, setMoreDetails] = useState(false);

    const toggleMore = () => {
        setMoreDetails(!moreDetails)
    }

    return(
        <div className="flex my-10 w-full">
            { props.role === "Freelancer" ?
                <>
                <div className="mr-8"> {/* Image */}
                    <img src={props.src} alt="No image found" className="max-w-[200px] h-auto w-full "/> {/* ลอง Responsive image */}
                </div>
                <div className="flex flex-col items-start w-[90%]"> {/* รายละเอียดงาน */}
                    <p className="md:text-[1.5vw] text-[2vw]">{props.job}</p> {/* ลอง Responsive text */}
                    {!moreDetails ? 
                        <button className="md:text-[1.2vw] text-[1.7vw] mt-5 border-solid border-[1px] border-black rounded-2xl leading-7" onClick={toggleMore}>กดเพื่อดูรายละเอียดเพิ่มเติม {/* ลอง Responsive text */}
                        </button> 
                    : 
                        <div className="flex flex-col pr-5"> {/* ข้อมูลเพิ่มเติมต่าง ๆ */}
                            <MoreDetails display="รายละเอียด:" info={props.details}/>
                            <MoreDetails display="งบประมาณ:" info={props.budget} extra="บาท"/>
                            <MoreDetails display="ประเภท:" info={props.categories}/>
                            <MoreDetails display="วันที่โพสต์:" info={props.post_date}/>
                            <button className="md:text-[1.2vw] text-[1.7vw] self-end border-solid border-[1px] border-black rounded-2xl leading-7" onClick={toggleMore}>กดเพื่อลดรายละเอียด</button>
                        </div>
                    }
                </div>
                <div className="flex flex-col w-[20%]">
                    
                    {props.status === "applying" ? 
                        <>
                            <p className="md:text-[1vw] text-[1.45vw]">กำลังรอการรับงาน</p>
                        </> 
                    : props.status === "in-progress" ? 
                        <>
                            <p className="md:text-[1vw] text-[1.45vw] text-[#C8C000]">รอการส่งผลงาน</p>
                            <a href="/" className="bg-[#C8C000] border-solid border-[1px] border-black rounded-2xl"> {/* ปุ่มเข้าดูความคืบหน้า */}
                            <p className="md:text-[1vw] text-[1.45vw] text-black text-center ">ส่งงาน</p>
                            </a>
                        </> 
                    : props.status === "handed-in" ? 
                        <>
                            <p className="md:text-[1vw] text-[1.45vw] text-[#00A692]">รอการตรวจสอบผลงาน</p>
                            <a href="/" className="bg-[#00A692] border-solid border-[1px] border-black rounded-2xl"> {/* ปุ่มเข้าดูความคืบหน้า */}
                                <p className="md:text-[1vw] text-[1.45vw] text-black text-center ">ติดตามสถานะ</p>
                            </a>
                        </> 
                        : props.status === "completed" ? 
                        <>
                            <p className="md:text-[1vw] text-[1.45vw] text-[#2dc239]">เสร็จสมบูรณ์</p>
                            <a href="/" className="bg-[#2dc239] border-solid border-[1px] border-black rounded-2xl"> {/* ปุ่มเข้าดูความคืบหน้า */}
                                <p className="md:text-[1vw] text-[1.45vw] text-black text-center ">ดูผลการประเมิน</p>
                            </a>
                        </> 
                    :
                    <p>Status Error</p>
                    }
                </div>
            </>
            : props.role === "Company" ?
            <></>
            : <><p>Fetching attempt error</p></>
            }
        </div>
    )
}