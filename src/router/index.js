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
  
  // CATÁLOGOS
  {
    path: '/plan-estudios',
    name: 'PlanEstudios',
    component: () => import('../views/PlanEstudios.vue')
  },
  {
    path: '/alta-alumnos',
    name: 'AltaAlumnos',
    component: () => import('../views/AltaAlumnos.vue')
  },
  {
    path: '/datos-personales',
    name: 'DatosPersonales',
    component: () => import('../views/DatosPersonales.vue')
  },
  {
    path: '/reticula',
    name: 'Reticula',
    component: () => import('../views/Reticula.vue')
  },
  {
    path: '/cardex-directo',
    name: 'CardexDirecto',
    component: () => import('../views/CardexDirecto.vue')
  },
  {
    path: '/gestion-catedraticos',
    name: 'GestionCatedraticos',
    component: () => import('../views/GestionCatedraticos.vue')
  },
  {
    path: '/gestion-grupos',
    name: 'GestionGrupos',
    component: () => import('../views/GestionGrupos.vue')
  },
  {
    path: '/consultar',
    name: 'Consultar',
    component: () => import('../views/Consultar.vue')
  },
  
  // OPERACIONES
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: Inscripcion
  },
  {
    path: '/imprimir-comprobante',
    name: 'ImprimirComprobante',
    component: () => import('../views/ImprimirComprobante.vue')
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
    path: '/adeudos',
    name: 'Adeudos',
    component: () => import('../views/Adeudos.vue')
  },
  
  // CONSULTAS
  {
    path: '/calificaciones-alumnos',
    name: 'CalificacionesAlumnos',
    component: () => import('../views/CalificacionesAlumnos.vue')
  },
  {
    path: '/cupo-grupos',
    name: 'CupoGrupos',
    component: () => import('../views/CupoGrupos.vue')
  },
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas
  },
  
  // IMPRESIÓN
  {
    path: '/lista-asistencia',
    name: 'ListaAsistencia',
    component: () => import('../views/ListaAsistencia.vue')
  },
  {
    path: '/lista-evaluacion',
    name: 'ListaEvaluacion',
    component: () => import('../views/ListaEvaluacion.vue')
  },
  {
    path: '/impresion-grupos',
    name: 'ImpresionGrupos',
    component: () => import('../views/ImpresionGrupos.vue')
  },
  {
    path: '/impresion-recibos',
    name: 'ImpresionRecibos',
    component: () => import('../views/ImpresionRecibos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router