'use client'
import JobComponent from "@/app/components/JobComponent";
import CardWork from "@/app/components/CardWork";
import { useEffect, useState } from "react";
import axios from "axios";
import { Job } from "@/interface";
import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { log } from "console";


export default function Jobs(){

    const [job, setJob] = useState([] as Job[]) 
    const [FilterData, setFilterData] = useState([] as Job[])
    const [filter, setFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [category, setCategory] = useState([] as any[])


    const fetchCategory = async () => {
        try {
            axios.get('/api/category').then((res) => {
                
                setCategory(res.data)
                console.log(res.data)
            })
        } catch (error) {
         
        }
    }
    

    const fetchJob = async () => {
        try {
            axios.get('/api/job').then((res) => {
                console.log(res.data)
                setJob(res.data)
            })
        } catch (error) {
          
        }
    }
 

    

    useEffect(() => {
       if (job !== undefined || job !== null && category !== undefined || category !== null) {
        fetchJob()
        fetchCategory()
        let updatedJobs = job;
        if (filter === 'All') {
            setFilterData(job);
        } 

        if (filter !== 'All') {
            updatedJobs = updatedJobs.filter(job => job.type === filter);
        }
        
        if (categoryFilter !== 'All') {
            updatedJobs = updatedJobs.filter(job => job.categories.includes(categoryFilter));
        }
       setFilterData(updatedJobs);
       }
    }, [filter,job,category,categoryFilter])
    const uniqueCategories = Array.from(new Set(job.flatMap(job => job.categories)));


    if (job.length === 0) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }
    

    return(
      
         <div className="flex justify-center ">
              
              <div className="flex flex-col w-[1140px] mt-[20px] max-sm:p-1">
                <p className="text-3xl font-bold text-[#202192]">บอร์ดประกาศหางาน</p>
                <div className="flex flex-col"> {/* Filter */}
                    <div>
                    </div> {/* หมวด/ประเภทงาน, เติมเพิ่มต่อที่หลัง */}
                    <div> {/* ราคา/ปุ่มค้นหา */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label>หมวดหมู่งาน</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setCategoryFilter('All')}>All</button>

                                    {
                                        category.map((cate,index) => (
                                            <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" key={index} onClick={() => setCategoryFilter(cate.name)}>{cate.name}</button>
                                        ))
                                    }
                                </div>
                            </div>
                            
                           <div className="flex flex-col gap-1">
                                <label>รูปแบบของงาน</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('All')}>All</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('Full-time')}>Full-time</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('Freelance')}>Freelance</button>
                                </div>
                           </div>
                        </div>
                       
                    </div> 
                </div>
                <div className="grid mx-auto grid-cols-4 gap-7 my-8 max-sm:grid-cols-2 max-sm:p-1"> {/* ชุดผลลัพธ์ */}
                    {FilterData.map((props:any,index)=>
                    <CardWork props={props} key={index} />
                   )}
                </div>
            </div>
       
         </div>
    )
}