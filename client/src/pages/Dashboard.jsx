import React from 'react'
import { api } from '../api/api'

const Dashboard = () => {
    const handleclick = async() => {
        const result = await api.get('/');
        console.log('result is',result);
    }
  return (
    <div onClick={handleclick}>Dashboard</div>
  )
}

export default Dashboard