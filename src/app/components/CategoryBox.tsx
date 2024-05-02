export default function CategoryBox({to, display}: any){
    return(
        <a className="flex text-[#000000] text-opacity-55 bg-[#F1F1F1] w-full h-[160px] items-center justify-center rounded-[20px] shadow-[0_5px_2px_#bfbfbf]" href={to}>
            <p className="text-sm md:text-lg text-center">{display}</p>    
        </a>
    )
}