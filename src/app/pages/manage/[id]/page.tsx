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
import Swal from 'sweetalert2'




const page = () => {
  
  const {data:session,status} = useSession()
  const params = useParams()
  const [work, setWork] = React.useState([] as any[])
  const [isLoading, setIsLoading] = React.useState(true)
  const [UserEmail, setUserEmail] = React.useState<string>('')
  const [Person, setPerson] = React.useState([] as any[])
  const Router = useRouter()
  const [JobStatus, setJobStatus] = React.useState<StatusWork>({} as StatusWork)
  const [CheckCreditCard , setCheckCredit] = React.useState(false)
 
  
  //////////////////////////////////////////////////////


 
 //////////////////////////////////////////////////////
  const fetchPerson = async (id:any) => {
  
   
    await axios.get(`/api/company/selector/${id}`).then((res) => {
       
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
  
  const handleSubmit = async (job_id:any,freelance_id:any,status:any) => {
    const formData = new FormData()
    formData.append('id', freelance_id)
    formData.append('status', status)
    axios.put(`/api/company/selector/${job_id}`,formData).then((res) => {
      console.log(res.data)
      Swal.fire({
        icon: 'success',
        title: 'เลือกผู้สมัครสำเร็จ',
        showConfirmButton: false,
        timer: 1500
        
      })
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
 
 const ConfirmPayment = async (order_id:any) => {
  const formData = new FormData()
  formData.append('orderId', order_id)
  console.log(order_id)
  await axios.put(`/api/job/sentwork/payment`, formData).then((res) => {
      console.log(res.data)
     
  })
  
}
 const ComfirmWork = async (email:string,job_id:any,Check:any)=> {
  if (Check === true){
    const formData = new FormData()
  

    formData.append('email', email)
    formData.append('job_id', job_id)
    await axios.post('/api/job/sentwork',formData).then((res) => {
      console.log(res.data)
      Swal.fire({
        title: "Are you sure?",
        text: "You want to finish work?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, do it!"
      }).then((result) => {
        if (result.isConfirmed) {
          ConfirmPayment(res.data)
        
          Swal.fire({
            title: "Success!",
            text: "Thanks you for payment.",
            icon: "success"
          });
        }
      });
      
    })
   
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
      // if (URLPayment !== '') {
      //   Router.push(URLPayment)
      // }
  
     if (session){
        if (Person !== undefined || Person !== null ) {
          fetchPerson(params.id)
          fetchPostWork(UserEmail)
          CheckCredit(UserEmail)
          setIsLoading(false)
          fetchStatusWork(params.id)
          setUserEmail(session?.user?.email)
          

          
        }
     }
    
  }, [session,Person,CheckCreditCard])

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }else {
    if(JobStatus === undefined || JobStatus === null){
      return <div>loading</div>

    }else{
      return (
        <>
    
         <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] min-h-screen mb-[-300px]'>
            <div className='w-[1140px] flex flex-col gap-6 p-3'>
               
               <div className='flex justify-between'>
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
                  <div className='w-4/5 max-sm:w-full flex flex-col gap-3 mt-[10px]'>
                  <StatusTimelineCompany data={Person}/>
                  <div className='flex flex-col gap-2'>
                          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github Link</label>
                          <div 
                         
                        
                          
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]"  >
                            {JobStatus.work_link || 'no data'}</div>
                            <button 
                              onClick={() => ComfirmWork(UserEmail,params.id,CheckCreditCard)}
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
    }
 

  
}}
export default page


