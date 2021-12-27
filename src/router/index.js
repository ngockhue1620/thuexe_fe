import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import MuonXe from '../components/MuonXe'
import TraXe from '../components/TraXe'

const routes = [
  { path: '/', component: MuonXe },
  { path: '/tra-xe', component: TraXe }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router
