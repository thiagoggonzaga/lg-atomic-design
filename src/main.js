import Vue from 'vue';

import './plugins/vee-validate';
import './plugins/prime';
import './plugins/lg-components';

import i18n from './plugins/language';
import router from './router';
import store from './store';

import App from './App';

import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
