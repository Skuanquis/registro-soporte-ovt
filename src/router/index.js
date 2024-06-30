import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      path: '/dashboard',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('@/views/pages/Perfil.vue')
        },
        {
          path: '/registrar-atencion',
          name: 'registrar-atencion',
          component: () => import('@/views/pages/RegistrarAtencion.vue')
        },
        {
          path: '/ver-atenciones',
          name: 'ver-atenciones',
          component: () => import('@/views/pages/VerAtenciones.vue')
        },
        {
          path: '/preguntas-frecuentes',
          name: 'preguntas-frecuentes',
          component: () => import('@/views/pages/PreguntasFrecuentes.vue')
        }
      ]
      /*children: [
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('@/views/pages/Perfil.vue')
        },
        {
          path: '/registrar-atencion',
          name: 'registrar-atencion',
          component: () => import('@/views/pages/RegistrarAtencion.vue')
        },
        {
          path: '/ver-atenciones',
          name: 'ver-atenciones',
          component: () => import('@/views/pages/VerAtenciones.vue')
        },
        {
          path: '/logout',
          name: 'logout',
          component: Login
        },
        {
          path: '/reportes',
          name: 'reportes',
          component: () => import('@/views/pages/Reportes.vue')
        },
        {
          path: '/ver-usuarios',
          name: 'ver-usuarios',
          component: () => import('@/views/pages/VerUsuarios.vue')
        },
        {
          path: '/registrar-usuario',
          name: 'registrar-usuario',
          component: () => import('@/views/pages/RegistrarUsuario.vue')
        }
       ]*/
    }
  ]
})

export default router
