import React from 'react'
import { History } from '@/interface'
type Props = {}

const HistoryCard = ({data} : {data: History}) => {

  const CheckColorStatus = (status: string) => {
    let color = '';

    if (status === 'On Working'){
      color = 'text-yellow-500';
    } else if (status === 'Rejected'){
      color = 'text-red-500';
    } else if (status === 'Considering'){
      color = 'text-blue-500';
    } else if (status === 'Completed'){
      color = 'text-[#39db4a]';
    }

    return color;
  }

  const color = CheckColorStatus(data.status);
    
  return (
    <div className='flex gap-3 rounded-lg bg-[#f5f5f5]'>
        <div className='w-1/4'>
            <img className='aspect-square rounded-l-lg' src={data.user.image} alt="" />
        </div>
        <div className='p-3'>
            <h3 className='text-2xl'>{data.job.title}</h3>
            <p className={`${color}`}>{data.status}</p>
        </div>
    </div>
  )
}
export default HistoryCard