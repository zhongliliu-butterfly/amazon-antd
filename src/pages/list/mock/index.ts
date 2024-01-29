import { DefaultOptionType } from 'antd/es/select';

export const categoryOptions: DefaultOptionType[] = Array.from({ length: 12 }).map((_, index) => ({
  value: `cat${index + 1}`,
  label: `类目${index + 1}`,
}));

export const addition_strategy = [
  {
    label: '否词',
    value: 'fc',
  },
  {
    label: '否品',
    value: 'fp',
  },
  {
    label: '否词根',
    value: 'fcg',
  },
  {
    label: '暂停推广品',
    value: 'zttgp',
  },
  {
    label: '暂停投放词',
    value: 'zttfc',
  },
  {
    label: '暂停投放品',
    value: 'zttfp',
  },
  {
    label: '暂停广告活动',
    value: 'ztgghd',
  },
]

export const subtraction_strategy = [
  {
    label: '加大词',
    value: 'jdc',
  },
  {
    label: '加小词',
    value: 'jxc',
  },
  {
    label: '加品',
    value: 'jp',
  },
  {
    label: '手动移词晋升',
    value: 'sdycjs',
  },
  {
    label: '新增推广品',
    value: 'xztgp',
  }
]

export const budget_adjustment = [
  {
    label: '提高预算',
    value: 'tgys',
  },
  {
    label: '降低预算',
    value: 'jdys',
  },
  {
    label: '分时预算',
    value: 'fsys',
  }
]

export const cpc_adjustment= [
  {
    label: 'cpc寻优',
    value: 'xy',
  },
  {
    label: 'cpc守坑',
    value: 'sk',
  },
  {
    label: '分时cpc',
    value: 'fs',
  }
]

export const price_adjustment_strategy = [
  {
    label: '改价格',
    value: 'gjg',
  },
  {
    label: '秒杀活动',
    value: 'mshd',
  },
  {
    label: '促销折扣',
    value: 'cxzk',
  },
  {
    label: '会员活动',
    value: 'hyhd',
  }
]

export const strategy_status = [
  {
    label: '生效中',
    value: 'sxz',
  },
  {
    label: '暂停中',
    value: 'ztz',
  },
  {
    label: '已失效',
    value: 'ysx',
  }
]

