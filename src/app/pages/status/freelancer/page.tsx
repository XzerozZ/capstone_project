'use client'

import Image from "next/image";
import Navbar from  "@/components/Navbar";
import CategoryBox from "@/components/CategoryBox";
import WorkStatus from "@/app/components/WorkStatus";
import { useState } from "react";




export default function Home() {
  
  const [workerType, setWorkerType] = useState("Freelance")

  const MockData1 = {role:"Freelancer",
                    src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
                    job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
                    details:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem", 
                    budget:"2000", work_type:"Web Dev....", 
                    post_date:"12/12/2566", 
                    status:"applying"
                  };
  const MockData2 = {role:"Freelancer",
                  src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
                  job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
                  details:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem", 
                  budget:"2000", work_type:"Web Dev....", 
                  post_date:"12/12/2566", 
                  status:"in-progress"
                };
  const MockData3 = {role:"Freelancer",
                src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
                job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
                details:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem", 
                budget:"2000", work_type:"Web Dev....", 
                post_date:"12/12/2566", 
                status:"handed-in"
              };
  const MockData4 = {role:"Freelancer",
              src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
              job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
              details:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem", 
              budget:"2000", work_type:"Web Dev....", 
              post_date:"12/12/2566", 
              status:"completed"
            };
  const MockData = [MockData1, MockData2, MockData3, MockData4]; {/* ลอง MockData */}


  const toggleWorkerType = (evt: any) => {
    setWorkerType(evt.target.name);
}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div className="flex items-center justify-center flex-wrap flex-col mt-[100px] w-full"> {/* Margin top ให้ component เด้งลงมา */}
        
        <div className="flex self-start w-[80%] mx-auto flex-col"> {/* Freelance/Full time toggle */}
          <p className="text-3xl font-bold text-black mb-10">งานที่เคยประกาศ</p>
          <div>
            <button name="Freelance" onClick={toggleWorkerType} className="mr-10 bg-[#EED3FF] w-[15%] rounded-2xl">
              <p className="text-base leading-10 ">งาน Freelance</p>
            </button>
            <button name="Freelance" onClick={toggleWorkerType} className="mr-10 bg-[#A8FFFA] w-[15%] rounded-2xl">
              <p className="text-base leading-9 ">งานประจำ</p>
            </button>
          </div>
        </div>
        <div className="flex mx-auto items-center justify-center flex-wrap flex-col w-[80%]"> {/* ใส่ Mock Data */}
          {/*<WorkStatus props= {{role:"Freelancer",
                    src:"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
                    job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
                    details:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem", 
                    budget:"2000", work_type:"Web Dev....", 
                    post_date:"12/12/2566", 
                    status:"applying"
                  }}/>*/}
          {MockData.map((props)=> 
            <WorkStatus props={props}></WorkStatus>
          )}
        </div>
      </div>
    </main>
  );
}


