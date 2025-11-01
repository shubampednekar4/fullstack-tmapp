import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [ password, setPassword ] = useState('');

  const { login , loading, error } = useAuth();

const handleSubmit = async(e) => {
  e.preventDefault();
  console.log("username",username,password);
  const data = await login(username,password);
}
  return (
    <>
    {
      loading ? <>Loading...</> : (
       <>
       <form onSubmit={handleSubmit}>
        <h3>Login</h3>
    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Login</button>
    </form>
    </>
      )
    }
    </>
  )
}

export default Login