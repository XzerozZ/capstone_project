import Link from 'next/link'
import React from 'react'
import { Rate } from 'rsuite'



const ProfileCard = ({Person} : {Person :any}) => {
  return (
   <>
  
  <div  className='shadow-md rounded-lg hover:scale-105'>
  <Link href={`/pages/manage/freelance/${Person?.user_id}}`} className='hover:no-underline'>
            <img  src={Person?.user?.image} alt="" className='rounded-t-md aspect-square'/>
            <div className='flex flex-col gap-3 px-3 py-1'>
                <h1 className='text-xl text-[#202192] font-bold'>{Person.user.first_name} {Person.user.last_name}</h1>
                <h3 className='text-lg text-black flex '><Rate max={5} size='xs' defaultValue={4} allowHalf  readOnly color='yellow'/>{Person?.Rating}</h3>
            </div>
                                        
     </Link>
     <div className='flex justify-between gap-3 px-3 py-2'>
                                            <button className='text-[#202192]'>ยอมรับ</button>
                                            <button className='text-[#ff0000]'>ลบ</button>
       
                                        </div>
    </div>
    
   </>
  )
}

export default ProfileCard