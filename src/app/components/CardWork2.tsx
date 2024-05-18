import React from 'react'
import Link from 'next/link'

type Props = {}

const CardWork2 = ({props}: any) => {

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
    <>
   <Link href={`/pages/jobs/${props.job_id}`} className='text-black hover:no-underline'>
   <div className='rounded-lg shadow-md border-solid flex flex-col justify-between hover:scale-105 hover:shadow-xl text-black'>
        <img src={props?.user.image || ''} className='rounded-t-lg flex-none aspect-ratio'/>
       <div className=' p-3 grow flex flex-col gap-2 justify-between '>
       
            <div className='flex flex-col gap-2'>
                    <p>{props.job.title}</p>
                    <div className='flex flex-wrap gap-2 '>
                    {/* {props?.categories?.map((category: any,index:any)=>
                        <p key={index} className='bg-[#d9d9d9] py-1 px-2 rounded-2xl text-xs '>{category}</p>)
                    } */}
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <DateFormatter timestamp={props?.job.posted_date} />
                    <div className='font-bold text-sm text-right'>
                        งบประมาณ : {props?.job.budget} บาท
                    </div>
                </div>
       
       </div>

    </div>
   </Link>
    </>
  )
}
export default CardWork2