import React, { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreAddOutlined } from '@ant-design/icons'
const items = [
      {
    key: 'sub2',
    label: 'Home',
    icon: <AppstoreAddOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
        {
    key: 'sub4',
    label: 'About Us',
    icon: <AppstoreAddOutlined />,
        }
]

const Sidemenu = () => {
    const [current, setCurrent] = useState('sub2')
    const handleChange = (e) => {
        setCurrent(e.key)
    }
  return (
    <Menu onClick={handleChange} selectedKeys={[current]} mode='inline' items={items} />
  )
}

export default Sidemenu