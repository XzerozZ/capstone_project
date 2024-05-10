import Link from "next/link";

export default function CategoryBox({data} : {data : any}){
    return(
       <div>
            <Link href={`/pages/jobs`}>
            <div className="hover:scale-105 relative m-1  ">
                
                <div className=''>
                    <img src={data.image} alt='image'  className="rounded-lg aspect-square" ></img>
                    <div className="absolute inset-0 bg-black opacity-0 sm:opacity-30 rounded-lg sm:hover:opacity-0"></div>
                </div>
                
                <div className='absolute bottom-0 left-0 overlay'>
                    <p className="text-white text-2xl -translate-y-[10px] mx-5  line-clamp-2	">{data.cate}</p>
                
                </div>
                
                </div>
            </Link>
       </div>
    )
}