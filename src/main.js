import 'babel-polyfill';
import Vue from 'nativescript-vue';

import './configure';
import './styles/main.scss';

import store from './store';
import router from './router';

new Vue({
  store,
  router,
}).$start();
