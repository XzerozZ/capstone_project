"use client"
import React from 'react'
import { Placeholder, Tabs } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const page = (props: Props) => {
  return (
    <>
     <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] bg-[#F9FAFA]'>
    <div className='w-[1140px] flex flex-col gap-6 p-3 min-h-screen '>
    <div className='rounded-md bg-white p-3 border border-[#F5F6F7] min-h-screen'> 
    <Tabs defaultActiveKey="1" appearance="subtle">
      <Tabs.Tab eventKey="1" title="History">
      
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Credit card">
       <div>
          <h2>Payment</h2>
          <div>
            <h3>Payment method</h3>
            <div className='flex gap-3'>
              <div className=''>
                <img src='' alt='test' width={100} height={100} />
                <h5>Card</h5>
                
              </div>
            </div>
          </div>
       </div>
      </Tabs.Tab>
      
      </Tabs>
    </div>
    </div>
    </div>
     
    </>
  )
}

export default page