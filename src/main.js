import 'babel-polyfill';
import Vue from 'nativescript-vue';

import './styles/main.scss';
import './configure';

import store from './store';
import router from './router';

Vue.config.silent = false;

new Vue({
  store,
  router,
}).$start();
