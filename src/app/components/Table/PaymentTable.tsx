
import { Table } from 'flowbite-react'



const PaymentTable = ({data} : {data:any}) => {


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
                    <Table.Row >
                    <Table.Cell>{data?.product_name}</Table.Cell>
                    <Table.Cell>{data?.order_id || data?.transfer_id}</Table.Cell>
                    <Table.Cell>{data?.amount}</Table.Cell>
                    <Table.Cell><DateFormatter timestamp={data?.posted_date || data?.date} /></Table.Cell>
                    <Table.Cell>
                        <div className="text-[#39db4a]">{data?.status || 'succces'}</div>
                    </Table.Cell>
                    </Table.Row>
                )
                

    
}

export default PaymentTable