"use client"
import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from 'next/navigation';
type Props = {}


const page = (props: Props) => {
    const router = useRouter()
    const [selected, setSelected] = useState([])
    
    console.log(selected)
  
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
      ];
      
    const handleSubmit = () => {
        console.log(selected)
        router.push('/')
        
    }

  return (
    <>
    <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[440px] flex flex-col gap-6 p-3'>

            <div className="flex gap-3 flex-col">
              <h1 className='text-3xl text-[#202192]'>เพิ่มข้อมูลโปรไฟล์</h1>
           
           
            <div className='w-full'>
                <label className="block mb-2 text-xl font-medium text-[#202192] dark:text-white">ความถนัด</label>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                />
            </div>

           
            <button className='border border-[#202192] py-2 w-full rounded-md bg-[#202192] text-white' onClick={handleSubmit}>ต่อไป</button>
    </div>
        </div>
    </div>
        </>
  )
}

export default page