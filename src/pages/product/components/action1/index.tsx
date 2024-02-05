import {
  GridContent,
  ProFormCascader,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import { Suspense, type FC } from 'react';
import useStyles from './style.style';
import { fieldLabels } from './_mock';

type Action1Props = {
  actionData: any;
};

const Articles: FC<Action1Props> = ({ actionData }) => {
  const { styles } = useStyles();
  const renderFrom = (e: any) => {
    switch (e?.type) {
      case 'cascader':
        return (
          <Col key={e}>
            <ProFormCascader
              label={e.label}
              name={e.name}
              fieldProps={{
                // labelInValue: true,
                style: {
                  minWidth: 160,
                },
              }}
              placeholder="请选择"
            />
          </Col>
        );
      case 'select':
        return (
          <Col key={e}>
            <ProFormSelect
              label={e.label}
              name={e.name}
              fieldProps={{
                labelInValue: true,
                style: {
                  minWidth: 160,
                },
              }}
              placeholder="请选择"
            />
          </Col>
        );
      default:
        return (
          <ProFormText
            label={e.label}
            name={e.name}
            fieldProps={{
              style: {
                minWidth: 160,
              },
            }}
          />
        );
    }
  };
  return (
    <GridContent>
      <>
        <Suspense fallback={null}>
          <Card
            title={actionData?.name}
            bordered={false}
            style={{
              marginBottom: '24px',
            }}
          >
            <ProFormGroup>
              <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {fieldLabels?.map((e) => renderFrom(e))}
              </Row>
            </ProFormGroup>
          </Card>
          <Card
            title="数据明细表"
            bordered={false}
            style={{
              marginBottom: '24px',
            }}
          >
            {/* <Table columns={columns} dataSource={dataSource} className={styles.table} /> */}
          </Card>
        </Suspense>
      </>
    </GridContent>
  );
};

export default Articles;
