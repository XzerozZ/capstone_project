"use client"
import BookmarkComponent from "@/app/components/BookmarkComponent"
import CardWork from "@/app/components/CardWork"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Loader } from "rsuite"



export default function Bookmark(/*{props}: any*/){
    const {data:session,status} = useSession()
    const [email, setEmail] = useState(session?.user?.email)
    const [bookmark, setBookmark] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchBookmark = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email)
        axios.post('/api/bookmark/user',formData).then((res) => {
            console.log(res)
            setBookmark(res.data)
        })
    }
    useEffect(() => {
        fetchBookmark(email)
        if (bookmark !== undefined || bookmark !== null) {
            setIsLoading(false)
        }
        
    }, [email])

    if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
    }else {

    return(
        <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px] '>
        <div className='w-[1140px] flex flex-col gap-4 p-3'>
           
                <div className="">
                <div className="flex flex-col gap-1">
                                <h1 className='text-[#202192] font-bold text-3xl '>Bookmark</h1>
                                <label>รูปแบบของงาน</label>
                                <div className="flex flex-row gap-3 flex-wrap ">
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Full-time</button>
                                   <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]">Freelance</button>
                                </div>
                           </div>
                    </div>
                    <div className="flex justify-center">   {/* Wrapper */}
                    <div className="grid mx-auto grid-cols-4 gap-7 my-8 max-sm:grid-cols-2 max-sm:p-1"> {/* ชุดผลลัพธ์ */}
                            {bookmark.map((props: any)=>
                            <CardWork props={props}/>)}
                        </div>
                    </div>
           
          </div>
           
        </div>
    )}
}