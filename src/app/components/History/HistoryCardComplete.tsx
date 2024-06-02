import React from 'react'
import { History } from '@/interface'
import Link from 'next/link'
import { Rate } from 'rsuite'
type Props = {}

const HistoryCardComplete = ({data} : {data: any}) => {
console.log(data);

const DateFormatter = ({ timestamp }:any) => {
  if (!timestamp) {
    return <div>No timestamp provided</div>;
  }

  // Extract the date part
  const date = timestamp.substring(0, 10);
  // Replace hyphens with slashes
  const formattedDate = date.replace(/-/g, '/');

  return <div className='text-sm'>{formattedDate}</div>;
};


    
  return (
     <Link href={`/pages/history/comment/${data?.job_id}`} className='text-black  hover:no-underline hover:text-black'>
       <div className='flex gap-3 rounded-lg bg-[#f5f5f5]'>
        <div className='w-1/4'>
            <img className='aspect-square rounded-l-lg w-full object-fill' src={data?.post[0]?.user?.image || ''} alt="" />
        </div>
        <div className='p-3 flex flex-col'>
            <h3 className='text-2xl'>{data?.title}</h3>
            <p className=''><DateFormatter timestamp={data?.submitted_date}/></p>
            <p className=''> <Rate max={1} defaultValue={1} color='yellow' size='sm'/>{data?.averageRating.toFixed(2)}</p>
         
        </div>
    </div>
      </Link>
   
  )
}
export default HistoryCardComplete