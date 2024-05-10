import React from 'react'

type Props = {}

const HistoryCard = ({props} :any) => {

    
  return (
    <div className='flex gap-3 rounded-lg bg-[#f5f5f5]'>
        <div className='w-1/4'>
            <img className='aspect-square rounded-l-lg' src={props.image} alt="" />
        </div>
        <div className='p-3'>
            <h3 className='text-2xl'>{props.job}</h3>
            <p className={props.work_status === 'done' ? 'text-[#00ff38]' : 'text-[#ff0000]'}>{props.work_status}</p>

        </div>
    </div>
  )
}
export default HistoryCard