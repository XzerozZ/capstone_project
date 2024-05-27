import Link from 'next/link'
import React from 'react'
import { MdWorkOutline } from 'react-icons/md'

type Props = {}

const SideBar = ({work} : {work:any}) => {
  return (
   <>
     <div className='flex gap-3 my-auto '>
                    <MdWorkOutline size={30} className='text-[#202192] ml-1'/>
                          <h1 className='text-xl text-[#202192] font-bold '>Work</h1>
              </div>
                    {
                      work.map((item:any, index: any) => {
                        return (
                          <div key={index}>
                        <Link href={`/pages/manage/${item?.job_id}`} className='text-[#202192]  font-medium hover:no-underline hover:text-white '>
                        <div className='flex gap-2 p-2 rounded-md hover:bg-[#202192] hover:text-white  '>
                            
                            <div className=''>
                            
                              <h1 className='text-lg'>{item.job.title}</h1>
                              
                            </div>
                           
                          </div>
                        </Link> 
                         </div>
                        )
                      })
                    }</>
  )
}

export default SideBar