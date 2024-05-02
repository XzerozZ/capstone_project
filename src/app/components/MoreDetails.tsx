export default function MoreDetails({display, info, extra}: any){
    return(
        <div className="flex my-5">
            <p className="w-full overflow-visible md:text-[1.1vw] text-[1.8vw] max-w-[150px]">{display} </p> {/* รายละเอียด */}
            <p className="w-full overflow-visible md:text-[1vw] text-[1.7vw]">{info} {extra}</p>
        </div>
    )
}