import Layout from '@/layout'

const corporateRouter = {
  path: '/corporate',
  component: Layout,
  redirect: '/serCatalogManage/index.vue',
  meta: {
    title: '企业服务',
    icon: 'nested'
  },
  children: [
    {
      path: '/serCatalogManage',
      component: () => import('@/views/a_corporateService/serCatalogManage/index.vue'),
      name: 'serCatalogManage',
      meta: { title: '服务目录管理' }
    },
    {
      path: '/supManage',
      component: () => import('@/views/a_corporateService/supManage/index.vue'),
      name: 'supManage',
      meta: { title: '供应商管理' }
    },
    {
      path: '/supServiceManage',
      component: () => import('@/views/a_corporateService/supServiceManage/index.vue'),
      name: 'supServiceManage',
      meta: { title: '供应商服务管理' }
    },
    {
      path: '/levServiceManage',
      component: () => import('@/views/a_corporateService/levServiceManage/index.vue'),
      name: 'levServiceManage',
      meta: { title: '服务等级管理' }
    }
  ]
}

export default corporateRouter
