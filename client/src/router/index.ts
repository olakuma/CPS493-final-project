import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-activity',
      name: 'my-activity',
      component: () => import('../views/MyActivityView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/StatisticsView.vue')
    },
    {
      path: '/friends-activity',
      name: 'friends-activity',
      component: () => import('../views/FriendsActivityView.vue')
    },
    {
      path: '/people-search',
      name: 'people-search',
      component: () => import('../views/PeopleSearchView.vue')
    }
  ]
})

export default router
