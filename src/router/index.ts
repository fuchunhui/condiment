import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Travel from '@/views/Travel.vue';
import Super from '@/views/Super.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Super',
    component: Super
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () =>
      import(/* webpackChunkName: "analysis" */ '@/views/Analysis.vue')
  },
  {
    path: '/acquisition',
    name: 'Acquisition',
    component: () =>
      import(/* webpackChunkName: "acquisition" */ '@/views/Acquisition.vue')
  },
  {
    path: '/magic',
    name: 'Magic',
    component: () =>
      import(/* webpackChunkName: "magic" */ '@/views/episodes/MagicCSS.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
