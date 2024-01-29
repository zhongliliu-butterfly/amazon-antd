import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Avatar, Descriptions, Divider, Typography, Badge, Button } from 'antd';
import {
  CameraOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
  BellOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Center = () => {
  return (
    <PageContainer>
      <Card>
        <Row justify="center">
          <Col span={24}>
            <Title level={2}>个人中心</Title>
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col span={6}>
            <Avatar size={120} icon={<CameraOutlined />} />
            <Text type="secondary">点击上传头像</Text>
          </Col>
        </Row>
        <Divider />
        <Descriptions title="基本信息" bordered column={2}>
          <Descriptions.Item label="用户名">Sarati Ma</Descriptions.Item>
          <Descriptions.Item label="邮箱">sarati@example.com</Descriptions.Item>
          <Descriptions.Item label="账户状态" span={2}>
            <Badge status="success" text="已激活" />
          </Descriptions.Item>
          <Descriptions.Item label="注册时间">2022-01-01 10:30:00</Descriptions.Item>
          <Descriptions.Item label="上次登录时间">2022-01-10 15:45:00</Descriptions.Item>
        </Descriptions>
        <Divider />
        <Row justify="center">
          <Col span={24}>
            <Title level={3}>消息提醒设置</Title>
            <Button type="primary" icon={<BellOutlined />} style={{ marginBottom: '16px' }}>
              开启消息提醒
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row justify="center">
          <Col span={12}>
            <Title level={3}>账户认证</Title>
            <Text>实名认证：</Text>
            <Button icon={<CheckOutlined />} style={{ marginRight: '8px' }}>
              已认证
            </Button>
            <Button icon={<EditOutlined />}>修改认证信息</Button>
          </Col>
          <Col span={12}>
            <Title level={3}>账户状态</Title>
            <Text>账户状态：</Text>
            <Button icon={<CloseOutlined />} type="danger" style={{ marginRight: '8px' }}>
              封禁
            </Button>
            <Button icon={<EditOutlined />} type="primary">
              申请解封
            </Button>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Center;
