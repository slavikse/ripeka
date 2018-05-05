import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import modules from './modules';
import hooks from './hooks';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,
  modules,
});

const token = localStorage.getItem('token');

// Проверка авторизации.
if (token) {
  // todo раскомментировать
  // store.dispatch('user/logged', token);
}

Vue.store = store;
hooks(modules.constant.state.api_uri);

// Чит, чтобы успокоить nativescript-vue.
Vue.prototype.$store = store;

export default store;
