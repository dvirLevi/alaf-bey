import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ButtonLink from '@/components/ButtonLink.vue'
import "../style/bootstrap.min.css"
import "../style/global.css"

Vue.config.productionTip = false
Vue.component('ButtonLink', ButtonLink)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
