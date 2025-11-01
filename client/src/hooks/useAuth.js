import React, { useContext, useState } from 'react'
import { loginService } from '../services/authService'
import { AuthContext } from '../context/authContext';
const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})
    const [error, setError] = useState(null);
    const { setUser } = useContext(AuthContext);
  const login = async(username,password) => {
    try {
        setLoading(true);
        if(!username || !password){
            return { message : "empty creds", success : false}
        }
        const result = await loginService(username,password);
        console.log(result);
        setUser(result);
        localStorage.setItem('token',result);
       return result;
    } catch (error) {
        setError(error)
    }finally{
        setLoading(false);
    }
  }

  return { login, loading, error, data }
}

export default useAuth