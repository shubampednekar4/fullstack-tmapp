import React, { useContext } from 'react'
import Topmenu from '../components/Topmenu'
import { Col, Row } from 'antd'
import { Outlet, Navigate } from 'react-router-dom'
import Sidemenu from '../components/Sidemenu'
import { AuthContext } from '../context/authContext'
const PrivateLayout = () => {
    const { user , loading} = useContext(AuthContext)
  return (
    <>
    <Row justify='end' align='middle'>
        <Col span={4}>
            <Topmenu/>
        </Col>
    </Row>
    { loading ? <div>Loading...</div> : (
        <Row>
        <Col span={4}>
        <Sidemenu/>
        </Col>
        <Col span={20}>
          {user ?  <Outlet/> : <Navigate to={'login'}/> }
        </Col>
    </Row>
    )}
    
    </>
  )
}

export default PrivateLayout