import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import js from './js/app'


Vue.config.productionTip = false

new Vue({
  router,
  js,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
