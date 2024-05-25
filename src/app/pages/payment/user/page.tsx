"use client"
import React, { useEffect, useState } from 'react'
import { Loader, Tabs } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import image from '@/app/assets/visa.png'
import { CiCreditCard1 } from "react-icons/ci";
import axios from 'axios';
import Swal from 'sweetalert2';
import Chip from '@/app/assets/chip.png';
import { useSession } from 'next-auth/react';
import 'rsuite/dist/rsuite.min.css';
import {  Banking } from '@/interface';
import kbank from '@/app/assets/kbank.png'
import { set } from 'rsuite/esm/utils/dateUtils';
type Props = {}

const page = (props: Props) => {
  const {data:session,status} = useSession()
  const [value, setValue] = useState(false);
  const [CheckCredit , setCheckCredit] = useState(false)
  
  const [UserEmail, setUserEmail] = useState('' as any)
  const [isLoading, setIsLoading] = useState(true)
  const [CreditInfo, setCreditInfo] = useState<Banking>({} as Banking)
  const [PaymentHistory, setPaymentHistory] = useState([] as any[])
  

  

  const [CreditCard, setCreditCard] = useState(
    {
      email: '',
      city: '',
      postal_code:'',
      card: '',
      exp_month: '',
      exp_year: '',
      cvc: ''
    }
  )
  
 
  const handleChange = (e:any) => {
    const {name, value} = e.target
    setCreditCard((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (email:any) => {
    
   
    console.log(CreditCard,'test')
    const formData = new FormData()
    formData.append('email', email)
   
 
    formData.append('card_number', CreditCard?.card)
  
    if (value === true) {
      axios.post('/api/card/user', formData).then((res) => {
        console.log(res.data)
        if (res.data === 'Add Banking Successfully') {
          setCheckCredit(true)
          setIsLoading(true)

          Swal.fire({
            icon: 'success',
            title: 'Add banking success',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Please confirm billing information',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  const CheckCreditCard = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    await axios.post(`/api/checkcard`,formData).then((res) => {
        console.log(res.data)
        if (res.data.message === 'Not found card or bank account') {
          setCheckCredit(false)
          setIsLoading(false)
        }
        else{
          setCheckCredit(true)
          setIsLoading(false)
        }
    })
  }
  
  const fetchCreditCard = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    await axios.post(`/api/card/user/email`,formData).then((res) => {
        console.log(res.data)
        setCreditInfo(res.data)
       
    })
  }


 
  
 const DeleteCard = async (email:any) => {
  setIsLoading(true)
  setCheckCredit(false)
  const formData = new FormData()
  formData.append('email', email)
  await axios.delete(`/api/card/user/email`, { data: formData }).then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        setCheckCredit(false)
        setIsLoading(false)
        Swal.fire({
          icon: 'success',
          title: 'Delete card success',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
        setCheckCredit(true)
        setIsLoading(false)
      }
  })
 }

  const fetchUserHistory = async (email:any) => {
    const formData = new FormData()
    formData.append('email', email)
    await axios.post('/api/transfer/history',formData).then((res) => {
      console.log(res.data)
      setPaymentHistory(res.data)
    })
  
  }
  useEffect(() => {

    if (session) {
      setUserEmail(session?.user?.email)
      setCheckCredit(UserEmail)
      fetchUserHistory(UserEmail)
     
      CheckCreditCard(UserEmail)
      if (CheckCredit === true) {
          fetchCreditCard(UserEmail)
      }
      else if (CheckCredit === false) {
        setIsLoading(false)
      }
       
    }

  }, [session,CheckCredit])

  if (isLoading) {
    return  <div className='flex justify-center h-[500px] items-center'>
      <Loader size="md"  color='black'/>
    </div>
  }else {


  
  return (
    <>
  {
    CheckCredit ? 

  <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] bg-[#F9FAFA] '>
    <div className='w-[1140px] flex flex-col gap-6 p-3 min-h-screen '>
    <div className='rounded-md bg-white p-3 border border-[#F5F6F7]  '> 
    <Tabs defaultActiveKey="1" appearance="subtle">
      <Tabs.Tab eventKey="1" title="History">
        <div className='flex justify-center h-[300px]'>
          <div className=' my-auto'>
            no transaction
          </div>
        </div>
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Credit card">
       <div className='flex flex-col gap-3'>
         <div className='flex justify-between '>
          <h2 className='text-black'>Payment</h2>
          <button onClick={() => DeleteCard(UserEmail)} className='border border-[#ff0000] rounded-md  px-2 text-[#ff0000] hover:bg-[#ff0000] hover:text-white'>Delete banking</button>
         </div>
          <div className='flex flex-col  justify-between px-3 pb-2 credit-card w-[300px] h-[170px] border border-[f5f6f7] rounded-md bg-gradient-to-r from-sky-500 to-indigo-500'>
             <div>
             <div className='flex justify-between '>
                  <h5 className='text-white h-[30px] my-auto'>Banking account</h5>
                  <img src={kbank.src} alt=""  width={100} height={30} />
              </div>
              <div>
                  <img src={Chip.src} alt=""  className='h-[30px] '/>
              </div>
             </div>
              <div>
                <h6 className='text-white'>{CreditInfo?.user?.card_number?.match(/.{1,4}/g)?.join(' ') || '1234 1234 1234 1234'}</h6>
              </div>
              <div className='flex justify-between text-white'>
                  <h6 >{CreditInfo?.customer?.bank_account?.name}</h6>
              </div>
          </div>
          
       </div>
      </Tabs.Tab>
      
      </Tabs> 
      </div>
      </div>
      </div>:    <div className='w-full flex justify-center pt-[50px] max-sm:pt-[10px] bg-[#F9FAFA]'>
    <div className='w-[1140px] flex flex-col gap-6 p-3 min-h-screen '>
    <div className='rounded-md bg-white p-3 border border-[#F5F6F7]'> 
    <Tabs defaultActiveKey="1" appearance="subtle">
      <Tabs.Tab eventKey="1" title="History">
      <div className='flex justify-center h-[300px]'>
          <div className=' my-auto'>
            no transaction
          </div>
        </div>
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Credit card">
       <div>
          <h2 className='text-black'>Withdraw</h2>
          <div className='p-5 flex flex-col gap-3'>
            <h5 className='text-black'>Banking</h5>
            <div className='flex gap-3'>
              <button className='py-2 px-5 bg-[#F9FBFD] focus:border focus:border-[#202192] rounded-md border border-[#f9fbbfd]'>
                {/* <CiCreditCard1 size={30} className='text-[#202192]'/> */}
                 <img src={image.src} alt='test' width={100} height={100} />
                <h6 className='text-sm text-[#202192]'>Card</h6>
                
              </button>
            
            </div>
            <div className='flex flex-col gap-3'>
            <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input 
                        type="text" 
                        id="email" 
                        value={UserEmail}
                        name='email'
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="1234 1234 1234 1234" required />
             </div>
            
            <div  className='w-full'>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card number</label>
                        <input 
                        type="text" 
                        id="card" 
                        name='card'
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="1234 1234 1234 1234" required />
              </div>
              <div className='flex gap-2'>
           <input className='rounded-sm' type="checkbox" id="checkbox" name="checkbox" value="true" onChange={(e) => setValue(e.target.checked)}/>
            <label htmlFor="checkbox" className="text-sm text-gray-900 dark:text-white">Billing is same as information</label>
    
           </div>
              
          
           <div className='flex justify-end'>
              <button className='py-2 px-5 bg-[#202192] rounded-md text-white' onClick={() => handleSubmit(UserEmail)}>Add creditcard</button>
           </div>

            </div>
          </div>
       </div>

      </Tabs.Tab>
      
      </Tabs>
    </div>
    </div>
    </div>
   
  }
     
    </>
  )
}}

export default page