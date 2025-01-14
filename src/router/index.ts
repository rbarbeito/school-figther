import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/combate',
      name: 'combate',
      component: () => import('../views/CombateView.vue'),
    },
    {
      path: '/escenario',
      name: 'escenario',
      component: () => import('../views/EscenarioView.vue'),
    },
    {
      path: '/',
      name: 'personajes',
      component: () => import('../views/PersonajesView.vue'),
    },

  ],
})

export default router
