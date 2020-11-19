import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Account from '../views/Account.vue'
import Crud from '../views/Crud.vue'
import List from '../views/List.vue'
import Add from '../views/Add.vue'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loggedin',
    name: 'Loggedin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Loggedin.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'account',
        name: 'Account',
        component: Account
      },
      {
        path: 'crud',
        name: 'Crud',
        component: Crud,
        children: [
          {
            path: 'list',
            name: 'List',
            component: List
          },
          {
            path: 'add',
            name: 'Add',
            component: Add
          },
          {
            path: 'game/:gameid',
            name: 'Game',
            component: Game
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
