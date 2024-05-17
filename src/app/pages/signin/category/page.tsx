"use client"
import React, { useEffect, useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import axios from 'axios';



const page = () => {
  const {data:session,status} = useSession()
  const router = useRouter()
  console.log(session?.user?.id)
  const [idUser, setId] = React.useState(session?.user?.id)
    const [selected, setSelected] = useState<{ label: string; value: string }[]>([]);

  
      
    console.log(session)
    
    console.log(selected)
  //  const fetchCategory = async () => {
  //   axios.get('/api/category').then((res) => {
  //       console.log(res)
  //       setCate(res.data)
  //   })
  //  }
 
  
    const options = [
        { label: "Game Developer", value: "Game Developer" },
        { label: "React Developer", value: "React Developer" },
        { label: "Next Developer", value: "Next Developer" },
      ];
      const handleSubmit = (id:any) => {
       
        console.log(selected)
        const formData = new FormData();
        formData.append('id', id);
       
        for (let i = 0; i < selected.length; i++) {
          formData.append('category', selected[i].value);
          console.log(selected[i].value)
        }
        axios.post('/api/user/category', formData).then((res) => {
          console.log(res);
          router.push('/pages/profile')
        });
      }

  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[440px] flex flex-col gap-6 p-3'>

            <div className="flex gap-3 flex-col">
              <h1 className='text-3xl text-[#202192]'>เพิ่มข้อมูลโปรไฟล์</h1>
           
           
            
                <div className='w-full '>
                                <label className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">ความถนัด</label>
                                <MultiSelect
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                />
                            </div>

                          
                <button  type='submit' className='border border-[#202192] py-2 w-full rounded-md bg-[#202192] text-white' onClick={()=> {handleSubmit(idUser)}} >ต่อไป</button>
              
    </div>
        </div>
    </div>
        </>
  )
}

export default page