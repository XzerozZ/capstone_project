import React from 'react'


const CardProfile = ({props}: {props:any}) => {
    console.log(props,'test');
    const DateFormatter = ({ timestamp }:any) => {
        if (!timestamp) {
          return <div>No timestamp provided</div>;
        }
      
        // Extract the date part
        const date = timestamp.substring(0, 10);
        // Replace hyphens with slashes
        const formattedDate = date.replace(/-/g, '/');
      
        return <div className='text-sm'>{formattedDate}</div>;
      };
      
    
  return (
    <>
    <div className='rounded-lg shadow- border-solid flex flex-col justify-between w-[250px]'>
        {/* <img src={props.image} className='rounded-t-lg'/> */}
        <img src={props?.post[0]?.user.image} alt="" className='rounded-lg' />
       <div className=' p-3 grow flex flex-col gap-2 justify-between bg-white rounded-lg text-black'>
          
            <h1 className='text-xl'>{props?.post[0]?.user?.username}</h1>
            <div className='flex flex-col gap-2 '>
                    <p>{props?.title}</p>
                   
                </div>

                <div className='flex flex-col justify-between'>
                    <div className='text-sm'>
                    <DateFormatter timestamp={props?.posted_date} />
                    </div>
                    <div className=' text-sm '>
                        งบประมาณ : {props?.budget} บาท
                    </div>
                </div>
       
       </div>

    </div>
    
    </>
  )
}
export default CardProfile