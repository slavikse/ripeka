import Vue from 'nativescript-vue';
// Для работоспособности был выключен uglify в ./webpack.config.js
import 'nativescript-localstorage';

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
