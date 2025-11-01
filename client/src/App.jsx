import { useState, useContext } from 'react'
import { AuthContext } from './context/authContext';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css'
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import Login from './pages/Login';

function App() {
  const  { user } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<PublicLayout/>}>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route element={<PrivateLayout/>}>
          <Route path='/dashboard' element={<h2>Dashboard</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
