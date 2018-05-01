import 'babel-polyfill';
import Vue from 'nativescript-vue';

import './styles/main.scss';
import './configure';

import store from './store';
// import router from './router';
import App from './components/App.vue';

Vue.config.silent = false;

new Vue({
  store,
  // router,
  render: h => h(App),
}).$start();
