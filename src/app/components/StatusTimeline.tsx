import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import React, { useEffect, useState } from 'react'
import { Job } from "@/interface";
import Timeline1 from "../pages/history/status/component/Timeline1";
import Timeline2 from "../pages/history/status/component/Timeline2";
import Timeline3 from "../pages/history/status/component/Timeline3";
import Timeline4 from "../pages/history/status/component/Timeline4";
import Timeline5 from "../pages/history/status/component/Timeline5";
import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

type Props = {}

const StatusTimeline = ({data} : {data:Job}) => {
  const [status, setStatus] = useState<String>()
  useEffect(() => {
    setStatus(data.status)
  }, [data])
  console.log(status)




  if (status === 'On Working'){
    return <Timeline2 />
  } else if (status === 'Rejected'){
    return <Timeline4 />
  } else if (status === 'Considering'){
    return <Timeline1 />
  } else if (status === 'Completed'){
    return <Timeline3 />
  } else if (status === 'Checking'){
    return <Timeline5 />
  }
  else {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }



 

}
export default StatusTimeline