import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetTodos from './components/GetTodos'
import SignUp from './components/SignUp'
import Login from './components/Login'

import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className="app">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/todos' element={<GetTodos />}/>
        </Routes>
    </div>
    </>
  )
}

export default App
