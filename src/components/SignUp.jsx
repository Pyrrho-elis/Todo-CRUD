import React, { useRef, useState, useEffect } from 'react'
import { signUpUser, useAuth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './comStyle.css'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const currentUser = useAuth()

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSignUp = async () => {
        setLoading(true)
        try {
            await signUpUser(emailRef.current.value, passwordRef.current.value).then(
                navigate("/todos")
            )
        } catch (error) {
            alert("Error")
        } finally {
            setLoading(false)
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
        <h1>{currentUser && currentUser.email}</h1>
        <h2>Sign Up With Your Email!</h2>
        <input type="email" placeholder="E-mail" name="email" ref={emailRef} />
        <input type="password"placeholder="Password" name="password" ref={passwordRef} />

        <button disabled={ loading || currentUser } onClick={handleSignUp}>Sign Up</button>
    </div>
  )
}
