import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules,
  strict: debug,
});

// Vue.store = store;
Vue.prototype.$store = store;

export default store;
