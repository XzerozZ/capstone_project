"use client"
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const params = useParams()
    const Router = useRouter()
    const PostPayment = async (orderid:any) => {
    const formData = new FormData()
    formData.append('orderId', orderid)
    console.log(orderid);
    
    axios.put('/api/job/sentwork/payment',formData).then((res) => {
      console.log(res.data)
        Router.push('/pages/manage')

      
    }
)
    }
  
  return (
    <div>success
        <button onClick={()=> PostPayment(params.id)}>finish</button>
    </div>
  )
}

export default page