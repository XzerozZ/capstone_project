import { Rate } from 'rsuite';
import Link from 'next/link'
import React from 'react'
import 'rsuite/dist/rsuite.min.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

type Props = {}

const page = (props: Props) => {
    const MockData = [ {
        image: 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'Natchapon Ponlaem',
        Rating: 4.5,
        categories: ['Web Development', 'QA Testing', 'Communication'],
        Facebook: 'https://www.facebook.com/',
        Instagram: 'https://www.instagram.com/',
        Linkedin: 'https://www.linkedin.com/',

        
    }]
    const history = [
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        }, {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        },
        {
            image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
            name: 'UX/UI Design',
            rating: 4.5,
        }
    ]
    const comment = [{
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
        image : 'https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg',
        name: 'BIZ Company',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    }
    ]

  return (
    <>
      <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-6 p-3'>
            <div className='flex gap-7 max-sm:flex-col'>
                <img src={MockData[0].image} alt="" className='w-3/5 max-sm:w-full rounded-md'/>
                <div className='w-2/5 max-sm:w-full flex flex-col gap-3'>
                    <h1 className='text-3xl text-[#202192] font-bold'>{MockData[0].name}</h1>
                    <h3 className='text-xl text-black'><Rate max={5} defaultValue={MockData[0].Rating} readOnly color='yellow'/>{MockData[0].Rating}</h3>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-black text-2xl'>ความถนัด</h1>
                        
                        <div className='flex flex-wrap gap-3'>
                               {
                                MockData[0].categories.map((item, index) => {
                                    return (
                                        <button key={index} className='px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe] text-sm'>{item}</button>
                                    )
                                })
                               }
                              
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-black text-2xl'>Contact</h1>
                        <div className='flex gap-1 flex-col bg-gray-200 rounded-lg '>
                            <Link href={MockData[0].Facebook} className='hover:bg-[#202192]/5 text-black px-5 py-3  hover:text-[#202192] rounded-t-md  hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaFacebookSquare size={40}/> <span className='my-auto text-xl text-black'>Facebook</span></h3></Link>
                            <Link href={MockData[0].Instagram} className='hover:bg-[#202192]/5 text-black px-5 py-3 hover:text-[#202192]   hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaInstagram size={40}/><span className='my-auto text-xl text-black'>Instagram</span></h3></Link>
                            <Link href={MockData[0].Linkedin} className='hover:bg-[#202192]/5 text-black px-5 py-3 hover:text-[#202192] rounded-b-md   hover:no-underline  active:no-underline'><h3 className='flex gap-3'><FaLinkedin size={40}/> <span className='my-auto text-xl text-black'>Linkedin</span></h3></Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl text-black'>ประวัติการทำงาน</h1>
               <div className='flex justify-center'>
                <div className=' gap-5 flex overflow-x-auto overflow-hidden max-sm:w-[400px]'>
                        {
                            history.map((item, index) => {
                                return (
                                    <div key={index} className=''>
                                        <img src={item.image} alt="" className='rounded-md'/>
                                        <div className='flex flex-col gap-3 p-3'>
                                            <h1 className='text-xl text-[#202192] font-bold'>{item.name}</h1>
                                            <h3 className='text-lg text-black flex '><Rate max={5} size='xs' defaultValue={item.rating} readOnly color='yellow'/>{item.rating}</h3>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
               </div>


            </div>
            <div>
            <h1 className='text-2xl text-black'>ความคิดเห็น</h1>
                     <div className='flex flex-col gap-3 '>
                     {
                        comment.map((item, index) => {
                            return (
                            <div className='bg-gray-300 flex p-3 gap-3 rounded-md '>
                                <div className='max-sm:w-1/5'>
                                   <img src={item.image} alt="" className='rounded-full w-[50px] h-[50px] max-sm:my-2'/>
                                </div>
                                <div>
                                    <h1 className='text-lg'>{item.name}</h1>
                                    <p>{item.comment}</p>
                                </div>

                            </div>
                        )
                        })
                      }
                     </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default page