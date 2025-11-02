import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
const Register = () => {
    const { register, loading, error } = useAuth()
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const data =  await register(values);
        if(data.success){
            navigate('/dashboard')
        }
    }
  return (

    loading ? <h2>Loading...</h2>    : (<> <Form
    name="Register"
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

    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
        <p>
          <Link to='/login'>Already have account ?</Link>
        </p>
    </Form.Item>
  </Form>
  </>)
  )
}

export default Register