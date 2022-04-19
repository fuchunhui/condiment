import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Travel from '@/views/Travel.vue';
import Super from '@/views/Super.vue';
import Simple from '@/views/Simple.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'super',
    component: Super
  },
  {
    path: '/simple',
    name: 'simple',
    component: Simple
  },
  {
    path: '/travel',
    name: 'travel',
    component: Travel
  },
  {
    path: '/magic',
    name: 'magic',
    component: () =>
      import(/* webpackChunkName: "magic" */ '@/views/episodes/MagicCSS.vue')
  },
  {
    path: '/canvas',
    name: 'canvas',
    component: () =>
      import(/* webpackChunkName: "canvas" */ '@/views/episodes/Canvas.vue')
  },
  {
    path: '/amazing',
    name: 'amazing',
    component: () =>
      import(/* webpackChunkName: "canvas" */ 'src/views/episodes/AmazingCSS.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
