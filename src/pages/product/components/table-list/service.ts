import { request } from '@umijs/max';
import type { ListItemDataType, Params } from './data.d';

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api/fake_list', {
    params,
  });
}

export async function queryProductList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/api', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
