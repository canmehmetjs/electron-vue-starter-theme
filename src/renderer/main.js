import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from '@router'
import store from '@store'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


// load vuex i18n module
import vuexI18n from 'vuex-i18n/dist/vuex-i18n.umd.js'
Vue.use(vuexI18n.plugin, store);

import translationsEn from '@/languages/en.json'
import translationsSq from '@/languages/sq.json'
// add translations directly to the application

Vue.i18n.add('en', translationsEn);
Vue.i18n.add('sq', translationsSq);
// set the start locale to use
Vue.i18n.set('en');


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
