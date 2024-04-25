import React from 'react';
import { Avatar, Space, Typography } from 'antd';
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FaAlignRight } from 'react-icons/fa';

const { Search } = Input;
const { Text } = Typography;

const CustomHeader = () => {
  return (
    <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }}>
      <Text level={3} type="secondary" style={{fontSize: '25px', }}>
        Welcome back, Salma
      </Text>

      <Space size="large" align="center">
        <Search placeholder="Search Dashboard" allowClear style={{ padding: 20 }} />

        <Space size="small" align="center">
          <MessageOutlined className="header-icon" />
          <NotificationOutlined />
          <Avatar icon={<UserOutlined />} />
        </Space>
      </Space>
    </Space>
  );
};

export default CustomHeader;
