import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { history } from 'umi'; // 导入 history 工具

const CreateProfile: React.FC = () => {
  const onFinish = (values: any) => {
    // 处理注册逻辑，可以将用户信息提交到后端保存
    console.log('Received values:', values);
    message.success('注册成功！');

    // 注册成功后跳转到登录页面
    history.push('/user/login');
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>用户注册</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="用户ID"
          name="userId"
          rules={[{ required: true, message: '请输入用户ID' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, type: 'email', message: '请输入有效的邮箱地址' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: '请确认密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不一致');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProfile;
