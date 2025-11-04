<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h1>Sistema Académico</h1>
    </div>
    
    <ul class="sidebar-menu">
      <!-- CATÁLOGOS - Con submenú -->
      <li 
        class="sidebar-menu-item"
        :class="{ active: activeModule === 'catalogos' }"
        @click="toggleModule('catalogos')"
      >
        Catálogos
        <ul v-if="activeModule === 'catalogos'" class="sidebar-submenu">
          <li 
            v-for="subitem in catalogosSubmenu" 
            :key="subitem.id"
            :class="['sidebar-submenu-item', { active: activeSubmodule === subitem.id }]"
            @click.stop="navigateToSubmodule(subitem)"
          >
            {{ subitem.name }}
          </li>
        </ul>
      </li>

      <!-- OPERACIONES - Con submenú -->
      <li 
        class="sidebar-menu-item"
        :class="{ active: activeModule === 'operaciones' }"
        @click="toggleModule('operaciones')"
      >
        Operaciones
        <ul v-if="activeModule === 'operaciones'" class="sidebar-submenu">
          <li 
            v-for="subitem in operacionesSubmenu" 
            :key="subitem.id"
            :class="['sidebar-submenu-item', { active: activeSubmodule === subitem.id }]"
            @click.stop="navigateToSubmodule(subitem)"
          >
            {{ subitem.name }}
          </li>
        </ul>
      </li>

      <!-- CONSULTAS - Con submenú -->
      <li 
        class="sidebar-menu-item"
        :class="{ active: activeModule === 'consultas' }"
        @click="toggleModule('consultas')"
      >
        Consultas
        <ul v-if="activeModule === 'consultas'" class="sidebar-submenu">
          <li 
            v-for="subitem in consultasSubmenu" 
            :key="subitem.id"
            :class="['sidebar-submenu-item', { active: activeSubmodule === subitem.id }]"
            @click.stop="navigateToSubmodule(subitem)"
          >
            {{ subitem.name }}
          </li>
        </ul>
      </li>

      <!-- IMPRESIÓN - Con submenú -->
      <li 
        class="sidebar-menu-item"
        :class="{ active: activeModule === 'impresion' }"
        @click="toggleModule('impresion')"
      >
        Impresión
        <ul v-if="activeModule === 'impresion'" class="sidebar-submenu">
          <li 
            v-for="subitem in impresionSubmenu" 
            :key="subitem.id"
            :class="['sidebar-submenu-item', { active: activeSubmodule === subitem.id }]"
            @click.stop="navigateToSubmodule(subitem)"
          >
            {{ subitem.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Sidebar',
  setup() {
    const store = useStore()
    const router = useRouter()

    const catalogosSubmenu = [
      { id: 'plan-estudios', name: 'Plan de Estudios', route: '/plan-estudios' },
      { id: 'alta-alumnos', name: 'Alta de alumnos', route: '/alta-alumnos' },
      { id: 'datos-personales', name: 'Alta de datos Personales de alumnos', route: '/datos-personales' },
      { id: 'reticula', name: 'Retícula', route: '/reticula' },
      { id: 'cardex-directo', name: 'Cardex Directo', route: '/cardex-directo' },
      { id: 'catedraticos', name: 'Catedráticos', route: '/gestion-catedraticos' },
      { id: 'grupos', name: 'Grupos', route: '/gestion-grupos' },
      { id: 'consultar', name: 'Consultar', route: '/consultar' }
    ]

    const operacionesSubmenu = [
      { id: 'inscripcion', name: 'Inscripción', route: '/inscripcion' },
      { id: 'imprimir-comprobante', name: 'Imprimir comprobante de Inscripción', route: '/imprimir-comprobante' },
      { id: 'cambiar-grupo', name: 'Cambiar de grupo', route: '/cambio-grupo-individual' },
      { id: 'captura-calificaciones', name: 'Captura de Calificaciones', route: '/captura-calificaciones' },
      { id: 'administrar-adeudos', name: 'Admón. de Adeudos', route: '/adeudos' }
    ]

    const consultasSubmenu = [
      { id: 'calificaciones-alumnos', name: 'Calificaciones de alumnos', route: '/calificaciones-alumnos' },
      { id: 'cupo-grupos', name: 'Cupo de los grupos', route: '/cupo-grupos' }
    ]

    const impresionSubmenu = [
      { id: 'lista-asistencia', name: 'Lista de Asistencia', route: '/lista-asistencia' },
      { id: 'lista-evaluacion', name: 'Lista de evaluación', route: '/lista-evaluacion' },
      { id: 'impresion-grupos', name: 'Impresión de llenado de grupos', route: '/impresion-grupos' },
      { id: 'impresion-recibos', name: 'Impresión de recibos', route: '/impresion-recibos' }
    ]

    const activeModule = computed(() => store.getters.getActiveModule)
    const activeSubmodule = computed(() => store.getters.getActiveSubmodule)

    const toggleModule = (moduleId) => {
      if (activeModule.value === moduleId) {
        store.dispatch('changeModule', '')
      } else {
        store.dispatch('changeModule', moduleId)
      }
    }

    const navigateToSubmodule = (subitem) => {
      store.dispatch('changeSubmodule', subitem.id)
      if (subitem.route) {
        router.push(subitem.route)
      }
    }

    return {
      catalogosSubmenu,
      operacionesSubmenu,
      consultasSubmenu,
      impresionSubmenu,
      activeModule,
      activeSubmodule,
      toggleModule,
      navigateToSubmodule
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: #1B396A;
  color: white;
  padding: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid #2E4D88;
  background-color: #1B396A;
}

.sidebar-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu-item {
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-left: 4px solid transparent;
  font-weight: 500;
  border-bottom: 1px solid #2E4D88;
  position: relative;
}

.sidebar-menu-item:hover {
  background-color: #2E4D88;
}

.sidebar-menu-item.active {
  background-color: #2E4D88;
  border-left-color: #BFA975;
}

.sidebar-submenu {
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0;
  background-color: #2E4D88;
  border-radius: 4px;
}

.sidebar-submenu-item {
  padding: 10px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.sidebar-submenu-item:hover {
  background-color: #1B396A;
  border-left-color: #D1D5DB;
}

.sidebar-submenu-item.active {
  background-color: #1B396A;
  color: #BFA975;
  border-left-color: #BFA975;
  font-weight: 500;
}

.sidebar-menu-item.active .sidebar-submenu-item {
  background-color: #2E4D88;
}

.sidebar-menu-item.active .sidebar-submenu-item.active {
  background-color: #1B396A;
}
</style>