import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Consultas from '../views/Consultas.vue'
import Inscripcion from '../views/Inscripcion.vue'
import Adeudos from '../components/Inscripcion/Adeudos.vue'
import Operaciones from '../components/Catalogos/Operaciones.vue'
import Impresiones from '../components/Catalogos/Impresiones.vue'
import Utilerias from '../components/Catalogos/Utilerias.vue'
import CambioGrupoIndividual from '../components/Inscripcion/CambioGrupoIndividual.vue'
import FusionarGrupos from '../components/Inscripcion/FusionarGrupos.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
  path: '/fusionar-grupos',
  name: 'FusionarGrupos',
  component: FusionarGrupos
},
  {
  path: '/cambio-grupo-individual',
  name: 'CambioGrupoIndividual',
  component: CambioGrupoIndividual
},
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: Inscripcion
  },
  {
    path: '/adeudos',
    name: 'Adeudos',
    component: Adeudos
  },
  {
    path: '/catalogos/operaciones',
    name: 'Operaciones',
    component: Operaciones
  },
  {
    path: '/catalogos/impresiones',
    name: 'Impresiones',
    component: Impresiones
  },
  {
    path: '/catalogos/utilerias',
    name: 'Utilerias',
    component: Utilerias
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router