import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./comStyle.css"

export default function Home() {
    const navigate = useNavigate()
    
  return (
    <div className='sign-container'>
      <h1>Create Todos</h1>
      <div className="login-signup">
        <button id='btn-white' onClick={() => navigate("/login")}>Log In</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  )
}
