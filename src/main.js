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

// Список зависимостей на рассмотрение:
// https://market.nativescript.org/plugins/nativescript-toast
// https://market.nativescript.org/plugins/nativescript-fontawesome
// https://market.nativescript.org/plugins/nativescript-audio-ssi
// https://market.nativescript.org/plugins/nativescript-audio-player
// https://market.nativescript.org/plugins/nativescript-audio
// https://market.nativescript.org/plugins/nativescript-sound
