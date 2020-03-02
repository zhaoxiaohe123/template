const sideInfo = {
  data () {
    return {
      navEvent: {
        opened: true,
        router: true
      },
      navList: [
        {
          hasLevelOne: true,
          isClick: false,
          name: '报表列表',
          path: '/reportList',
          icon: 'vst-shezhi',
          children:
            [
              {
                hasLevelTwo: true,
                isClick: false,
                name: '绩效报表',
                path: '/reportList/kplList/',
                icon: 'icon_user',
                children: [
                  {isClick: false, name: '个人绩效', path: '/reportList/kplList/selfKpl'},
                  {isClick: false, name: '项目绩效', path: '/reportList/kplList/itemsKpl'}
                ]
              },
              {hasLevelTwo: false, isClick: false, name: '项目报表', path: '/reportList/proList'}
            ]
        },
        {
          hasLevelOne: true,
          isClick: false,
          name: '系统设置',
          path: '/settings',
          icon: 'vst-shezhi',
          children:
            [
              {hasLevelTwo: false, isClick: false, name: '用户列表', path: '/settings/usersList'},
              {hasLevelTwo: false, isClick: false, name: '新增用户', path: '/settings/newUser'},
              {hasLevelTwo: false, isClick: false, name: '权限划分', path: '/settings/empower'},
              {hasLevelTwo: false, isClick: false, name: '重置密码', path: '/settings/resetPW'}
            ]
        }
      ]
    }
  }
}

export {sideInfo}
