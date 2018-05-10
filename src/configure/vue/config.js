import Vue from 'nativescript-vue';

Vue.config.productionTip = false;
Vue.config.silent = global.ENV_MODE === 'production';

// todo эмитировать ошибку, посмотреть вывод. Отправлять ошибки на сервер.
// Vue.config.errorHandler = (err, vm, info) => {
//   console.log('+'.repeat(80));
//   console.log(err, vm, info);
//   console.dir(err);
//   console.log('+'.repeat(80));
// };
