import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

import routes from './routes';
import hooks from './hooks';

Vue.use(VueRouter);

const router = new VueRouter({
  pageRouting: true,
  routes,
});

hooks(router);
Vue.router = router;

router.replace('/Welcome');

export default router;
