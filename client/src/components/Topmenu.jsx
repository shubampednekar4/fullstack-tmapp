import React, { useContext, useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, ProfileFilled, ProfileOutlined, SettingOutlined } from '@ant-design/icons';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
    const items = [
         {
    label: 'Profile',
    key: 'profile',
    icon: <ProfileOutlined />,
    children: [
          { label: 'Contact Us', key: 'contactus' },
          { label: 'Logout', key: 'logout' },
        ],
  },
    ]

const Topmenu = () => {
    const [current , setCurrent ] = useState('SubMenu')
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleChange = (e) => {
        if(e.key === 'logout'){
            logout();
        }
        if(e.key === 'contactus'){
            navigate('/contactus');
        }
    }
  return (
    <Menu items={items} selectedKeys={[current]} mode='horizontal' onClick={handleChange} />
  )
}

export default Topmenu