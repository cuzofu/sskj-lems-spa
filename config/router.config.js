export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {path: '/user', redirect: '/user/login'},
      {path: '/user/login', component: './User/Login'},
    ],
  },

  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [

      // dashboard
      {path: '/', redirect: '/lems/monitor/map'},
      {
        path: '/lems/monitor',
        name: 'monitor',
        routes: [
          {
            path: '/lems/monitor/map',
            component: './Monitor/EMap',
          },
          {
            path: '/lems/monitor/equipment',
            component: './Monitor/Equipment',
          },
        ],
      },
      {
        path: '/lems/analysis',
        name: 'analysis',
        routes: [
          {
            path: '/lems/analysis/offline',
            component: './Analysis/Offline',
          },
        ],
      },
      {
        path: '/lems/data',
        name: 'data',
        routes: [
          {
            path: '/lems/data/engs',
            component: './Data/Engs',
          },
        ],
      },

      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
