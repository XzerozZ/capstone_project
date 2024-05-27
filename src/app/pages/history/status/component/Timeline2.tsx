import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import React from 'react'
import { Job } from "@/interface";

type Props = {}

const Timeline1 = () => {

  
 
    const timeline = [
      {
        month:'',
        title: 'Wating for approval',
        body: 'We are considering your project. Once the project is approved, we will start working on it.',
        status: 'Considering'
      },
    
      {
        month:'',
        title: 'On working',
        body: 'We are working on the project. We will update you with the progress of the project.',
        status: 'On Working'
      }
    ]
  
  

  return (
   <>
    <Timeline horizontal>
      {
        timeline.map((item, index) => (
          <Timeline.Item key={index}>
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
export default Timeline1;