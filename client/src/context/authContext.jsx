import React, { createContext, useEffect, useState} from 'react'

export const AuthContext = createContext(null)
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(localStorage.getItem('token')){
            console.log('localstorage value',localStorage.getItem('token'))
            setUser(localStorage.getItem('token'))
        }
        setLoading(false)
    },[])
  return (
    <AuthContext.Provider value={{user, setUser, loading}}>
        {children}
    </AuthContext.Provider>
  )
}
