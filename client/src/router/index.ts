import { createRouter, createWebHashHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getSession } from '@/model/session';
import { getUsers } from '@/model/users';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/my-activity',
      name: 'my-activity',
      component: () => import('../views/MyActivityView.vue'),
      beforeEnter: requireLogin
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/StatisticsView.vue'),
      beforeEnter: requireLogin
    },
    {
      path: '/friends-activity',
      name: 'friends-activity',
      component: () => import('../views/FriendsActivityView.vue'),
      beforeEnter: requireLogin
    },
    {
      path: '/people-search',
      name: 'people-search',
      component: () => import('../views/PeopleSearchView.vue'),
      beforeEnter: requireLogin
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      beforeEnter: requireLogin
    }
  ]
})

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const session = getSession();
  if(!session.user) {
    session.redirectUrl = to.fullPath;
    next('/login');
  } else {
      next();
  }
}

export default router
