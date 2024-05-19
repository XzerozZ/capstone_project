"use client"
import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { Dropdown, Loader } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';



type Props = {}



const page = (props: Props) => {

  const [Person, setPerson] = React.useState([] as any[])
  const [work, setWork] = React.useState([] as any[])
  const [isLoading, setIsLoading] = React.useState(true)

  const fetchWork = async () => {
    try {
      axios.get('/api/company/selector/43').then((res) => {
        setPerson(res.data)
        
      })
    } catch (error) {
      
    }
  }

  const fetchPostWork = async () => {
    try {
      axios.get('/api/job').then((res) => {
        setPerson(res.data)
      })
    } catch (error) {
      
    }
  
  }
  console.log(Person)
  useEffect(() => {
      if (Person !== undefined || Person !== null) {
        fetchWork()
        fetchPostWork()
        setIsLoading(false)
      }
    
  }, [Person,work])

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }else {

 

  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-6 p-3'>
           
           <div className='flex justify-between'>
              <h1 className='text-3xl text-[#202192]'>จัดการผู้สมัคร</h1>
             <Link href='/pages/manage/postwork'> <button className='border-2 border-[#202192] py-2 px-4 text-lg rounded-md text-[#202192] hover:text-white hover:bg-[#202192]'>เพิ่มงาน</button></Link>
           </div>
            <div className='flex gap-5'>
            <div className='w-1/5  border border-1 rounded-md  p-4 border-black flex flex-col gap-1 max-sm:w-full max-sm:border-0 max-sm:p-1'>
                  <div className='max-sm:hidden'>
                    {/* <SideBar work={work} /> */}
                  </div>
                  <div className='sm:hidden'>
                    {/* <Dropdown title="My Work">
                        {
                            work.map((item, index) => (
                                <Dropdown.Item key={index} icon={<MdWorkOutline/>}><Link href={`/pages/manage/${item.id}`} className='text-black active:no-underline'>{item.work_name}</Link></Dropdown.Item>
                            ))  
                        }
                    </Dropdown> */}
                  </div>
              </div>
              <div className='w-4/5'>
                 <div className='grid grid-cols-3 gap-3'>
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