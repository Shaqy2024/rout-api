

import Delete from '@/lib/Delete';
import Link from 'next/link';
import React from 'react'


const getData = async () =>{
      let finel = await fetch("http://localhost:3000/shaquib");
      finel =  await finel.json();
    
     return finel.result;


}

const page = async () => {
      const sakib = await getData()
      console.log(sakib)
  return (
    <>
      <h1 className="text-2xl font-semibold p-5 ml-52">
        GET Employee Data from MongoDb
      </h1>

      <table className="border-2 ml-10">
        <thead>
          <tr>
            <td className="border-2 px-10 bg-[#f79c14] mb-5">Name</td>
            <td className="border-2 px-10 bg-[#f79c14] mb-2">salary</td>
            <td className="border-2 px-10 py-5 bg-[#f79c14] mb-2">
              department
            </td>
            <td className="border-2 px-10 py-5 bg-[#f79c14] mb-2">Action</td>
            <td className="border-2 px-10 py-5 bg-[#f79c14] mb-2">
              Removing 
            </td>
          </tr>
        </thead>
        <tbody>
          {sakib.map((item, i) => (
            <tr key={i}>
              <td className=" px-10 py-3 bg-[#e414f7] border-8">{item.name}</td>
              <td className=" px-10 py-3 bg-[#e414f7] border-8 ">
                {item.salary}
              </td>
              <td className=" px-10 py-3 bg-[#e414f7] border-8 ">
                {item.department}
              </td>
              <td>
                <Link
                  className="px-11 border-8 py-4 bg-[#14f7a0]"
                  href={`mongo-get/${item._id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <Delete id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default page
