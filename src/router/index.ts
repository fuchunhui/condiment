import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Travel from '@/views/Travel.vue';
import Super from '@/views/Super.vue';
import Simple from '@/views/Simple.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Super',
    component: Super
  },
  {
    path: '/simple',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/magic',
    name: 'Magic',
    component: () =>
      import(/* webpackChunkName: "magic" */ '@/views/episodes/MagicCSS.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () =>
      import(/* webpackChunkName: "canvas" */ '@/views/episodes/Canvas.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
