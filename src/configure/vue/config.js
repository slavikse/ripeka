import Vue from 'nativescript-vue';

const isProduction = global.ENV_MODE === 'production';

Vue.config.productionTip = false;
Vue.config.silent = isProduction;

function errorHandler(err, vm, info) {
  console.log('Vue errorHandler:', err, vm, info);

  if (isProduction) {
    // todo отправлять ошибку на сервер
  }
}

Vue.config.errorHandler = errorHandler;
