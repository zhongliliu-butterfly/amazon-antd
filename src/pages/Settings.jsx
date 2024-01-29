import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Form, Input, Button, Row, Col, Divider, Typography, Avatar, Upload, message } from 'antd';
import { SaveOutlined, UploadOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Settings = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // 处理表单提交逻辑
    message.success('保存成功');
  };

  const onFinishChangePassword = (values) => {
    console.log('Received new password:', values.newPassword);
    // 处理密码修改逻辑
    message.success('密码修改成功');
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <PageContainer>
      <Card>
        <Row justify="center">
          <Col span={24}>
            <Title level={2}>个人设置</Title>
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col span={4}>
            <Avatar size={100} icon={<UploadOutlined />} />
            <Text type="secondary">点击上传头像</Text>
            <Upload
              customRequest={dummyRequest}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
          </Col>
        </Row>
        <Divider />
        <Form
          name="settings_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Row justify="center">
            <Col span={12}>
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: '请输入邮箱' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row justify="center">
            <Col>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  保存
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Divider />
        <Form
          name="change_password_form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinishChangePassword}
        >
          <Row justify="center">
            <Col span={12}>
              <Form.Item
                label="旧密码"
                name="oldPassword"
                rules={[{ required: true, message: '请输入旧密码' }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <Form.Item
                label="新密码"
                name="newPassword"
                rules={[{ required: true, message: '请输入新密码' }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={12}>
              <Form.Item
                label="确认新密码"
                name="confirmNewPassword"
                dependencies={['newPassword']}
                rules={[
                  { required: true, message: '请确认新密码' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row justify="center">
            <Col>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  修改密码
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default Settings;
