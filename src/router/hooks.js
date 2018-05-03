import Vue from 'nativescript-vue';

export default function hooks(router) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (Vue.store.state.user.logged) {
        next();
      } else {
        next({ name: 'Login' });
      }
    } else {
      next();
    }
  });
}
