import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueDraggable from 'vue-draggable'

Vue.use(VueDraggable)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
