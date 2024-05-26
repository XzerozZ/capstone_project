"use client"
import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { Dropdown, Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Swal from 'sweetalert2'



type Props = {}



const page = (props: Props) => {
  const {data:session,status} = useSession()
  const Router = useRouter()
  const [work, setWork] = React.useState([] as any[])
  const [isLoading, setIsLoading] = React.useState(true)
  const [UserEmail, setUserEmail] = React.useState(session?.user?.email)
  const [CheckCreditCard, setCheckCredit] = React.useState(false)


  const fetchPostWork = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    try {
      axios.post('/api/post/user',formData).then((res) => {
          setWork(res.data)
      })
    } catch (error) {
      
    }
  
  }
  const CheckCredit = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    try {
      await axios.post('/api/checkcard',formData).then((res) => {
          console.log(res.data)
          if (res.data.message === 'Not found card or bank account') {
            setCheckCredit(false)
            setIsLoading(false)
          }
          else{
            setCheckCredit(true)
            setIsLoading(false)
          }
      })
    } catch (error) {
      
    }
  
  
  }
  const handlePostwork = async (Check:boolean) => {
    console.log(Check);
    
    if (CheckCreditCard === true) {
      Router.push('/pages/manage/postwork')
  
  }
  else if (CheckCreditCard === false){
    Swal.fire({
      icon: 'error',
      title: 'You dont have credit card or bank account',
      showConfirmButton: false,
      timer: 1500
    })
    Router.push('/pages/payment')
  }
  }
 


  useEffect(() => {
     if (session){
      if (work !== undefined || work !== null) {
       
        fetchPostWork(UserEmail)
        CheckCredit(UserEmail)
        setIsLoading(false)
      }
     }
    
  }, [work,session])

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }else {

 

  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] bg-[#f9fafa]'>
        <div className='w-[1140px] flex flex-col gap-6 p-3 min-h-screen '>
           
           <div className='flex justify-between '>
              <h1 className='text-3xl text-[#202192]'>จัดการผู้สมัคร</h1>
              <button onClick={() => handlePostwork(CheckCreditCard)} className='border-2 border-[#202192] py-2 px-4 text-lg rounded-md text-[#202192] hover:text-white hover:bg-[#202192]'>เพิ่มงาน</button>
           </div>
            <div className='flex gap-5 max-sm:flex-col'>
            <div className='w-1/5  border border-1 rounded-md  p-4 border-black flex flex-col gap-1 max-sm:w-full max-sm:border-0 max-sm:p-1'>
                  <div className='max-sm:hidden'>
                    <SideBar work={work} />
                  </div>
                  <div className='sm:hidden'>
                    <Dropdown title="My Work">
                        {
                            work.map((item, index) => (
                                <Dropdown.Item key={index} icon={<MdWorkOutline/>}><Link href={`/pages/manage/${item.job_id}`} className='text-black active:no-underline'>{item.job.title}</Link></Dropdown.Item>
                            ))  
                        }
                    </Dropdown>
                  </div>
              </div>
              <div className='w-4/5 max-sm:w-full'>
                 <div className='grid grid-cols-3 gap-3 max-sm:grid-cols-2'>
                 {/* {
                      Person.map((item,index) => {
                          return (
                              <ProfileCard key={index} Person={item} />
                          )
                      })
                  } */}
                 </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}}
export default page