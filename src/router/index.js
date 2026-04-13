import { createRouter, createWebHistory } from 'vue-router'
import PortalView from '../views/PortalView.vue'
import PcView from '../views/PcView.vue'
import MobileView from '../views/MobileView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'portal', component: PortalView },
    { path: '/pc', name: 'pc', component: PcView },
    { path: '/mobile', name: 'mobile', component: MobileView }
  ]
})

export default router