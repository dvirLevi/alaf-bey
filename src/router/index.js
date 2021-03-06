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
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue'),
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
  },
  {
    path: '/learnSounds',
    component: () => import('../views/learnSounds.vue'),
    children: [{
      path: '/',
      name: 'learnSounds',
      component: () => import('../views/learnSoundsPage.vue'),
    },
    {
      path: '/testOnSounds',
      name: 'testOnSounds',
      component: () => import('../views/testOnSounds.vue'),
    },
     ]
  },
  {
    path: '/learnLettersAndSounds',
    component: () => import('../views/learnLettersAndSounds.vue'),
    children: [{
      path: '/',
      name: 'learnLettersAndSoundsPage',
      component: () => import('../views/learnLettersAndSoundsPage.vue'),
    },
    // {
    //   path: '/testOnSounds',
    //   name: 'testOnSounds',
    //   component: () => import('../views/testOnSounds.vue'),
    // },
     ]
  },
  {
    path: '/readingPart',
    name: 'readingPart',
    component: () => import('../views/readingPart.vue'),
  },
  {
    path: '/partsOfRead/:id',
    name: 'partsOfRead',
    component: () => import('../views/partsOfRead.vue'),
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router