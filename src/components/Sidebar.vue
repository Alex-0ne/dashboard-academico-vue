<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h1>Sistema Académico</h1>
    </div>
    
    <ul class="sidebar-menu">
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

      <!-- CATÁLOGOS - Botón directo -->
      <li 
        class="sidebar-menu-item direct-link"
        :class="{ active: activeModule === 'catalogos' }"
        @click="navigateDirect('catalogos')"
      >
        Catálogos
      </li>

      <!-- IMPRESIONES - Botón directo -->
      <li 
        class="sidebar-menu-item direct-link"
        :class="{ active: activeModule === 'impresiones' }"
        @click="navigateDirect('impresiones')"
      >
        Impresiones
      </li>

      <!-- UTILERÍAS - Botón directo -->
      <li 
        class="sidebar-menu-item direct-link"
        :class="{ active: activeModule === 'utilerias' }"
        @click="navigateDirect('utilerias')"
      >
        Utilerías
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

    const consultasSubmenu = [
    { id: 'consulta-alumno', name: 'Consultar por Alumno', route: '/consultas-alumno' },
      { id: 'consulta-grupos', name: 'Consultar por Grupos', route: '/consultas-grupos' },
      { id: 'alumnos-grupo', name: 'Alumnos por Grupo', route: '/alumnos-grupo' },
      { id: 'resumen-grupos', name: 'Resumen de Grupos', route: '/resumen-grupos' }
    ]

    const operacionesSubmenu = [
      { id: 'inscripcion', name: 'Inscripción', route: '/inscripcion' },
      { id: 'adeudos', name: 'Adeudos', route: '/adeudos' },
      { id: 'fusionar-grupos', name: 'Fusionar Grupos', route: '/fusionar-grupos' },
      { id: 'cambio-grupo-individual', name: 'Cambio de Grupo Individual', route: '/cambio-grupo-individual' },
      { id: 'fusionar-grupos', name: 'Fusionar Grupos', route: '/fusionar-grupos' },
      { id: 'captura-calificaciones', name: 'Captura de Calificaciones', route: '/captura-calificaciones' },
      { id: 'imprimir-comprobante', name: 'Imprimir Comprobante', route: '/imprimir-comprobante' }
    ]

    const directLinks = {
      'catalogos': '/catalogos',
      'impresiones': '/impresiones',
      'utilerias': '/utilerias'
    }

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

    const navigateDirect = (moduleId) => {
      store.dispatch('changeModule', moduleId)
      store.dispatch('changeSubmodule', '')
      if (directLinks[moduleId]) {
        router.push(directLinks[moduleId])
      }
    }

    return {
      consultasSubmenu,
      operacionesSubmenu,
      activeModule,
      activeSubmodule,
      toggleModule,
      navigateToSubmodule,
      navigateDirect
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

.sidebar-menu-item.direct-link::after {
  content: "→";
  position: absolute;
  right: 20px;
  opacity: 0.7;
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