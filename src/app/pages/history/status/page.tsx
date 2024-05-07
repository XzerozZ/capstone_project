"use client"
import React from 'react'
import { Timeline } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const page = (props: Props) => {
  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
        <Timeline>
            <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
            <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
            <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
            <Timeline.Item>02:34:41 Send to Shanghai Hongkou Company</Timeline.Item>
            <Timeline.Item>15:05:29 Sending you a piece</Timeline.Item>
        </Timeline>
        </div>
    </div>
    </>
  )
}
export default page