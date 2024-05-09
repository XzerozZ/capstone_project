"use client"
import ProfileCard from '@/app/components/ProfileCard'
import SideBar from '@/app/components/SideBar'
import { Rating } from 'flowbite-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { use } from 'react'
import { MdWorkOutline } from 'react-icons/md'
import { SiD } from 'react-icons/si'
import { Dropdown } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';



type Props = {}



const page = (props: Props) => {

  const params = useParams();
  const id = Number(params.id)
  console.log(id)
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
            <div className='flex gap-4 max-sm:flex-col'>
              <div className='w-1/5  border border-1 rounded-md  p-4 border-black flex flex-col gap-1 max-sm:w-full max-sm:border-0 max-sm:p-1'>
                  <div className='max-sm:hidden'>
                    <SideBar work={work} />
                  </div>
                  <div className='sm:hidden'>
                    <Dropdown title="My Work">
                        {
                            work.map((item, index) => (
                                <Dropdown.Item key={index} icon={<MdWorkOutline/>}><Link href={`/pages/manage/${item.id}`} className='text-black active:no-underline'>{item.work_name}</Link></Dropdown.Item>
                            ))  
                        }
                    </Dropdown>
                  </div>
              </div>
              <div className='w-4/5 max-sm:w-full'>
                <div>
                    
                </div>
                  <div className='grid grid-cols-4 gap-3 max-sm:grid-cols-2 '>
                    {work[id - 1].freelance.map((item, index) => (
                        <ProfileCard work={item} key={index}/>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default page