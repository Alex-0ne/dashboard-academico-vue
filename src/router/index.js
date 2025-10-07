import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Consultas from '../views/Consultas.vue'
import Inscripcion from '../views/Inscripcion.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas
  },
  // NUEVAS RUTAS DE CONSULTAS
  {
    path: '/consultas-alumno',
    name: 'ConsultasAlumno',
    component: () => import('../views/Consultas.vue')
  },
  {
    path: '/consultas-grupos',
    name: 'ConsultasGrupos',
    component: () => import('../views/Consultas.vue')
  },
  {
    path: '/alumnos-grupo',
    name: 'AlumnosGrupo',
    component: () => import('../views/Consultas.vue')
  },
  {
    path: '/resumen-grupos',
    name: 'ResumenGrupos',
    component: () => import('../views/Consultas.vue')
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: Inscripcion
  },
  // RUTAS DE INSCRIPCIÓN
  {
    path: '/adeudos',
    name: 'Adeudos',
    component: () => import('../views/Adeudos.vue')
  },
  {
    path: '/cambio-grupo-individual',
    name: 'CambioGrupoIndividual',
    component: () => import('../views/CambioGrupoIndividual.vue')
  },
  {
    path: '/captura-calificaciones',
    name: 'CapturaCalificaciones',
    component: () => import('../views/CapturaCalificaciones.vue')
  },
  {
    path: '/fusionar-grupos',
    name: 'FusionarGrupos',
    component: () => import('../views/FusionarGrupos.vue')
  },
  {
    path: '/imprimir-comprobante',
    name: 'ImprimirComprobante',
    component: () => import('../views/ImprimirComprobante.vue')
  },
  // RUTAS DE CATÁLOGOS
  {
    path: '/operaciones',
    name: 'Operaciones',
    component: () => import('../views/Operaciones.vue')
  },
  {
    path: '/impresiones',
    name: 'Impresiones',
    component: () => import('../views/Impresiones.vue')
  },
  {
    path: '/utilerias',
    name: 'Utilerias',
    component: () => import('../views/Utilerias.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router