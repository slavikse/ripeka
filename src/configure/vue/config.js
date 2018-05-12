import Vue from 'nativescript-vue';
import './errorHandler';

const isProduction = global.ENV_MODE === 'production';

Vue.config.productionTip = false;
Vue.config.silent = isProduction;
