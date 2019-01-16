import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.min.css';
import './../node_modules/lightbox2/src/css/lightbox.css';

import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/lightbox2/src/js/lightbox.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
