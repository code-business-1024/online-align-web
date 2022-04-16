import { request } from 'umi';

// 获取字典列表
export async function getDictList(body: any) {
  return request('/api/dict/list', {
    method: 'POST',
    data: body,
  });
}
