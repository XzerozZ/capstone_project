"use client"
import HistoryCardCom from '@/app/components/History/HistoryCardCompany'
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
  
    console.log(history)
    useEffect(() => {
        setEmailUser(session?.user?.email)
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
       <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] bg-[#f9fafa]'>
        <div className='w-[1140px] flex flex-col gap-4 p-3 min-h-screen'>
            <h1 className='text-3xl text-[#202192] font-bold'>Work history</h1>
           
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