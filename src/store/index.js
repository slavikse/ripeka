import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import * as modules from './modules';
import hooks from './hooks';

Vue.use(Vuex);

const strict = global.ENV_MODE === 'development';
const store = new Vuex.Store({ modules, strict });
const token = localStorage.getItem('token');

// Проверка авторизации.
if (token) { store.dispatch('user/logged', token); }

hooks(modules.constant.state.api_uri);

Vue.store = store;
// Чит, чтобы успокоить nativescript-vue.
Vue.prototype.$store = store;

export default store;
