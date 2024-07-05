import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { getUserInfo } from '@/services/userService'

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
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('@/views/pages/Perfil.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/registrar-atencion',
          name: 'registrar-atencion',
          component: () => import('@/views/pages/RegistrarAtencion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/ver-atenciones',
          name: 'ver-atenciones',
          component: () => import('@/views/pages/VerAtenciones.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/preguntas-frecuentes',
          name: 'preguntas-frecuentes',
          component: () => import('@/views/pages/PreguntasFrecuentes.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/registrar-usuario',
          name: 'registrar-usuario',
          component: () => import('@/views/pages/RegistrarUsuario.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/ver-usuarios',
          name: 'ver-usuarios',
          component: () => import('@/views/pages/VerUsuarios.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/preguntas-frecuentes',
          name: 'preguntas-frecuentes',
          component: () => import('@/views/pages/PreguntasFrecuentes.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ name: 'login' })
    } else {
      try {
        await getUserInfo()
        next()
      } catch (error) {
        localStorage.removeItem('token')
        next({ name: 'login' })
      }
    }
  } else {
    next()
  }
})

export default router
