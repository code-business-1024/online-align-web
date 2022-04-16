export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'tool.online-align',
    icon: 'table',
    paht: '/OnlineAlign',
    component: './OnlineAlign',
  },
  {
    name: 'tool.star-rating',
    icon: 'table',
    path: '/StarRating',
    component: './StarRating',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
