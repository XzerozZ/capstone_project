"use client"
import HistoryCard from '@/app/components/History/HistoryCard'
import HistoryCardComplete from '@/app/components/History/HistoryCardComplete'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const page = (props: Props) => {

    const [history , setHistory] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const {data:session,status} = useSession()
    const [emailUser, setEmailUser] = React.useState(session?.user?.email)
    const [isFreelance, setIsFreelance] = React.useState(true)
    const [CheckComplete, setCheckComplete] = React.useState(false)
    const [CompleteWork, setCompleteWork] = React.useState([] as any[])
    const fetchHistory = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email)
        try {
            const res = await axios.post('/api/history/user', formData)
            
            setHistory(res.data)
        } catch (error) {
            
            // Handle error here
        }
    }


    const fetchCompleteWork = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email)
        try {
            await axios.post('/api/history/user/complete', formData).then((res) => {
                setCompleteWork(res.data)
            })
           
           
        } catch (error) {
            // Handle error here
        }
    }
    console.log(session)

  

    useEffect(() => {
      if (session) {
        if (session.user.role === 'freelancer') {
          setIsFreelance(true)
        } else {
          setIsFreelance(false)
        }
        fetchHistory(emailUser)
        fetchCompleteWork(emailUser)
        setIsLoading(false)
      }
    },[session])
  
    if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }
      else {




  return (
    <>
       <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3 min-h-screen '>
            <h1 className='text-3xl text-[#202192] font-bold'>ประวัติการทำงาน</h1>
            <div className="flex flex-col gap-1">
                                <label>Work status</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setCheckComplete(false)}>On working</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setCheckComplete(true)}>Complete</button>
                                </div>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    CheckComplete ? <div className='flex flex-col gap-3'>
                    {
                    CompleteWork.map((item,index)=>  <HistoryCardComplete data={item} key={index}/>)
                    }
                    </div> :  <div className='flex flex-col gap-3'>
                    {
                   
                    history.map((item,index)=>  <HistoryCard data={item} key={index}/>)
                    }
                    </div>
                }
            </div>
            
        </div>
        </div>
    </>
)
}}
export default page