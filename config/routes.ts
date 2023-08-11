export default [
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { name: '井字棋', icon: 'BorderlessTableOutlined', path: '/tic', component: './Tic-Tac-Toe' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
