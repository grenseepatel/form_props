import Component from './Component'
import './App.css'
import { useState } from 'react'

function App() {

  const [formData,setformData]=useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    gender: "",
    married: "",
    city: "",
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setformData((data) => ({
        ...data,
        [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
 
  return (
    <>
      <h1>Form</h1>
      <Component 
      name={formData.name}
      email={formData.email}
      phoneNo={formData.phoneNo}
      address={formData.address}
      gender={formData.gender}
      married={formData.married}
      city={formData.city}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    </>
  )
}

export default App
