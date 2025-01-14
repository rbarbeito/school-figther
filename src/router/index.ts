import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'combate',
      component: () => import('../views/CombateView.vue'),
    },
    {
      path: '/',
      name: 'escenario',
      component: () => import('../views/EscenarioView.vue'),
    },
    {
      path: '/',
      name: 'PersonajesView',
      component: () => import('../views/PersonajesView.vue'),
    },

  ],
})

export default router
