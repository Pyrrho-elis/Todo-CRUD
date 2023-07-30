import React, { useRef, useState, useEffect } from 'react'
import { logIn, useAuth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const currentUser = useAuth()

    const handleLogin = async () => {
        setLoading(true)
        try {
            await logIn(emailRef.current.value, passwordRef.current.value).then(
              navigate("/todos")
          )
        } catch (error) {
            alert("Error")
        } finally {
            setLoading(false)
            navigate("/todos")
        }
    }

    useEffect(() => {
      if (currentUser?.email) {
          navigate("/todos")
          console.log(currentUser.email)
      }
  },[currentUser])
    
  return (
    <div className='sign-container'>
        <div>Log in</div>
      <input type="email" placeholder="E-mail" ref={emailRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />

      <button disabled={loading || currentUser} onClick={handleLogin}>Log In</button>
    </div>
  )
}
