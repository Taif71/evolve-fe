"use client"
import { Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useLogoutMutation } from '@/redux/features/apis/auth-api';
import Link from 'next/link';
const { Header } = Layout;

const NavBar = () => {
  const [logout] = useLogoutMutation();
  const handleLogout = () => {
    logout()
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
        <Menu.Item key="1"><Link href='/user'><b>Evolve College</b></Link></Menu.Item>
        <Menu.Item key="2">Mail history</Menu.Item>
        <Menu.Item key="3">
          <Link href='/courses'><span>Courses</span></Link>
        </Menu.Item>
        <Menu.Item key="4">Time Table: Friday, 12:00pm-2:00pm</Menu.Item>
        <Menu.Item key="5" style={{ float: 'right', marginLeft: '380px' }}>
          <span>Welcome, Afra!</span>
        </Menu.Item>
        <Menu.Item key="6" style={{ float: 'right', marginLeft: '0px' }} onClick={handleLogout}>
          {/* <LogoutOutlined /> */}
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
