import React, { useState } from "react";
import './App.css';

const AssignmentTwo = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [data, setData] = useState([]);


  const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === "fullname") {
      setName(value)
    }
    else if (name === "department") {
      setDepartment(value)
    }
    else if (name === "rating") {
      setRating(value)
    }
    // console.log(name,"name");
    // console.log(value,"value")
  };
  const handelClick = () => {
    const obj = {
      name: name,
      department: department,
      rating: rating
    }
    setData([...data, obj])
    setName("");
    setDepartment("")
    setRating("");
  }

  return (
    <div className="container">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div className="employee-form">
        <label> Name : <input type="text" name="fullname" value={name} onChange={handleChange} placeholder="Enter Name" /></label>
        <label > Dpartment :  <input type="text" name="department" value={department} onChange={handleChange} placeholder="Enter Department" /></label>
        <label > Rating :   <input type="text" name="rating" value={rating} onChange={handleChange} placeholder="Enter Rating" /> </label>
      </div>
      <div className="submit">
        <button onClick={handelClick}>Submit</button>
      </div>
      <div className="data">
        {data.map((item, index) => (
          <div className="storage">
            <h2 key={index}>{item.name} {item.department} {item.rating}</h2>
          </div>
        ))}
      </div>




    </div>


  );
};

export default AssignmentTwo;