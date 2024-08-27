import Layout from '@/layout'

const propertyRouter = {
  path: '/property',
  component: Layout,
  redirect: '/photoHandManage/index.vue',
  meta: {
    title: '物业服务',
    icon: 'nested'
  },
  children: [
    {
      path: '/photoHandManage',
      component: () => import('@/views/a_propertyService/photoHandManage/index.vue'),
      name: 'photoHandManage',
      meta: { title: '随手拍管理' }
    },
    {
      path: '/visitManage',
      component: () => import('@/views/a_propertyService/visitManage/index.vue'),
      name: 'visitManage',
      meta: { title: '访客管理' }
    }
  ]
}

export default propertyRouter
