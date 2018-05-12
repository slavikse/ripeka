import Vue from 'nativescript-vue';

const isProduction = global.ENV_MODE === 'production';

function errorHandler(err, vm, info) {
  console.log('Vue errorHandler:', err, info);

  if (isProduction) {
    // todo отправлять ошибку на сервер
  }
}

Vue.config.errorHandler = errorHandler;
