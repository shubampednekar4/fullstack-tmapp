import React, { useContext, useState } from 'react'
import { loginService } from '../services/authService'
import { AuthContext } from '../context/authContext'
const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { setUser } = useContext(AuthContext)
    const login = async(creds) => {
        try {
            setLoading(true)
        const data = await loginService(creds);
        console.log('recieved data',data)
            localStorage.setItem('token',data)
            setUser(data);
        return { message : 'login success', status : "success"}
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
  return { login , loading, error}
}

export default useAuth