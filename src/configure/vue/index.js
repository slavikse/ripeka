import Vue from 'nativescript-vue';

import './config';
import './globalComponents';

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);
