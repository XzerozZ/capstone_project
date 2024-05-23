"use client"
import React, { useEffect, useState } from 'react'
import { Loader, Tabs } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import image from '@/app/assets/visa.png'
import { CiCreditCard1 } from "react-icons/ci";
import axios from 'axios';
import Swal from 'sweetalert2';
import Chip from '@/app/assets/chip.png';
import CitiesInThailand from '@/components/CityOptions';
import { MultiSelect } from 'react-multi-select-component';
import { useSession } from 'next-auth/react';
import 'rsuite/dist/rsuite.min.css';
type Props = {}

const page = (props: Props) => {
  const {data:session,status} = useSession()
  const [value, setValue] = useState(false);
  const [CheckCredit , setCheckCredit] = useState(true)
  const [selected, setSelected] = useState<{ label: string; value: string }[]>([]);
  const [Expire, setExpire] = useState('')
  const [UserEmail, setUserEmail] = useState('' as any)
  const [isLoading, setIsLoading] = useState(true)
  

  

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
  
  console.log(selected[0]?.value)
  const handleChange = (e:any) => {
    const {name, value} = e.target
    setCreditCard((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (email:any,Expire:any) => {
    const [month, year] = Expire.split("/");
   
    console.log(CreditCard,'test')
    const formData = new FormData()
    formData.append('email', email)
    formData.append('city', selected[0]?.label)
    formData.append('postal_code', CreditCard?.postal_code)
    formData.append('card_number', CreditCard?.card)
    formData.append('exp_month', String(parseInt(month, 10))) 
    formData.append('exp_year', String(2000 + parseInt(year, 10))) 
    formData.append('code', CreditCard.cvc)
    console.log(email)
    console.log(selected[0]?.label)
    console.log(CreditCard?.postal_code)
    console.log(CreditCard?.card)
    console.log(String(parseInt(month, 10)))
    console.log(String(2000 + parseInt(year, 10)))
    console.log(CreditCard.cvc)
    

    if (value === true) {
      axios.post('/api/card', formData).then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Payment success',
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
  console.log(UserEmail)
 console.log(CreditCard);
 const DeleteCard = async (email:any) => {
  
 }
 

  useEffect(() => {

    if (session) {
      setUserEmail(session?.user?.email)
      setCheckCredit(UserEmail)
      setIsLoading(false)
      CheckCreditCard(UserEmail)
       
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
          <button className='border border-[#ff0000] rounded-md  px-2 text-[#ff0000] hover:bg-[#ff0000] hover:text-white'>Delete card</button>
         </div>
          <div className='flex flex-col  justify-between px-3 pb-2 credit-card w-[300px] h-[170px] border border-[f5f6f7] rounded-md bg-gradient-to-r from-sky-500 to-indigo-500'>
             <div>
             <div className='flex justify-between '>
                  <h5 className='text-white h-[30px] my-auto'>Credit Card</h5>
                  <img src={image.src} alt=""  width={100} height={30} />
              </div>
              <div>
                  <img src={Chip.src} alt=""  className='h-[30px] '/>
              </div>
             </div>
              <div>
                  <h6 className='text-[#C0C0C0]'> 1234 1234 1234 1234</h6>
              </div>
              <div className='flex justify-between text-white'>
                  <h6 >Natchapon Ponlaem</h6>
                  <h6 >05/24</h6>
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
          <h2 className='text-black'>Payment</h2>
          <div className='p-5 flex flex-col gap-3'>
            <h5 className='text-black'>Payment method</h5>
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
             <div className='flex gap-3'>
            <div className='w-1/2'>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>

                                <MultiSelect
                                  
                                    options={CitiesInThailand}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    hasSelectAll={false}
                                    className='bg-gray-50'
                                />
                               
                            </div>
             <div className='w-1/2'>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal code</label>
                        <input 
                        type="text" 
                        id="postal_code" 
                        name='postal_code'
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="12345" required />
             </div>
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
              <div className='flex gap-3'>
            <div className='w-1/2'>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire</label>
                        <input 
                        type="text" 
                        id="expire" 
                        name='expire'
                        onChange={(e) => setExpire(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="MM/YY" required />
             </div> 
             <div className='w-1/2'>
             <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CVC</label>
                        <input 
                        type="text" 
                        id="cvc" 
                        name='cvc'
                        onChange={(e) => handleChange(e)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#202192] focus:border-[#202192] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#202192] dark:focus:border-[#202192]" placeholder="CVC" required />
             </div>
            </div>
           <div className='flex gap-2'>
           <input className='rounded-sm' type="checkbox" id="checkbox" name="checkbox" value="true" onChange={(e) => setValue(e.target.checked)}/>
            <label htmlFor="checkbox" className="text-sm text-gray-900 dark:text-white">Billing is same as information</label>
    
           </div>
           <div className='flex justify-end'>
              <button className='py-2 px-5 bg-[#202192] rounded-md text-white' onClick={() => handleSubmit(UserEmail,Expire)}>Add creditcard</button>
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