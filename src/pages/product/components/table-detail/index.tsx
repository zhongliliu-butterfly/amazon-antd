import { GridContent, ProForm, ProFormGroup, ProFormSelect } from '@ant-design/pro-components';
import type { TableProps } from 'antd';
import { Card, Col, Row, Table } from 'antd';
import { Suspense, type FC } from 'react';
import useStyles from './style.style';

type TableDetailProps = {
  //   clickEdit: (key: string) => void;
};

const Articles: FC<TableDetailProps> = () => {
  const { styles } = useStyles();
  interface DataType {
    key: string;
    ggz: string;
    tfcp: string;
    tfdx: string;
    sscp: string;
    ssdx: string;
    gb: string;
    dj: string;
    hf: string;
    xl: string;
    xse: string;
    cvr: string;
    cpc: string;
    acos: string;
    tjts: string;
    zrpm: string;
    ggpm: string;
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '广告组',
      dataIndex: 'ggz',
      key: 'ggz',
    },
    {
      title: '投放词/品',
      dataIndex: 'tfcp',
      key: 'tfcp',
    },
    {
      title: '投放对象',
      dataIndex: 'tfdx',
      key: 'tfdx',
    },
    {
      title: '搜索词/品',
      dataIndex: 'sscp',
      key: 'sscp',
    },
    {
      title: '搜索对象',
      dataIndex: 'ssdx',
      key: 'ssdx',
    },
    {
      title: '曝光',
      dataIndex: 'bg',
      key: 'bg',
    },
    {
      title: '点击',
      dataIndex: 'dj',
      key: 'dj',
    },
    {
      title: '花费',
      dataIndex: 'hf',
      key: 'hf',
    },
    {
      title: '销量',
      dataIndex: 'xl',
      key: 'xl',
    },
    {
      title: '销售额',
      dataIndex: 'sse',
      key: 'sse',
    },
    {
      title: 'CVR',
      dataIndex: 'cvr',
      key: 'cvr',
    },
    {
      title: 'ACOS',
      dataIndex: 'acos',
      key: 'acos',
    },
    {
      title: '统计天数',
      dataIndex: 'tjts',
      key: 'tjts',
    },
    {
      title: '自然排名',
      dataIndex: 'zrpm',
      key: 'zrpm',
    },
    {
      title: '广告排名',
      dataIndex: 'ggpm',
      key: 'ggpm',
    },
  ];

  const dataSource = [
    {
      key: '1',
      ggz: 'BD-05-076BD-05-076',
      tfcp: '投放词',
      tfdx: '2012 rm 1500 fuel pump',
      sscp: '搜索词',
      ssdx: '2012 dodge ram 1500 5.7 hemf fuel pump',
      gb: '16',
      dj: '14',
      hf: '11.78',
      xl: '0',
      xse: '0',
      cvr: '0.00%',
      cpc: '2.945',
      acos: '-',
      tjts: '30',
      zrpm: '-',
      ggpm: '-',
    },
    {
      key: '2',
      ggz: 'BD-05-076BD-05-076',
      tfcp: '投放词',
      tfdx: '2012 rm 1500 fuel pump',
      sscp: '搜索词',
      ssdx: '2012 dodge ram 1500 5.7 hemf fuel pump',
      gb: '16',
      dj: '14',
      hf: '11.78',
      xl: '0',
      xse: '0',
      cvr: '0.00%',
      cpc: '2.945',
      acos: '-',
      tjts: '30',
      zrpm: '-',
      ggpm: '-',
    },
  ];

  const fieldLabels = {
    name0: '站点',
    name1: '店铺',
    name2: '品线',
    name3: '负责人',
    name4: '库存标签',
    name5: '投放类型',
    name6: '自然排名标签',
    name7: '点击标签',
    name8: '适配标签',
    name9: '广告排名标签',
    name10: '流量标签',
    name11: 'cpc标签',
    name12: 'acos标签',
    name13: '搜索类型',
    name14: '转化标签',
  };
  return (
    <GridContent>
      <>
        <Suspense fallback={null}>
          <Card
            title="数据明细搜索"
            bordered={false}
            style={{
              marginBottom: '24px',
            }}
          >
            <ProForm className={styles.form}>
              <ProFormGroup labelLayout="inline">
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                  {Object.keys(fieldLabels)?.map((e: any) => (
                    <Col key={e}>
                      <ProFormSelect
                        label={fieldLabels[e]}
                        name={e}
                        fieldProps={{
                          labelInValue: true,
                          style: {
                            minWidth: 160,
                          },
                        }}
                        placeholder="请选择"
                      />
                    </Col>
                  ))}
                </Row>
              </ProFormGroup>
            </ProForm>
          </Card>
          <Card
            title="数据明细表"
            bordered={false}
            style={{
              marginBottom: '24px',
            }}
          >
            <Table columns={columns} dataSource={dataSource} className={styles.table} />
          </Card>
        </Suspense>
      </>
    </GridContent>
  );
};

export default Articles;
