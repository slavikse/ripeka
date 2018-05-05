import Vue from 'nativescript-vue';

import './plugins';
import './globalComponents';

const debug = process.env.NODE_ENV === 'production';

Vue.config.productionTip = false;
Vue.config.silent = debug;
// Vue.config.debug = !debug;

// Vue.config.errorHandler = (err, vm, info) => {
//   console.log('+'.repeat(80));
//   console.log(err, vm, info);
//   console.dir(err);
//   console.log('+'.repeat(80));
// };
