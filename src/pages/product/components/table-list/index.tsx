import { SearchOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import type { TableProps } from 'antd';
import { Button, Card, Flex, Form, Select, Space, Table } from 'antd';
import { type FC } from 'react';
import dogs from '../../../../../public/dogs.jpg';
import type { Action } from '../../data';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import { queryProductList } from './service';
import {
  addition_strategy,
  budget_adjustment,
  cpc_adjustment,
  price_adjustment_strategy,
  search_options,
  strategy_status,
  subtraction_strategy,
} from './_mock';

const FormItem = Form.Item;

type TableListProps = {
  clickEditAction: (action: Action) => void;
};

const TableList: FC<TableListProps> = ({ clickEditAction }) => {
  interface DataType {
    key: React.Key;
    title: string;
    dataIndex: string;
    address?: string;
    tags?: string[];
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '策略ID',
      dataIndex: 'clid',
      key: 'clid',
      render: (_, data) => (
        <Flex
          vertical
          gap={6}
          onClick={() => {
            clickEditAction({ action: 'action1', data: data });
          }}
        >
          <Space align="center">
            <img src={dogs} style={{ height: '60px', width: '60px' }}></img>
            <Flex vertical>
              <div>策略名称：差词精准否定</div>
              <div>操作对象：搜索词</div>
              <div>统计粒度：父AISN</div>
            </Flex>
          </Space>
          <div>库存充足_高点击_低转化_自然坑不在第一页_广告坑位在第一页_</div>
        </Flex>
      ),
    },
    {
      title: '策略有效期',
      dataIndex: 'clyxq',
      key: 'clyxq',
    },
    {
      title: 'Acos',
      dataIndex: 'acos',
      key: 'acos',
    },
    {
      title: '转化率',
      dataIndex: 'zhl',
      key: 'zhl',
    },
    {
      title: '广告花费',
      dataIndex: 'gghf',
      key: 'gghf',
    },
    {
      title: '广告销售额',
      dataIndex: 'ggxse',
      key: 'ggxse',
    },
    {
      title: '花费占比',
      dataIndex: 'hfzb',
      key: 'hfzb',
    },
    {
      title: '历史采纳效果',
      dataIndex: 'lscnxg',
      key: 'lscnxg',
    },
    {
      title: '操作',
      dataIndex: 'edit',
      key: 'edit',
      render: (_, data) => (
        <a
          onClick={() => {
            console.log(data);
            clickEditAction({ action: 'action2', data: data });
          }}
        >
          编辑
        </a>
      ),
    },
  ];

  const dataSource = [
    {
      key: '1',
      clid: '策略1',
      clyxq: '两个月',
      acos: '15%',
      zhl: '',
      gghf: '$',
      ggxse: 'zhl',
      hfzb: 'zhl',
      lscnxg: 'acos降10%',
      edit: '编辑',
    },
    {
      key: '2',
      clid: '策略2',
      clyxq: '两个月',
      acos: '15%',
      zhl: '',
      gghf: '$',
      ggxse: 'zhl',
      hfzb: 'zhl',
      lscnxg: 'acos降10%',
      edit: '编辑',
    },
  ];

  const searchData = () => {
    queryProductList({ count: 111 });
  };
  // const { styles } = useStyles();
  return (
    <GridContent>
      <>
        {/* <Suspense fallback={null}> */}
        <Card
          bordered={false}
          style={{
            marginBottom: '24px',
          }}
        >
          <StandardFormRow block style={{ paddingBottom: 0 }}>
            <FormItem name="search">
              <Flex gap={6} align="center" justify="center">
                <Button type="primary" icon={<SearchOutlined />} onClick={searchData}>
                  Search
                </Button>
                <Select defaultValue="全部" style={{ width: '40%' }} options={search_options} />
              </Flex>
            </FormItem>
          </StandardFormRow>

          <StandardFormRow title="减法策略" block style={{ paddingBottom: 0 }}>
            <FormItem name="addition_strategy">
              <TagSelect expandable>
                {addition_strategy.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="加法策略" block style={{ paddingBottom: 0 }}>
            <FormItem name="subtraction_strategy">
              <TagSelect expandable>
                {subtraction_strategy.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="预算调整" block style={{ paddingBottom: 0 }}>
            <FormItem name="budget_adjustment">
              <TagSelect expandable>
                {budget_adjustment.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="cpc调整" block style={{ paddingBottom: 0 }}>
            <FormItem name="cpc_adjustment">
              <TagSelect expandable>
                {cpc_adjustment.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="调价策略" block style={{ paddingBottom: 0 }}>
            <FormItem name="price_adjustment_strategy">
              <TagSelect expandable>
                {price_adjustment_strategy.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="策略状态" block style={{ paddingBottom: 0 }}>
            <FormItem name="strategy_status">
              <TagSelect expandable>
                {strategy_status.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
        </Card>
        <Card
          bordered={false}
          style={{
            marginBottom: '24px',
          }}
        >
          <Table columns={columns} dataSource={dataSource} />
        </Card>
        {/* </Suspense> */}
      </>
    </GridContent>
  );
};

export default TableList;
