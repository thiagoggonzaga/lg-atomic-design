import Vue from 'vue';

import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Paginator from 'primevue/paginator';

Vue.use(ToastService);
Vue.directive('ripple', Ripple);

Vue.prototype.$primevue = Vue.observable({ ripple: true });
Vue.prototype.$appState = Vue.observable({ inputStyle: 'outlined' });

Vue.component('p-input-text', InputText);
Vue.component('p-toast', Toast);
Vue.component('p-data-table', DataTable);
Vue.component('p-column', Column);
Vue.component('p-card', Card);
Vue.component('p-paginator', Paginator);
