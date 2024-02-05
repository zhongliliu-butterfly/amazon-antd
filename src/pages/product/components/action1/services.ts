import { request } from '@umijs/max';
import type { Params } from './data.d';

export async function queryFakeList(params: Params): Promise<any> {
  return request('/api/fake_list', {
    params,
  });
}

export async function queryProductList(params: Params): Promise<any> {
  return request('/api', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
