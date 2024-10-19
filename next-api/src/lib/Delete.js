"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Delete = ({id}) => {
      const router = useRouter
      const deleteInfo = async () => {
            let data  = await fetch('http://localhost:3000/shaquib/'+id , {
                  method: 'DELETE'
            });
            data = await data.json();
            if(data.success){
                  alert("data deleted successfully")

                  
            }else{
                  alert("somthing wrong")
            }
           
      }
  return (
    <button onClick={deleteInfo} className="px-11 border-8 py-4 bg-[#14f7a0]">
      Delete
    </button>
  );
}

export default Delete
