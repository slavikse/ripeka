import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

import Game from '../components/Game';
import Login from '../components/Login.vue';

// import hooks from './hooks';

Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game,
      // meta: { auth: false },
      // props: false,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      // meta: { auth: false },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

// hooks(router);
Vue.router = router;

router.replace('/');

export default router;
