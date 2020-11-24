export const constantRouterMap = [

  {
    path: '/user/new',
    redirect: '/user/new/main',
    // component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-star-off',
      title: '最新动态'
    },
    children: [{
      path: 'main',
      //   component: NewMain,
      meta: { title: '最新动态' }
    }]
  },
  {
    path: '/user/social',
    redirect: '/user/social/main',
    // component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    },
    children: [{
        path: 'main',
        // component: SocialMain,
        meta: { title: '社交圈' }
      },
      {
        path: 'details/:name',
        // component: SocialDetails,
        meta: { title: '用户资料' }
      }
    ]
  },
  {
    path: '/user/blog',
    redirect: '/user/blog/main',
    // component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    },
    children: [{
        path: 'main',
        // component: BlogMain,
        meta: { title: '博客列表' }
      },
      {
        path: 'add',
        // component: BlogAdd,
        meta: { title: '发表博客' }
      },
      {
        path: 'edit/:id',
        // component: BlogEdit,
        meta: { title: '编辑博客' }
      },
      {
        path: 'details/:id',
        // component: BlogDetails,
        meta: { title: '博客详情' }
      }
    ]
  },
  {
    path: '/user/project',
    redirect: '/user/project/main',
    // component: Layout,
    meta: {
      type: "user",
      icon: 'el-icon-service',
      title: '开源项目'
    },
    children: [{
        path: 'main',
        // component: ProjectMain,
        meta: { title: '项目列表' }
      },
      {
        path: 'details/:name',
        // component: ProjectDetails,
        meta: { title: '项目详情' }
      }
    ]
  },
]