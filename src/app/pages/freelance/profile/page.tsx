// หน้าโปรไฟล์ของฟรีแลนซ์สำหรับบริษัท
// กำลังทำโครง
import Navbar from "@/app/components/Navbar";
import JobRecommend from "@/app/components/JobRecommend"; // Mock Display
import ContactBox from "@/app/components/ContactBox"

const MockData : any = {
    "user_id" : 1  ,
    "first_name" : "ชื่อ",
    "last_name"  : "นามสกุล",
    "username" : "BeanyWork",
    "image" : "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360",
    "phone_number" : "9999999999",
    "id_card" : 9999999999999,
    "email" : "bunchofkidsu@gmail.com",
    "ratings" : 4.2,
    "contact" : 
    [
        {provider: "facebook", aliases : "Beany Doe"},
        {provider : "instagram", aliases: "beanywork_official"},
        {provider: "linkedin", aliases: "Beany Doe"}
    ]
}


export default function FreelanceProfile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <div className="w-full mt-[100px] flex flex-col"> {/* Padding top ตามความสูง Navbar */}
                <div className="flex flex-col">
                    <div className="flex mx-auto w-[90%]">
                        <div className="w-[50%]">
                            <img src={MockData.image} alt="Profile" className="h-80 mx-auto"/>
                        </div>
                        <div className="ml-5 text-left">
                            <div>
                                <p className="font-semibold text-4xl">{MockData.username}</p>
                                <div className="text-gray-400 text-xl flex my-3">
                                    <p className="mr-10">{MockData.first_name} </p> 
                                    <p className="ml-10">{MockData.last_name}</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <p className="text-2xl font-bold">Contact:</p>
                                {MockData["contact"].map((contact: any)=> 
                                <ContactBox contact={contact}/>)}
                            </div>
                            <div className="flex">
                                <p>เรทติ้งภาพรวม</p>
                                <div className="flex ml-5">
                                    <img src="" alt="" />
                                    <p>{MockData.ratings} / 5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[80%] mx-auto mt-16">
                    <p className="font-bold text-3xl">ประวัติงานที่รับ</p>
                    <div className="flex justify-center my-16">
                        <div>{"<"}</div>
                        <div className="grid overflow-x-auto grid-flow-col auto-cols-auto gap-[5rem]"> 
                            <JobRecommend/>
                            <JobRecommend/>
                            <JobRecommend/>
                            <JobRecommend/>
                            <JobRecommend/>
                            <JobRecommend/>
                        </div>
                        <div>{">"}</div>
                    </div>
                    <div></div> {/* หน้าจาก 1 - 10 */}
                </div>
                <div className="flex flex-col w-[80%] mx-auto">
                    <p className="font-bold text-3xl">คอมเมนต์</p>
                    <div className="flex justify-center my-16"></div>
                    <p></p> {/* ดูคอมเมนต์ทั้งหมด */}
                </div>
            </div>
        </main>
    )
}