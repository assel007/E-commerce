import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HelloView from '../views/HelloPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        redirect: { name: 'login' },
      },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})
export default router
