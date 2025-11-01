import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Divider, Row } from 'antd'
import Topmenu from '../components/Topmenu'
const PublicLayout = () => {
  return (
    <>
        <Row justify='end'>
        <Col span={4}>
            <Topmenu/>
        </Col>
    </Row>
    <Divider></Divider>
    <Row justify='space-around' align='middle'>
        <Col span={12}>
            <Outlet/>
        </Col>
    </Row>
    </>
  )
}

export default PublicLayout