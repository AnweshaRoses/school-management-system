import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



export default function LoginForm() {
  const [emailid, setEmailid] = useState({email: "",password: ""})
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({email:emailid.email,password:emailid.password})
    });
    const json=await response.json()
    console.log(json)

    if(json.success){
      localStorage.setItem('token',json.authtoken);
      let history = useHistory()
      history.push("/");
    } else {
      console.clear()
      alert("Incorrect Email or Password")
    }
    
  }
  const onChange=(e)=>{
    setEmailid({...emailid,[e.target.name]: e.target.value})
  }
  return (
    <form action="/login" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" value={emailid.email} onChange={onChange} id="email" />
        <label for="password">Password</label>
        <input type="password" value={emailid.password} onChange={onChange}  id="password"/>
        <input type="submit" value="Submit"/>
    </form>
  )
}
