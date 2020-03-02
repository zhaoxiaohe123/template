import Layout from 'views/layout/layout'

const reportList = {
  path: '/reportList',
  component: Layout,
  redirect: '/reportList/kplList/selfKpl',
  name: 'reportList',
  meta: { title: '报表列表' },
  children: [
    {
      path: 'kplList',
      name: 'kplList',
      component: r =>
        require.ensure([], () =>
          r(require('views/reportList/entrance'), 'entrance')
        ),
      redirect: '/reportList/kplList/selfKpl',
      meta: { title: '绩效列表' },
      children: [
        {
          path: 'selfKpl',
          name: 'selfKpl',
          component: r =>
            require.ensure([], () =>
              r(require('views/reportList/kplList/selfKpl'), 'selfKpl')
            ),
          meta: { title: '个人绩效', needLogin: true }
        },
        {
          path: 'itemsKpl',
          name: 'itemsKpl',
          component: r =>
            require.ensure([], () =>
              r(require('views/reportList/kplList/itemsKpl'), 'itemsKpl')
            ),
          meta: { title: '项目绩效', needLogin: true }
        }
      ]
    },
    {
      path: 'proList',
      name: 'proList',
      component: r =>
        require.ensure([], () =>
          r(require('views/reportList/proList'), 'proList')
        ),
      meta: { title: '项目报表', needLogin: true }
    }
  ]
}

export default reportList
