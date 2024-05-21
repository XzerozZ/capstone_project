"use client"
import { Loader, Rate } from 'rsuite';
import Link from 'next/link'
import React, { use, useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { UserProfile } from '@/interface';
import 'rsuite/dist/rsuite.min.css';
import { set } from 'rsuite/esm/utils/dateUtils';

type Props = {}

const page = (props: Props) => {
    const params = useParams()
    const {data:session} = useSession()
   
    const [freelance, setFreelance] = React.useState<UserProfile>({} as UserProfile)
    const [isLoading, setIsLoading] = React.useState(true)
    const [history, setHistory] = React.useState([] as any[])
    const [comment, setComment] = React.useState([] as any[])
    const [CheckType, setCheckType] = React.useState(true)
    const [CheckArray, setCheckArray] = React.useState(true)
    
   
    const fetchFreelance = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email.replace('%40','@') as string)
        try {
            const res = await axios.post(`/api/user/info/`, formData);
            setFreelance(res.data);
        } catch (error) {
            // Handle error here
        }
    }
    
    const fetchWorkHistory = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email.replace('%40','@') as string)
        try {
            const res = await axios.post(`/api/history/user/complete`, formData);
            setHistory(res.data);
            if (res.data.message === 'Not have any history') {
                setCheckType(false);
            }
        } catch (error) {
            // Handle error here
        }
    
    }

  
    const fetchComment = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email.replace('%40','@') as string)
        try {
            const res = await axios.post(`/api/user/comment`, formData);
            setComment(res.data);
            setHistory(res.data.message);
            if (comment.length === 0) {
                setCheckArray(false);
            }
        } catch (error) {
           
        }


    }
    
    useEffect(() => {
       if (freelance !== undefined || freelance !== null) {
        fetchFreelance(params.id)
        fetchWorkHistory(params.id)
        fetchComment(params.id)
        setIsLoading(false)
       }
    }, [freelance,history,comment])
    

        if (isLoading) {
            return  <div className='flex justify-center h-[500px] items-center'>
              <Loader size="md"  color='black'/>
            </div>
          }
          else {
       
       
       

    return (
      <>
        <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-6 p-3'>
            <div className='flex gap-7 max-sm:flex-col'>
              <img src={freelance?.image} alt="" className='w-3/5 max-sm:w-full rounded-md aspect-square'/>
              <div className='w-2/5 max-sm:w-full flex flex-col gap-3'>
                <h1 className='text-3xl text-[#202192] font-bold'>{freelance?.first_name} {freelance?.last_name}</h1>
                <h3 className='text-xl text-black'><Rate max={5} defaultValue={5} allowHalf readOnly color='yellow'/>{freelance?.averageRating?.toFixed(2) || 'no data'}</h3>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-black text-2xl'>ความถนัด</h1>
                    
                    <div className='flex flex-wrap gap-3'>
                         {/* {
                        freelance?.categories?.map((item, index) => {
                            return (
                              <button key={index} className='px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe] text-sm'>{item || 'no data'}</button>
                            )
                        })
                         } */}
                        
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-black text-2xl'>Contact</h1>
                   
                     {
                      freelance?.contact?.map((item, index) => {
                        return (
                            <div className='flex gap-1 flex-col bg-gray-200 rounded-lg '>

                                            <Link href={item?.facebook || 'no data'} className='hover:bg-[#202192]/5 text-black px-5 py-3  hover:text-[#202192] rounded-t-md  hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaFacebookSquare size={40}/> <span className='my-auto text-xl text-black'>Facebook</span></h3></Link>
                                            <Link href={item?.instagram || 'no data'} className='hover:bg-[#202192]/5 text-black px-5 py-3 hover:text-[#202192]   hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaInstagram size={40}/><span className='my-auto text-xl text-black'>Instagram</span></h3></Link>
                                            <Link href={item?.linkedin || 'no data'} className='hover:bg-[#202192]/5 text-black px-5 py-3 hover:text-[#202192] rounded-b-md   hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaLinkedin size={40}/> <span className='my-auto text-xl text-black'>Linkedin</span></h3></Link>
                  
                                        </div>
                                    )
                                })
                               }

                          
                        </div>
                        
                        
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl text-black'>ประวัติการทำงาน</h1>
                   <div className='flex justify-center mb-10'>
                    <div className=' gap-5 flex overflow-x-auto overflow-hidden max-sm:w-[400px] '>
                           {
                         CheckType ? <div>
                            {
                                history?.map((item:any,index:any) => {
                                    return (
                                        <div className='flex gap-3 bg-gray-200 p-3 rounded-md'>
                                            <div>
                                                <h1 className='text-lg'>{item?.job?.title}</h1>
                                                <p>{item?.job?.description}</p>
                                            </div>
                                            <div>
                                                <h1 className='text-lg'>{item?.job?.payment}</h1>
                                                <p>{item?.job?.date}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>   :  
                        <div>
                                <h1>ไม่มีประวัติการทำงาน</h1>     
                        </div>
                   
                           }
                        </div>
                   </div>


                </div>
                <div>
                <h1 className='text-2xl text-black'>ความคิดเห็น</h1>
                         <div className='flex flex-col gap-3 '>
                       
                               {
                                CheckArray ? <div>
                                     {
                                    comment.map((item:any,index:number) => {
                                        return (
                                            <div className='flex gap-3 bg-gray-200 p-3 rounded-md' key={index}>
                                                <div>
                                                    <h1 className='text-lg'>{item?.comment}</h1>
                                                    <p>{item?.date}</p>
                                                </div>
                                                <div>
                                                    <h1 className='text-lg'>{item?.rating}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </div> : 
                                <div>
                                    <h1 className='text-center'>ไม่มีความคิดเห็น</h1>
                                </div>
                               }
                         
                         </div>
                </div>
            </div>
          </div>
        </>
      )
    }}

export default page