import React, { useContext } from 'react'
import { useState } from 'react';
import authContext from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function LoginForm() {
  const [emailid, setEmailid] = useState({email: "", password: ""})
  const context = useContext(authContext)
  const {loginUser, loginState} = context
  const navigate = useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    loginUser(emailid, navigate)
    setEmailid({email: "", password: ""})
  }

  const onChange=(e)=>{
    setEmailid({...emailid, [e.target.name] : e.target.value})
  }

  useEffect(() => {
    if(loginState)
        navigate('/Home')
  })

  return (
    <form action="/login" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name='email' value={emailid.email} onChange={onChange} id="email" />
        <label for="password">Password</label>
        <input type="password" name='password' value={emailid.password} onChange={onChange}  id="password"/>
        <input type="submit" value="Submit"/>
    </form>
  )
}
