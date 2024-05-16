"use client"
import axios from 'axios'
import { Carousel } from 'flowbite-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const page = (props: Props) => {

        const {data:session,status} = useSession()
        const router = useRouter()
        console.log(session?.user?.id)
        const [idUser, setId] = React.useState(session?.user?.id)
      
        const [data, setData] = React.useState({
        job: '',
        Facebook: '',
        Instagram: '',
        Linkedin: '',
 })

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setData((prev:any) => ({
                        ...prev,
                        [name]: value,
                }));}
        const handleSubmit = (id:any) => {
             
                const formData1 = new FormData();
                const formData2 = new FormData();
                formData1.append('career', data.job);
                formData1.append('user', id);
                formData2.append('facebook', data.Facebook);
                formData2.append('instagram', data.Instagram);
                formData2.append('linkedin', data.Linkedin);
                formData2.append('id', id);
                axios.post('/api/user/career', formData1).then((res) => {
                        console.log(res);
                        
                });
                axios.post('/api/user/contact', formData2).then((res) => {
                        console.log(res);
                     
                });
                router.push('/')
                console.log(data);

        }

  
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[440px] flex flex-col gap-6 p-3'>
                <form onSubmit={()=> {handleSubmit(idUser)}}>
                <div className="flex gap-3 flex-col">
              <h1 className='text-3xl text-[#202192]'>เพิ่มข้อมูลโปรไฟล์</h1>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">อาชีพ</label>
                    <input 
                    type="text" 
                    id="job" 
                    name='job'
                    onChange={handleChange}
                  
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="อาชีพ"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Facebook</label>
                    <input 
                    type="text" 
                    id="Facebook" 
                    name='Facebook'
                    onChange={handleChange}


                  
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your acebook link"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Instagram</label>
                    <input 
                    type="text" 
                    id="Instagram" 
                    name='Instagram'
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your instagram link"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Linkedin</label>
                    <input 
                    type="text" 
                    id="Linkedin" 
                    name='Linkedin'
                        onChange={handleChange}
                  
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your linkedin link"  />
            </div>
            <button type='submit' className='border border-[#202192] py-2 w-full rounded-md bg-[#202192] text-white'>ต่อไป</button>
    </div>
                </form>
          
        </div>
    </div>
        </>
  )
}
export default page