import Link from "next/link"

export default function BookmarkComponent({props}: any){ /* องค์ประกอบในหน้า Bookmark/Wishlist */
    return(
        <Link href={"/pages/jobs/details"} className="w-[30vw] h-[30vw] rounded-[50%] overflow-auto flex text-center items-center">
            <img src={props.image} alt={props.job}/>
        </Link>
    )
}