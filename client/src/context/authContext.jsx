import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null);

export const AuthProvder = ({children}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'shubam' ;
        // const token = 'shubam';
        if(token){
            setUser(token);
        }
    },[])

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  )
}
