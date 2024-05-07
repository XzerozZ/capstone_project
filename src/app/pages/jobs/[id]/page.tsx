import React from 'react'

type Props = {}


const page = ({props}:any) => {
    const MockData = {
        job:"รับฟรีแลนซ์พัฒนา UI/UX สำหรับเว็บโฆษณาเกม fps",
        image:"https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg",
        description:"Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem",
        type: "freelance",
        categories: ["WebDev", "QA Testing", "Communication"], 
        posted_date:"12/12/2566",
        status: "hiring",
        budget: "2000",
        com_name: "BIZ Company",
        com_rating : "4.5"
    };
  return (
   <>
   <div className='w-full flex justify-center mt-[50px]'>
        <div className='w-[1140px] flex flex-col gap-4'>
             <div className='flex flex-row justify-between '>
                <div className='flex gap-2 flex-col'>
                    <h1 className='text-[#202192] font-bold text-2xl '>{MockData.job}   โดย<span className='text-black text-2xl'> {MockData.com_name}</span></h1>
                    <h3>Publish {MockData.posted_date}</h3>
                    <h3>งบประมาณ : {MockData.budget}</h3>
                    <h3>สถานะ : {MockData.status}</h3>
                </div>
                <div>
                    <button className='bg-[#202192] px-3 py-1 rounded-md text-white'>สมัครงาน</button>
                </div>
             </div>
             <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Web Development</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Web Development</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Web Development</button>
             </div>
            <img src={MockData.image} alt="" />
            <p>{MockData.description}</p>
             

        </div>
   </div>

   </>
  )
}
export default page