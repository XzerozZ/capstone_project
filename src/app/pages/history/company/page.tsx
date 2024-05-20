"use client"
import HistoryCardCom from '@/app/components/HistoryCardCompany'
import axios from 'axios'
import { log } from 'console'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { Loader } from 'rsuite'

type Props = {}

const page = (props: Props) => {

    const [history , setHistory] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const {data:session,status} = useSession()
    const [emailUser, setEmailUser] = React.useState(session?.user?.email)
  
    const fetchHistoryCompany = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email)
        axios.post('/api/post/user', formData).then((res) => {
            setHistory(res.data)
            console.log(res.data)
            
        })
    }
  

    useEffect(() => {
        fetchHistoryCompany(emailUser)
        if (history !== undefined || history !== null && session !== undefined || session !== null) {
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    },[])
  
    if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }
      else {




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
                    history.map((item,index)=>  <HistoryCardCom data={item} key={index}/>)
                }
            </div>
            
        </div>
        </div>
    </>
)
}}
export default page