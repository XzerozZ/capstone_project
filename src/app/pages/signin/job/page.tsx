'use client'

import { Carousel } from 'flowbite-react'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

type Props = {}

const page = (props: Props) => {
        const router = useRouter()
        const {data: session, status} = useSession()
        console.log(session);

        React.useEffect(() => {
                if (status === 'unauthenticated') {
                    router.push('/auth/signin')
                }
            }, [status, router])
        const [userData, setUserData] = React.useState({
                career: "",
                facebook: "",
                instagram: "",
                linkedin: ""
        })
        console.log(userData)

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setUserData((prev:any) => ({
                        ...prev,
                        [name]: value,
                }));
        };

        const handleSubmit = async (e: any) => {
                e.preventDefault();
                console.log(userData)
                const formDataCareer = new FormData();
                const formDataContact = new FormData();
                const id: any = session?.user.id // จำเป็นต้องใช้ any และเรียก session?.user.id
                console.log(id)
                formDataCareer.append('id', id);
                formDataContact.append('id', id);
                formDataCareer.append('career', userData.career)
                formDataContact.append('facebook', userData.facebook)
                formDataContact.append('instagram', userData.instagram)
                formDataContact.append('linkedin', userData.linkedin)
                console.log("formDataCareer", formDataCareer)
                console.log("formDataContact", formDataContact)
                try {
                        const resCareer = await axios.post('/api/user/career', formDataCareer)
                        const resContact = await axios.post('/api/user/contact', formDataContact)
                }
                catch(err){
                        console.log("An Error Occured")
                        return;
                }

                router.push('/pages/signin/category')
                
            }
  
  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <form onSubmit={handleSubmit} className='w-[440px] flex flex-col gap-6 p-3'>

            <div className="flex gap-3 flex-col">
              <h1 className='text-3xl text-[#202192]'>เพิ่มข้อมูลโปรไฟล์</h1>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">อาชีพ</label>
                    <input 
                    type="text" 
                    id="job" 
                    name="career"
                    onChange={handleChange}
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="อาชีพ"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Facebook</label>
                    <input 
                    type="text" 
                    id="Facebook" 
                    name="facebook"
                    onChange={handleChange}
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your acebook link"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Instagram</label>
                    <input 
                    type="text" 
                    id="Instagram" 
                    name="instagram"
                    onChange={handleChange}
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your instagram link"  />
            </div>
            <div className='w-full'>
                    <label  className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">Linkedin</label>
                    <input 
                    type="text" 
                    id="Linkedin" 
                    name="linkedin"
                    onChange={handleChange}
                   
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="your linkedin link"  />
            </div>
            <button className='border border-[#202192] py-2 w-full rounded-md bg-[#202192] text-white'>ต่อไป</button>
    </div>
        </form>
    </div>
        </>
  )
}

export default page