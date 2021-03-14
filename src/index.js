import Vue from 'vue';

import App from './App';

Vue.config.devtools = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
