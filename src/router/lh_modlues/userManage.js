import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/userDispatch/index.vue',
  meta: {
    title: '客户管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/userDispatch',
      component: () => import('@/views/a_userManage/userDispatch/index.vue'),
      name: 'userDispatch',
      meta: { title: '客户分派' }
    },
    {
      path: '/userManage',
      component: () => import('@/views/a_userManage/userManage/index.vue'),
      name: 'userManage',
      meta: { title: '客户管理' }
    }
  ]
}

export default userRouter
