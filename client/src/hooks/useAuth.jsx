import React, { useContext, useState } from 'react'
import { loginService, registerService } from '../services/authService'
import { AuthContext } from '../context/authContext'
const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { setUser } = useContext(AuthContext)
    const login = async(creds) => {
        try {
            setLoading(true)
        const data = await loginService(creds);
        if(data.success){
            localStorage.setItem('token',data.token)
            setUser(data.data);
        }
            
        return data;
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }

    const register = async(values) => {
        try {
            setLoading(true)
            const user = await registerService(values);
            console.log('register', user)
            if(user.success){
                localStorage.setItem('token', user.data._id)
                setUser(user.data._id)
            }
            return user;
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
  return { login , register,  loading, error}
}

export default useAuth