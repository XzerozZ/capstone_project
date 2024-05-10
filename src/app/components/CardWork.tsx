import React from 'react'

type Props = {}

const CardWork = ({props}: any) => {
  return (
    <>
    <div className='rounded-lg shadow-md border-solid flex flex-col justify-between hover:scale-105 hover:shadow-xl text-black'>
        <img src={props.image} className='rounded-t-lg flex-none '/>
       <div className=' p-3 grow flex flex-col gap-2 justify-between '>
       
            <div className='flex flex-col gap-2'>
                    <p>{props.job}</p>
                    <div className='flex flex-wrap gap-2 '>
                    {props.categories.map((category: any,index:any)=>
                        <p key={index} className='bg-[#d9d9d9] py-1 px-2 rounded-2xl text-xs '>{category}</p>)
                    }
                    </div>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className='text-sm'>
                        {props.posted_date}
                    </div>
                    <div className='font-bold text-sm text-right'>
                        งบประมาณ : {props.budget} บาท
                    </div>
                </div>
       
       </div>

    </div>
    </>
  )
}
export default CardWork