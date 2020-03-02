import Layout from 'views/layout/layout'

const settings = {
  path: '/settings',
  component: Layout,
  redirect: '/settings/usersList',
  name: 'settings',
  meta: { title: '系统设置' },
  children: [
    {
      path: 'usersList',
      name: 'usersList',
      component: r =>
        require.ensure([], () =>
          r(require('views/settings/usersList'), 'usersList')
        ),
      meta: { title: '用户列表', needLogin: true }
    },
    {
      path: 'newUser',
      name: 'newUser',
      component: r =>
        require.ensure([], () =>
          r(require('views/settings/newUser'), 'newUser')
        ),
      meta: { title: '新增用户', needLogin: true }
    },
    {
      path: 'empower',
      name: 'empower',
      component: r =>
        require.ensure([], () =>
          r(require('views/settings/empower'), 'empower')
        ),
      meta: { title: '权限划分', needLogin: true }
    },
    {
      path: 'resetPW',
      name: 'resetPW',
      component: r =>
        require.ensure([], () =>
          r(require('views/settings/resetPW'), 'resetPW')
        ),
      meta: { title: '重置密码', needLogin: true }
    }
  ]
}

export default settings
