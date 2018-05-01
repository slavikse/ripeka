import 'babel-polyfill';
import Vue from 'nativescript-vue';

import './styles/main.scss';
import './configure';

import store from './store';
import App from './components/App';

Vue.config.silent = false;

new Vue({
  store,
  render: h => h(App),
}).$start();
