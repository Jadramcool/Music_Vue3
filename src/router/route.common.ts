// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';
import toolsRoutes from '@/router/routes/tools';

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: '/homeIndex',
    name: 'homeIndex',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
  },
  ...toolsRoutes,
];

export default commonRoutes;
