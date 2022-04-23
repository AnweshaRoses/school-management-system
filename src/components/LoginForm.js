import React from 'react'

export default function LoginForm() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/api/auth/login")
  }
  return (
    <form action="/login" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="password">Password</label>
        <input type="password" id="password"/>
        <input type="submit" value="Submit"/>
    </form>
  )
}
