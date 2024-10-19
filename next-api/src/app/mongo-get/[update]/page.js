"use client";

import { useEffect, useState } from "react";

const updateEmployee = (props) => {
  const [name, setName] = useState("");

  const [salary, setsalary] = useState("");

  const [department, setdepartment] = useState("");
//  console.log(props.params.update)

useEffect(()=>{
      getproductsdetails();
},[])

const getproductsdetails = async () =>{
      let productID = props.params.update;
let getData = await fetch("http://localhost:3000/shaquib/"+productID);
 getData = await  getData.json();

console.log(getData);



if (getData.success){
      let result = getData.result;
      setName(result.name);
      setsalary(result.salary);
      setdepartment(result.department);
}
}


const updataData = async ()=>{
      let productID = props.params.update;
      let data = await fetch("http://localhost:3000/shaquib/"+productID,{
            method : "PUT",
            body : JSON.stringify({name,salary,department})
      });
 data = await data.json();
   if(data.result){
      alert("data has been updated")
   }



    
}

  return (
    <>
      <h1 className="text-2xl font-semibold pt-10 ml-5 mb-3">
        Update Employee | Mongo DB with PUT Api in next js
      </h1>
      <div className="px-6 py-2 ml-10">
        <input
          className="px-6 py-2  border-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Employee name"
        />
        <br />
        <br />
        <input
          className="px-6 py-2 border-2"
          type="text"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
          placeholder="Enter Employee Salary"
        />
        <br />
        <br />
        <input
          className="px-6 py-2 border-2"
          type="text"
          value={department}
          onChange={(e) => setdepartment(e.target.value)}
          placeholder="Enter Employee Department"
        />
        <br />
        <br />
        <button
          onClick={updataData}
          className="px-6 py-1 border-2 rounded  active:border-black"
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
};

export default updateEmployee;
