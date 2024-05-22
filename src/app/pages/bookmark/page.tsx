"use client"
import CardWork2 from "@/app/components/CardWork2"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Loader } from "rsuite"

const Bookmark = () => {
    const {data:session,status} = useSession()
    const [email, setEmail] = useState(session?.user?.email)
    const [bookmark, setBookmark] = useState([])
    const [filteredBookmark, setFilteredBookmark] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState('All');

    const fetchBookmark = async (email:any) => {
        const formData = new FormData()
        formData.append('email', email)
        try {
            const res = await axios.post('/api/bookmark/user', formData);
            setBookmark(res.data);
        } catch (error) {
            // Handle the error here
        }
    }

    useEffect(() => {
        if (session) {
            fetchBookmark(email);
        }
    }, [email, session]);

    useEffect(() => {
        if (bookmark.length > 0) {
            setIsLoading(false);
            applyFilter(filter);
        }
    }, [bookmark]);

    useEffect(() => {
        applyFilter(filter);
        if (bookmark.length > 0) {
            setIsLoading(false);
        }
    }, [filter,bookmark]);
    console.log(bookmark)
    const applyFilter = (filter:any) => {
        if (filter === 'All') {
            setFilteredBookmark(bookmark);
        } else {
            const filtered = bookmark.filter((item: { type: string, job: { type: string } }) => item.job.type === filter);
            setFilteredBookmark(filtered);
        }
    }

    if (isLoading) {
        return (
            <div className='flex justify-center h-[500px] items-center'>
                <Loader size="md" color='black'/>
            </div>
        )
    } else {
        return (
            
          <>
          
            <div className='w-full flex justify-center mt-[50px] max-sm:mt-[10px]'>
                <div className='w-[1140px] flex flex-col gap-4 p-3 min-h-screen mb-[-300px]'>
                    <div className="">
                        <div className="flex flex-col gap-1">
                            <h1 className='text-[#202192] font-bold text-3xl '>Bookmark</h1>
                            <label>รูปแบบของงาน</label>
                            <div className="flex flex-row gap-3 flex-wrap ">
                                <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('All')}>All</button>
                                <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('Fulltime')}>Fulltime</button>
                                <button className="px-2 py-1 border border-1 rounded-full hover:border-[#202192] hover:text-[#202192] hover:font-bold hover:bg-[#dde8fe]" onClick={() => setFilter('Freelance')}>Freelance</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid mx-auto grid-cols-4 gap-7 my-8 max-sm:grid-cols-2 max-sm:p-1">
                            {filteredBookmark.map((props, index) => (
                                <CardWork2 props={props} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div></>
        )
    }
}
export default Bookmark