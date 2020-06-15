import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learnLetters',
    component: () => import('../views/learnLetters.vue'),
    children: [{
      path: '/',
      name: 'learnLetters',
      component: () => import('../views/learnLettersPage.vue'),
    },
    {
      path: '/testOnLetters',
      name: 'testOnLetters',
      component: () => import('../views/testOnLetters.vue'),
    },
     ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router