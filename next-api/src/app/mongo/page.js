"use client"

import { useState } from "react"

const addEmployee = () => {

      const [name,setName] = useState("")
      
      const [salary, setsalary] = useState("");
      
      const [department, setdepartment] = useState("");
const handleAddEmployee = async () =>{
      // console.log(name,salary,department);
      let data = await fetch("http://localhost:3000/shaquib" ,{
            method: "POST",
            body : JSON.stringify({name,salary,department})
      });
      data =  await data.json();
     
if (data.success){
      alert("Employee Added Successfully");
      setName('')
      setsalary('')
      setdepartment('')

}else{
      alert("Employee Not Added");
}


     }

      


  return (
  <>
  <h1 className="text-2xl font-semibold pt-10 ml-5 mb-3">Add Employee | Mongo DB with POST Api in next js</h1>
<div className="px-6 py-2 ml-10">
<input className="px-6 py-2  border-2" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Employee name" />
<br/><br/>
<input className="px-6 py-2 border-2" type="text" value={salary} onChange={(e) => setsalary(e.target.value)} placeholder="Enter Employee Salary" />
<br/><br/>
<input className="px-6 py-2 border-2" type="text" value={department} onChange={(e) => setdepartment(e.target.value)} placeholder="Enter Employee Department" />
<br/><br/>
<button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold" onClick={handleAddEmployee}> Submit </button>
</div>
  </>
  )
}

export default addEmployee
