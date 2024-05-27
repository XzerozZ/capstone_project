import { useState } from "react";
import Link from "next/link"; // react-router-dom

export default function JobComponent({props}: any){
    const [hover, setHover] = useState(false); {/* display information when hovered*/}

    
    const onHover = () => {
        setHover(true);
    }

    const offHover = () => {
        setHover(false);
    }
    
    return(
        <>
            <div className="flex flex-col hover:bg-[#B2EDFF] bg-[#F1F1F1]" onMouseEnter={onHover} onMouseLeave={offHover}>
                <div className="absolute self-end w-[2%] mr-10 mt-5">{/* heart icon */}
                    <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" className="mix-blend-multiply" alt="Heart Icon" /> {/* กดแล้วเพิ่มเข้า Bookmark/Wishlist */}
                </div> 
                <div className="mx-auto w-[50%] my-10">
                    <img src={props.image} alt="No Image Found" className=""/>{/* image */}
                </div> 
                <div className="flex"> {/* job name, ratings */}
                    <p className="text-xl w-[80%] overflow-hidden">{props.job}</p>
                    <div className="flex w=[15%]">
                        <img src="" alt="Ratings:" /> {/* Star icon */}
                        <p className="text-xl">{props.rating}</p>
                    </div>
                </div>  
                <div className="flex flex-col"> {/* Jobs details */}
                    <div className="flex"> {/* category, interaction (ติดต่อสมัครงาน, อ่านเพิ่มเติม) */}
                        <div className="flex flex-wrap w-[70%]">
                            {props.categories.map((category: any)=> // แสดงประเภทของงาน
                                <p className="text-base">{category}</p>)
                            }
                        </div>
                        {hover && 
                            <div className="flex flex-col w-[25%] text-center">
                                <p className="text-lg hover:text-[#18A800] text-black">ติดต่อสมัครงาน</p> {/* กดแล้วส่งสถานะว่าสมัครเข้าทำงานนั้น ๆ */}
                                <Link className="bg-[#FEFFE1] font-bold" href="/pages/jobs/details">อ่านรายละเอียดเพิ่มเติม</Link>  {/* Bug here:
                                    TypeError: Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null. / ส่งไปยังหน้าข้อมูลเต็มของงาน  */}
                                    {/*to={{pathname:"/pages/jobs/details"}} state={props}*/}
                            </div>
                        }
                    </div> 
                    { hover &&
                    <div className="flex flex-col">
                        <p className="text-xl font-bold">งบประมาณ : {props.budget} บาท</p>
                        <p className="text-xl font-bold">โพสต์เมื่อวันที่ : {props.posted_date}</p>
                        </div>
                    }
                </div> 
            </div>
        </>
    );
}