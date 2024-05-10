import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import React from 'react'

type Props = {}

const StatusTimeline = (props: Props) => {


  const timeline = [
    {
      month: 'February 2022',
      title: 'Application UI code in Tailwind CSS',
      body: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
      status: 'done'
    },
    {
      month: 'March 2022',
      title: 'Marketing UI design in Figma',
      body: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
      status: 'done'
    },
    {
      month: 'April 2022',
      title: 'E-Commerce UI code in Tailwind CSS',
      body: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
      status: 'done'
    }
  ]

  return (
   <>
    <Timeline horizontal>
      {
        timeline.map((item, index) => (
          <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>{item.month}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Body>
             {
                item.body

             }
             <br />
             {
              item.status
             }
            </Timeline.Body>
           
          </Timeline.Content>
        </Timeline.Item>
        ))
      }

   
    </Timeline>
    
   </>
  )
}
export default StatusTimeline