import React, { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

    const items = [
         {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
    ]

const Topmenu = () => {
    const [current , setCurrent ] = useState('SubMenu')
    const handleChange = (e) => {
        setCurrent(e.key)
    }
  return (
    <Menu items={items} selectedKeys={[current]} mode='horizontal' onClick={handleChange} />
  )
}

export default Topmenu