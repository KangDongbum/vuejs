import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding'
import DataBindingInputText from '../views/DataBindingInputText'
import CheckBox from '../views/CheckBox'
import CheckBox2 from '../views/CheckBox2'
import RadioBox from '../views/RadioBox'
import Button from '../views/Button'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName : "test" */  '../views/test.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinginputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/checkbox',
    name: '/CheckBox',
    component: CheckBox
  },
  {
    path: '/checkbox2',
    name: '/CheckBox2',
    component: CheckBox2
  },
  {
    path: '/radiobox',
    name: '/RadioBox',
    component: RadioBox
  },
  {
    path: '/button',
    name: '/Button',
    component: Button
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
