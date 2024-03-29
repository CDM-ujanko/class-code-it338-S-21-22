import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/:class(\\w{2}\\d{3}-\\w{1,2}-\\d{2}-\\d{2})',
    name: 'Class',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassView.vue'),
    // Note: not needed for example only.
    // children: [{
    //   path: 'home',
    //   name: 'Class home',
    //   component: () => import(/* webpackChunkName: "about" */ '../views/ClassView.vue'),
    // }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
})

export default router
