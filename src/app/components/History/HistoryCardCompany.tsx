import React from 'react'
import { History } from '@/interface'
import Link from 'next/link'
type Props = {}

const HistoryCardCom = ({data} : {data: any}) => {



 
    
  return (
     <Link href={`/pages/history/status/company/${data.job_id}+${data.user.email}`}>
       <div className='flex gap-3 rounded-lg bg-[#f5f5f5]'>
        <div className='w-1/4'>
            <img className='aspect-square rounded-l-lg' src={data.user.image} alt="" />
        </div>
        <div className='p-3'>
            <h3 className='text-2xl'>{data.job.title}</h3>
            <p className='text-lg'>Status : {data.job.status}</p>
        </div>
    </div>
      </Link>
  )
}
export default HistoryCardCom