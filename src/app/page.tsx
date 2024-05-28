"use client"
import Image from "next/image";
import CategoryBox from "./components/CategoryBox";
import JobRecommend from "./components/JobRecommend";
import CardWorkRec from "./components/card/CardWorkRec";
import { Carousel } from "flowbite-react";
import CardWork from "./components/card/CardWork";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardSportlight from "./components/card/CardWork";
import { set } from "rsuite/esm/utils/dateUtils";
import { Loader } from "rsuite";
import { JobPosting } from "@/interface";


export default function Home() {


  const {data:session,status} = useSession()
  
  
  const [Sportlight,setSportlight] = useState([] as any[])

  const [CheckUser,setCheckUser] = useState('')
  const [ShowRecommend,setShowRecommend] = useState(false)
  const [Recommended, setRecommended] = useState<{ recommend: any[] }>({ recommend: [] });
  const [isLoading, setIsLoading] = useState(false);

  //////////////////////////////

  //////////////////////////////



  const fetchSportlight = async () => {
    try {
      await axios.get('/api/sponsor').then((res) => {
        
        setSportlight(res.data)
      })
    } catch (error) {
      
    }
  }


  const fetchRecommend = async (email:any) => {
    const formData = new FormData()
    formData.append('email',email)
    await axios.post('/api/recommend',formData).then((res) => {
      // console.log(res.data)
      setRecommended(res.data)
    })
  }

  const recommendKeys: string[] = Object.keys(Recommended.recommend);

  const JobRecomm = recommendKeys.map((item: string) => Recommended.recommend[item as keyof typeof Recommended.recommend]).flat();

  console.log(JobRecomm);
  useEffect(() => {
    if (session){
      setCheckUser(session?.user?.role)
      if (Sportlight.length !== null){
        fetchSportlight()
        if (CheckUser === 'user'){
          fetchRecommend(session?.user?.email)
          setShowRecommend(true)
          setIsLoading(false)
        }
        
       


      }
    }
  },[session,Sportlight,CheckUser])


  if (isLoading){
    return (
      <div className='flex justify-center h-[1000px] items-center'>
        <Loader size="md" color='black'/>
      </div>
    )
  } else {
    return (
 <>
 {
  ShowRecommend ?    <>
  <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] bg-[#F9FAFA]'>
       <div className='w-[1140px] flex flex-col gap-6 p-3  min-h-screen '>
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
               <div className=' gap-5 flex  max-sm:w-[400px] overflow-x-auto'>
                          {
                            JobRecomm.map((item, index) => (
                              <div key={index} className="flex justify-between">
                                <CardWorkRec props={item} />
                              </div>
                            ))
                          }
                   </div>
              </div>
           </div>
         
           <div className="flex gap-3 flex-col">
           <div className="flex justify-between">
             <h1 className="text-3xl text-[#202192]">Sportlight job</h1>
             <Link href={`/pages/jobs`} className="text-[#202192]">ดูทั้งหมด</Link>

             </div>
             <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
             {
                           Sportlight.map((item:any, index) => {
                               return (
                                 
                                  <div key={index} className=" flex justify-between">
                                      <CardSportlight key={index} props={item} />
                                  </div>
                                
                                   
                               )
                           })
                       }
             </div>
           </div>
       </div>
   </div>
  </> :    <>
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
               
               <div className="flex gap-3 flex-col">
               <div className="flex justify-between">
                 <h1 className="text-3xl text-[#202192]">Sportlight job</h1>
                 <Link href={`/pages/jobs`} className="text-[#202192]">ดูทั้งหมด</Link>
   
                 </div>
                 <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
                 {
                               Sportlight.map((item:any, index) => {
                                   return (
                                     
                                      <div key={index}>
                                          <CardSportlight key={index} props={item} />
                                      </div>
                                    
                                       
                                   )
                               })
                           }
                 </div>
               </div>
           </div>
       </div>
      </>
 }
 </>
     );
}
}

