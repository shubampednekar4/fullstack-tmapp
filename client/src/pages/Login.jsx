import React from 'react'
import { Button, Checkbox, Input, Form } from 'antd'
import useAuth from '../hooks/useAuth'
import { Link, Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
    const { login , loading, error} = useAuth();
    const navigate = useNavigate();
    const onFinish =async (values) => {
          const data = await login(values)
            if(data.success){
            navigate('/dashboard')
               }
              }
    
  return (
    loading ? <h2>Loading...</h2>:(
      <>
      <Form
    name="Login"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
        <p>
          <Link to='/register'>New User ?</Link>
        </p>
    </Form.Item>
  </Form>

  </>
  )
)
}

export default Login