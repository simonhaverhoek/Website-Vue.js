import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import LocationsView from '../views/LocationsView.vue'
import SocialsView from '../views/SocialsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView,
    },
    {
      path: '/socials',
      name: 'socials',
      component: SocialsView,
    },
  ],
})

export default router