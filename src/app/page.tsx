"use client"
import Image from "next/image";
import CategoryBox from "./components/CategoryBox";
import JobRecommend from "./components/JobRecommend";
import CardWorkRec from "./components/CardWorkRec";
import { Carousel } from "flowbite-react";
import CardWork from "./components/CardWork";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {


  const {data:session,status} = useSession()
  console.log(session)
  
  const [Sportlight,setSportlight] = useState([] as any[])


  const fetchSportlight = async () => {
    try {
      await axios.get('/api/sportlight').then((res) => {
        console.log(res.data)
        setSportlight(res.data)
      })
    } catch (error) {
      
    }
  }
  useEffect(() => {
    if (session){
      fetchSportlight()
    }
  },[session])


  return (
   <>
   <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px]'>
        <div className='w-[1140px] flex flex-col gap-6 p-3  min-h-screen'>
            <div>
            <div className="h-[600px] max-sm:h-[250px]">
              <Carousel slideInterval={5000}>
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              <img src="https://via.placeholder.com/1440x1000" alt="Post Image" />
              </Carousel>
            </div>
              
            </div>
            <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-3xl text-[#202192]">Recommended for you</h1>
              <Link href={`/pages/jobs`} className="text-[#202192]">ดูทั้งหมด</Link>

              </div>
              <div className='flex justify-center'>
                <div className=' gap-5 flex overflow-auto max-sm:w-[400px] '>
                        {/* {
                            MockData.map((item:any, index) => {
                                return (
                                   <div className="">
                                     <CardWorkRec key={index} props={item} />
                                   </div>
                                    
                                )
                            })
                        } */}
                    </div>
               </div>
            </div>
            <div>
              <div className="flex justify-between">
              <h1 className="text-3xl text-[#202192]">Categories for services</h1>
              <Link href={`/pages/jobs`} className="text-[#202192]">ดูทั้งหมด</Link>

              </div>
              <div className="grid grid-cols-4 gap-3 max-sm:grid-cols-2">
                {/* {
                  Categories.map((cate, index) => {
                    return (
                      <CategoryBox key={index} data={cate}/>
                    )
                  })
                } */}
              </div>
            </div>
            <div className="flex gap-3 flex-col">
            <div className="flex justify-between">
              <h1 className="text-3xl text-[#202192]">Sportlight job</h1>
              <Link href={`/pages/jobs`} className="text-[#202192]">ดูทั้งหมด</Link>

              </div>
              <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
              {/* {
                            MockData.map((item:any, index) => {
                                return (
                                  <></>
                                    //  <CardWork key={index} props={item} />
                                 
                                    
                                )
                            })
                        } */}
              </div>
            </div>
        </div>
    </div>
   </>
  );
}


