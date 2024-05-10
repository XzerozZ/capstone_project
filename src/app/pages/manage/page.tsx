import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import React from 'react'
import { MdWorkOutline } from 'react-icons/md'



type Props = {}



const page = (props: Props) => {
  const work = [
    {
      id : 1,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        },
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,

        },
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        },
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        },
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        },
      ]

    },
    {
        id:2   ,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]}
      ,
    {
        id:3,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]}
      ,
    {
        id:4,   
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]}
      ,
    {id:5,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]}
      ,
    {id:6,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]}
      ,
    {
        id:7,
      work_name : 'Mobile Developer (React Native)',
      work_type : 'Full Time',
      work_status : 'Open',
      work_location : 'Bangkok',
      freelance : [
        {
            name : 'John Doe',
            email : 'test',
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            Rating : 4.5,
        }]
    }
  
    ]

 

  return (
    <>
     <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-6 p-3'>
            <h1 className='text-3xl text-[#202192]'>จัดการผู้สมัคร</h1>
            <div className='flex gap-3'>
              <div className='w-1/5  border border-1 rounded-md p-4 border-black flex flex-col gap-1'>
                   <SideBar work={work}/>
              </div>
              <div className='w-4/5'>
                  
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default page