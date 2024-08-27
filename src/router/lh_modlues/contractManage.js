import Layout from '@/layout'

const contractRouter = {
  path: '/contract',
  component: Layout,
  redirect: '/wholeRent/index.vue',
  meta: {
    title: '合同管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/wholeRent',
      component: () => import('@/views/a_contractManage/wholeRent/index.vue'),
      name: 'wholeRent',
      meta: { title: '整租合同' }
    },
    {
      path: '/backRent',
      component: () => import('@/views/a_contractManage/backRent/index.vue'),
      name: 'backRent',
      meta: { title: '退租合同' }
    },
    {
      path: '/bill',
      component: () => import('@/views/a_contractManage/bill/index.vue'),
      name: 'bill',
      meta: { title: '账单总览' }
    }
  ]
}

export default contractRouter
