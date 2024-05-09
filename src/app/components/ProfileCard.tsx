import Link from 'next/link'
import React from 'react'
import { Rate } from 'rsuite'



const ProfileCard = ({work} : {work :any}) => {
  return (
   <>
  <Link href={`/pages/manage/freelance/${work.id}}`} className='hover:no-underline'>
  <div  className='shadow-md rounded-lg hover:scale-105'>
                                        <img  src="https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg" alt="" className='rounded-t-md'/>
                                        <div className='flex flex-col gap-3 p-3'>
                                            <h1 className='text-xl text-[#202192] font-bold'>{work.name}</h1>
                                            <h3 className='text-lg text-black flex '><Rate max={5} size='xs' defaultValue={work.Rating} allowHalf  readOnly color='yellow'/>{work.Rating}</h3>
                                        </div>
    </div>
    </Link>
   </>
  )
}

export default ProfileCard