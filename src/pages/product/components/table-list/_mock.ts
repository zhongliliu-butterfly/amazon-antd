import type { Request, Response } from 'express';
import type { ListItemDataType } from './data.d';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

function fakeList(count: number): ListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${Math.random().toString(36).slice(2, 6)}${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3] as
        | 'normal'
        | 'exception'
        | 'active'
        | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params: any = req.query;

  const count = params.count * 1 || 20;

  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

export default {
  'GET  /api/fake_list': getFakeList,
};

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
];

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
  },
];

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
  },
];

export const cpc_adjustment = [
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
  },
];

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
  },
];

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
  },
];

export const search_options = [
  {
    label: '按策略ID',
    value: '1',
  },
  {
    label: '部门',
    value: '2',
  },
  {
    label: '类目',
    value: '3',
  },
  {
    label: '商品',
    value: '4',
  },
  {
    label: '负责人',
    value: '5',
  },
];
