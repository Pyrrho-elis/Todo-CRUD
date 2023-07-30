import React from 'react'
import { Link } from 'react-router-dom'
import './comStyle.css'

export default function Navbar() {
  return (
      <>
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      
    </nav>
    </>
  )
}
