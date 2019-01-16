import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

import './../node_modules/bulma/css/bulma.min.css';
import './../node_modules/lightbox2/src/css/lightbox.css';

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/lightbox2/src/js/lightbox.js';


Vue.use(VueAnalytics, {
  id: 'UA-132525741-1',
  checkDuplicatedScript: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
