"use client"
import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import axios from 'axios'
import { Table } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { Dropdown, Loader, Rate } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Tab from 'rsuite/esm/Tabs/Tab'



type Props = {}



const page = (props: Props) => {
  const {data:session,status} = useSession()
  const params = useParams()
  const [work, setWork] = React.useState([] as any[])
  const [isLoading, setIsLoading] = React.useState(true)
  const [UserEmail, setUserEmail] = React.useState(session?.user?.email)
  const [Person, setPerson] = React.useState([] as any[])
  const Router = useRouter()
  const fetchPerson = async (id:any) => {
   
    axios.get(`/api/company/selector/${id}`).then((res) => {
       
        setPerson(res.data)
    })
  }

  const fetchPostWork = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    try {
      await axios.post('/api/post/user',formData).then((res) => {
         
          setWork(res.data)
      })
    } catch (error) {
      
    }
  
  }
  const handleSubmit = async (job_id:any,freelance_id:any,status:any) => {
    console.log(job_id,freelance_id,status)
    const formData = new FormData()
    formData.append('id', freelance_id)
    formData.append('status', status)
    axios.put(`/api/company/selector/${job_id}`,formData).then((res) => {
      console.log(res.data)
    })
  }
 console.log(Person)
 
  useEffect(() => {
     if (session){
        if (Person !== undefined || Person !== null ) {
          fetchPerson(params.id)
          fetchPostWork(UserEmail)
          setIsLoading(false)
        }
     }
    
  }, [session,Person])

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
                 {/* <div className='grid grid-cols-3 gap-3 max-sm:grid-cols-2'>
                 {
                      Person.map((item,index) => {
                          return (
                              <ProfileCard key={index} Person={item} />
                          )
                      })
                  }
                 </div> */}
                  <div className="overflow-x-auto">
                        <Table hoverable>
                          <Table.Head>
                            <Table.HeadCell>Number</Table.HeadCell>
                            <Table.HeadCell>Image</Table.HeadCell>
                            <Table.HeadCell>Name</Table.HeadCell>
                          
                            <Table.HeadCell className=''>Email</Table.HeadCell>
                            <Table.HeadCell className=''>Status</Table.HeadCell>
                            <Table.HeadCell className=''></Table.HeadCell>
                         
                            <Table.HeadCell>
                              <span className=""></span>
                            </Table.HeadCell>
                          </Table.Head>
                          <Table.Body className="divide-y">
                          {
                            Person.map((item,index) => 
                             (
                              
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index} >
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1} </Table.Cell>
                                  <Table.Cell><img src={item.user.image || ''} className='rounded-full w-[40px] h-[40px]'/></Table.Cell>
                                  <Table.Cell>{item?.user?.first_name || "no data"} {item?.user?.last_name || "no data"}</Table.Cell>
                                  <Table.Cell>{item?.user?.email}</Table.Cell>
                                  <Table.Cell>{item?.status}</Table.Cell>
                                  <Table.Cell><Link href={`/pages/manage/freelance/${item?.user?.email}`} className='text-[#202192]'>Profile</Link></Table.Cell>
                                  <Table.Cell>
                                    <div className='flex gap-5' >
                                      <button className='text-[#202192]' onClick={() => handleSubmit(item.job_id,item?.user_id,'true')}>ยอมรับ</button>
                                      <button className='text-[#ff0000]' onClick={() => handleSubmit(item.job_id,item?.user_id,'false')}>ลบ</button>
                                    </div>
                                  </Table.Cell>
                                </Table.Row>
                            ))
                          }
                          
                          </Table.Body>
                        </Table>
                      </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}}
export default page


