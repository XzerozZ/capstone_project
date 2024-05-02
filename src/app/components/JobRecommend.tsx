import Link from "next/link"

export default function JobRecommend({props}: any){
    return(
        <Link href="/" className="overflow-auto flex text-center items-center relative w-[15vw]">
                <img src="https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg" className="hover:z-[-3]"/> {/* Mock image / ไม่สมบูรณ์ */}
                <p className="z-[-1] absolute overflow-hidden h-[100px]">Lorem ipsum dolor sit amet. Est atque dicta cum perferendis temporibus ut numquam quam eos quaerat tenetur quo tenetur exercitationem in incidunt vitae et aliquid consequatur! Et reiciendis reprehenderit sit reiciendis voluptatem</p> {/* ชื่องาน / อาจมีคำอธิบายเพิ่ม */}
        </Link>
    )
}