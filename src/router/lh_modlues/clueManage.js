import Layout from '@/layout'

const clueRouter = {
  path: '/clue',
  component: Layout,
  redirect: '/clueDispatch/index.vue',
  meta: {
    title: '线索管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/clueDispatch',
      component: () => import('@/views/a_clueManage/clueDispatch/index.vue'),
      name: 'clueDispatch',
      meta: { title: '线索分派' }
    },
    {
      path: '/dispatchManage',
      component: () => import('@/views/a_clueManage/dispatchManage/index.vue'),
      name: 'dispatchManage',
      meta: { title: '线索管理' }
    },
    {
      path: '/materialsManage',
      component: () => import('@/views/a_clueManage/materialsManage/index.vue'),
      name: 'materialsManage',
      meta: { title: '线索跟进管理' }
    }
  ]
}

export default clueRouter
