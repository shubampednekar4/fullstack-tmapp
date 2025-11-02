import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PublicLayout from './layout/PublicLayout'
import Login from './pages/Login'
import PrivateLayout from './layout/PrivateLayout'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path='login' element={<Login/>} index={true} />
          <Route path='register' element={<Register/>} />

        </Route>
        <Route element={<PrivateLayout/>}>
          <Route path="dashboard" element={<h3>Dashboard</h3>}/>
          <Route path="contactus" element={<h3>Contact</h3>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
