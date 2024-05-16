"use client"
import React, { useEffect, useState } from 'react'
import Editpassword from './changepassword/page'
import Link from 'next/link'
import axios from 'axios'
import { User } from '@/interface'
import { useSession } from 'next-auth/react'

type Props = {}

const page = (props: Props) => {

    const {data:session,status} = useSession()
    const [checkFree, setCheckFree] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState<User>({} as User)
    const fetchUser = async () => {
        const formData = new FormData()
        formData.append('email', session?.user?.email as string)
        axios.post('/api/user/info', formData).then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    }
    useEffect(() => {
        fetchUser()
    }, [])

   
  return (
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
    <div className='w-[1140px] flex flex-col gap-6 p-3'>
       <div className='flex justify-between'>
            <h1 className='text-3xl text-[#202192] font-bold'>ข้อมูลส่วนตัว</h1>
            <Link href='/pages/profile/changepassword'><button onClick={() => setOpenModal(true)} className='rounded-md border-2 bg-[#fff] border-[#202192] text-lg py-2 px-3 hover:bg-[#202192] hover:text-white'>แก้ไขข้อมูลส่วนตัว</button></Link>
       </div>
        
        <hr className='border-[#202192] mt-2'/> 
        <div className='flex justify-between'>
            <h1 className='my-auto text-5xl text-[#202192] font-bold w-3/4'>{user.first_name} {user.last_name} ( {user.username} )</h1>
            <div className=''>
                <img src='https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg'    
                className='w-[120px] h-[150px] rounded-md'
                 alt="" />
            </div>

        </div>
        <div className='flex gap-5'>
            <div className='w-full'>
                <label className='text-[#202192] font-bold'>อีเมล</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user.email}</p>
            </div>
            
        </div>
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>บัตรประชาชน</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user.id_card}</p>
            </div>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>เบอร์โทรศัพท์</label>
                <p className='p-2 border border-[#202192] rounded-md'>{user.phone_number}</p>
            </div>
        </div>
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>อาชีพ</label>
                <p className='p-2 border border-[#202192] rounded-md'>Web Developer</p>
            </div>
            <div className='w-1/2'>
                <label className='text-[#202192] font-bold'>สถานะ</label>
                <p className='p-2 border border-[#202192] rounded-md'>ฟรีแลนซ์</p>
            </div>
           
        </div>
        <div className='flex flex-col gap-3'>
          
           {
             checkFree ?   <div>
             <label className='text-[#202192] font-bold'>ประสบการณ์</label>
             <div className="flex flex-row gap-3 flex-wrap ">
                     {
                         user.experience.map((item,index) => {
                             return( <div key={index} className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">{item.category.name}</div>
                         )
                         })
                     }                
             </div>
             </div> : <div></div>
           }
        
        </div> 
            
    </div>
   
    </div>
   
  )
}

export default page