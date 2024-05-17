import React from 'react'

type Props = {}

const HistoryCard = ({props, image} :any) => {

    
  return (
    <div className='flex gap-3 rounded-lg bg-[#f5f5f5]'>
        <div className='w-1/4'>
            <img className='aspect-square rounded-l-lg' src={image} alt="" />
        </div>
        <div className='p-3'>
            <h3 className='text-2xl'>{props.title}</h3>
            <p className={props.status === 'done' ? 'text-[#00ff38]' : 'text-[#ff0000]'}>{props.status}</p>

        </div>
    </div>
  )
}
export default HistoryCard