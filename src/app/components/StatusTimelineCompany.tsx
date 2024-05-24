import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

import React, { useEffect, useState } from 'react'
import { Job, StatusWork } from "@/interface";
import Timeline1 from "../pages/history/status/component/Timeline1";
import Timeline2 from "../pages/history/status/component/Timeline2";
import Timeline3 from "../pages/history/status/component/Timeline3";
import Timeline4 from "../pages/history/status/component/Timeline4";
import Timeline5 from "../pages/history/status/component/Timeline5";
import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { SiBrave } from "react-icons/si";

const StatusTimelineCompany = ({data} : {data:any}) => {
  const [status, setStatus] = useState<String>()
  
  useEffect(() => {
    setStatus(data[0]?.status)
   
  }, [data])

  if (data) {
    if (status === 'On working'){
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
  } else {
    return  <div>
      don't have data
    </div>
  }



 

}
export default StatusTimelineCompany