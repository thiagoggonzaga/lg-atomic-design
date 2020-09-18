import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultLayout from '@/components/templates/Default';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: 'tarefas',
    component: DefaultLayout,
    children: [{
      path: '/tarefas',
      name: 'tarefas',
      component: () => import(/* webpackChunkName: "tarefas" */ '../components/pages/tarefas/Index.vue'),
    }, {
      path: '/todoist',
      name: 'todoist',
      component: () => import(/* webpackChunkName: "todoist" */ '../components/pages/todoist/Index.vue'),
    }, {
      path: '/configuracao',
      name: 'configuracao',
      component: () => import(/* webpackChunkName: "configuracao" */ '../components/pages/configuracao/Index.vue'),
    }],
  }],
});
