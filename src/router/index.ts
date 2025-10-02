import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory('/material-dashboard-shadcn-vue/'),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          redirect: '/dashboard'
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: 'contacts',
          name: 'Contacts',
          component: () => import('@/views/Contacts.vue')
        },
        {
          path: 'companies',
          name: 'Companies',
          component: () => import('@/views/Companies.vue')
        },
        {
          path: 'deals',
          name: 'Deals',
          component: () => import('@/views/Deals.vue')
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: () => import('@/views/Tasks.vue')
        },
        {
          path: 'reports',
          name: 'Reports',
          component: () => import('@/views/Reports.vue')
        },
        {
          path: 'billing',
          name: 'Billing',
          component: () => import('@/views/Billing.vue')
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('@/views/Settings.vue')
        },
        {
          path: 'docs',
          name: 'Docs',
          component: () => import('@/views/Docs.vue')
        }
      ]
    }
  ]
})

export default router
