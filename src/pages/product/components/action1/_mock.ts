import type { TableProps } from 'antd';
import { DataType, FromList } from './data';
export const columns: TableProps<DataType>['columns'] = [
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

export const dataSource = [
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

export const fieldLabels: FromList[] = [
  { label: '类目', name: '类目', type: 'cascader', data: {} },
  { label: '父asin', name: '父asin', type: 'input', data: {} },
  { label: '部门', name: '部门', type: 'cascader', data: {} },
  { label: '负责人', name: '负责人', type: 'input', data: {} },
  { label: '店铺', name: '店铺', type: 'input', data: {} },
  { label: '广告花费', name: '广告花费', type: 'select', data: {} },
  { label: '', name: '', type: 'input', data: {} },
];
