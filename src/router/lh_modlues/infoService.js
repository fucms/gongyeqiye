import Layout from '@/layout'

const infoRouter = {
  path: '/information',
  component: Layout,
  redirect: '/qualitySpace/index.vue',
  meta: {
    title: '信息服务',
    icon: 'nested'
  },
  children: [
    {
      path: '/qualitySpace',
      component: () => import('@/views/a_infoService/qualitySpace/index.vue'),
      name: 'qualitySpace',
      meta: { title: '优质空间' }
    },
    {
      path: '/roomManage',
      component: () => import('@/views/a_infoService/roomManage/index.vue'),
      name: 'roomManage',
      meta: { title: '房间管理' }
    }
  ]
}

export default infoRouter
