"use client"
import axios from 'axios';
import { Sidebar } from 'flowbite-react';
import { Table } from "flowbite-react";

import React, { useEffect, useState } from 'react'

import { HiChartPie } from 'react-icons/hi';

import 'rsuite/dist/rsuite.min.css';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loader, SelectPicker } from 'rsuite';
import Swal from 'sweetalert2';

const page = () => {
    const router = useRouter();
    const {data:session ,status} = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [UserRole, setUserRole] = useState(session?.user?.role);
   
    const [user, setUser] = useState<any>([]);

    const fetchUser = async () => {
    
        await axios.get(`/api/user`,)
        .then((res) => {
           
            setUser(res.data);
        });
    }


  
   
   
   

    const deleteRestaurant = (id:any) => {
        const formData = new FormData();
        formData.append('id',id)
        axios.delete(`/api/user`, { data: formData })
        .then((res) => {
            Swal.fire({
                icon: 'success',
                title: 'Delete Success',
                showConfirmButton: false,
                timer: 1500
            })
        });
    }
   


   



    useEffect(() => {
       if (session){
        setUserRole(session?.user?.role)
        fetchUser();
      
        console.log(session?.user?.role);
       
          
          if (UserRole === 'user' || UserRole === 'company') {
            console.log('not admin');
            
            router.push('/');
          }
          else if (user?.role == 'admin') {
             console.log(' admin');
              setIsLoading(false);
          }
        
       
       }
        
      }, [session, router,user,UserRole]);
    
      if (isLoading) {
        return  <div className='flex justify-center h-[500px] items-center'>
          <Loader size="md"  color='black'/>
        </div>
      }else{

  return (
   <>
 


<div className='flex justify-center'>
	<div>
	
	</div>
	<div className='w-full flex flex-row '>
		<div className='w-1/5'>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin" icon={HiChartPie}>
            User
          </Sidebar.Item>
         
        
         
         
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
		
		</div>
	<div className='w-4/5 h-[700px] flex flex-col gap-3 mr-8'>
    <div>
    </div>
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
         
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>role</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
         {
            user.map((item:any, index:number) => {
                return (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                     <img src={item.image} alt=""  className='rounded-full w-[50px] h-[50px]'/>
                    </Table.Cell>
                    <Table.Cell>{item?.username}</Table.Cell>
                    <Table.Cell>{item?.email}</Table.Cell>
                    <Table.Cell>{item?.role}</Table.Cell>
                    <Table.Cell>
                        <div className='flex gap-5'>
                           
                            <button onClick={() => deleteRestaurant(item.user_id)} className="font-medium text-[#ff0000] hover:underline dark:text-[#ff0000]/50">
                                Delete
                            </button>
                        </div>
                    </Table.Cell>
                  </Table.Row>
                )
            })
         } 
          
        
        </Table.Body>
      </Table>
    </div>
			
		</div>
	</div>
</div>

</>
  )
}}
export default page