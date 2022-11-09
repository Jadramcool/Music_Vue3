// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const toolsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/tools/excelTool',
    name: 'excelTool',
    meta: {
      title: '字符串转化为列表',
      icon: '',
    },
    component: () => import('@/views/tools/excelTool.vue'),
  },
  {
    path: '/tools/englishText',
    name: 'englishText',
    meta: {
      title: '英文文本转换',
      icon: '',
    },
    component: () => import('@/views/tools/englishText.vue'),
  },
];

export default toolsRoutes;
