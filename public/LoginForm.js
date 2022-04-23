import React from 'react'

export default function LoginForm() {
  return (
    <form action="/login">
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="password">Password</label>
        <input type="password" id="password"/>
        <input type="submit" value="Submit"/>
    </form>
  )
}
