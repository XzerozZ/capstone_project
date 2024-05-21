"use client"
import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import StatusTimelineCompany from '@/app/components/StatusTimelineCompany'
import { StatusWork } from '@/interface'
import axios from 'axios'
import { Table } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { Dropdown, Loader, Rate } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

////////////////////////
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('process.env.PUBLISHABLE_KEY')




const page = () => {
  const {data:session,status} = useSession()
  const params = useParams()
  const [work, setWork] = React.useState([] as any[])
  const [isLoading, setIsLoading] = React.useState(true)
  const [UserEmail, setUserEmail] = React.useState<string>('')
  const [Person, setPerson] = React.useState([] as any[])
  const Router = useRouter()
  const [JobStatus, setJobStatus] = React.useState<StatusWork>({} as StatusWork)
  const [OrderID, setOrderID] = React.useState<string>('')

  //////////////////////////////////////////////////////
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }
    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, [])



 //////////////////////////////////////////////////////
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
 const fetchStatusWork = async (job_id:any) => {
    const formData = new FormData()
    formData.append('id', job_id)
    try {
      await axios.post('/api/work/job',formData).then((res) => {
        setJobStatus(res.data)
        
      })
    } catch (error) {
      
    }
 }
 const ComfirmWork = async (email:string,job_id:any,orderid:string)=> {
  const formData = new FormData()
  console.log(email,job_id,'user email')

  formData.append('email', email)
  formData.append('job_id', job_id)
  await axios.post('/api/job/sentwork',formData).then((res) => {
    console.log(res.data,'sent work success')
    setOrderID(res.data)
    const formData = new FormData()
    formData.append('orderId', res.data)
    console.log(res.data,'then 2')
  //   axios.put('/api/job/sentwork/payment',formData).then((res) => {
  //     console.log(res.data)
      
  //   }
  // )
  
  
    
  })
 
  
}
 
 
  useEffect(() => {
     if (session){
        if (Person !== undefined || Person !== null ) {
          fetchPerson(params.id)
          fetchPostWork(UserEmail)
          setIsLoading(false)
          fetchStatusWork(params.id)
          setUserEmail(session?.user?.email)
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
              <div className='w-4/5 max-sm:w-full flex flex-col gap-3 mt-[10px]'>
              <StatusTimelineCompany data={JobStatus}/>
              <div className='flex flex-col gap-2'>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github Link</label>
                      <div 
                     
                    
                      
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]"  >
                        {JobStatus.work_link || 'no data'}</div>
                        <button 
                          onClick={() => ComfirmWork(UserEmail,params.id,OrderID)}
                        className="bg-[#202192] border border-[#202192]  text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192] text-white"  >
                       ยอมรับ</button>
              </div>

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


