// import Vue from 'nativescript-vue';
// import VueRouter from 'vue-router';

import App from '../components/App.vue';
import Login from '../components/Login.vue';

// import hooks from './hooks';

// Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      meta: { auth: false },
      // props: false,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { auth: false },
    },
    {
      path: '*',
      redirect: '/App',
    },
  ],
});

// hooks(router);
// todo
// Vue.router = router;
// Vue.prototype.$router = router;

router.replace('/');

export default router;
