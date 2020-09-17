import Vue from 'vue';
import { ValidationProvider, localize } from 'vee-validate';
import brLocale from 'vee-validate/dist/locale/pt_BR.json';

Vue.component('ValidationProvider', ValidationProvider);

localize('pt_BR', brLocale);
