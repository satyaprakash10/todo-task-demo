import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

//  Pages
import TodoList from '@/pages/TodoList.vue'
import Home from '@/pages/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})
