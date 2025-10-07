<template>
  <div class="consultas-container">
    <!-- Header dinámico según la ruta -->
    <div class="page-header">
      <h1>Consultas</h1>
      <h2>{{ currentSubmoduleTitle }}</h2>
      <p>{{ currentSubmoduleDescription }}</p>
    </div>

    <!-- Navegación de módulos -->
    <div class="modules-nav">
      <div 
        class="nav-item" 
        :class="{ active: currentView === 'alumno' }"
        @click="changeView('alumno')"
      >
        Consulta por Alumno
      </div>
      <div 
        class="nav-item" 
        :class="{ active: currentView === 'grupos' }"
        @click="changeView('grupos')"
      >
        Consulta de Grupos
      </div>
      <div 
        class="nav-item" 
        :class="{ active: currentView === 'alumnos-grupo' }"
        @click="changeView('alumnos-grupo')"
      >
        Alumnos por Grupo
      </div>
      <div 
        class="nav-item" 
        :class="{ active: currentView === 'resumen-grupos' }"
        @click="changeView('resumen-grupos')"
      >
        Resumen de grupos
      </div>
    </div>

    <!-- Contenido dinámico según la vista -->
    <div v-if="currentView === 'alumno' || currentView === 'grupos'">
      <!-- Contenido que ya tienes para Consulta por Alumno -->
      <div class="content-grid">
        <!-- ... (tu contenido actual de consultas) ... -->
      </div>
    </div>

    <div v-else-if="currentView === 'alumnos-grupo'">
      <!-- Contenido específico para Alumnos por Grupo -->
      <div class="section-card">
        <h3 class="section-title">Alumnos por Grupo</h3>
        <p class="section-subtitle">Resumen de grupos</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>grup_mod</th>
              <th>grup_cgr</th>
              <th>grup_can</th>
              <th>grup_i</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(grupo, index) in gruposData" :key="index">
              <td><input type="text" v-model="grupo.grup_mod" class="table-input"></td>
              <td><input type="text" v-model="grupo.grup_cgr" class="table-input"></td>
              <td><input type="text" v-model="grupo.grup_can" class="table-input"></td>
              <td><input type="text" v-model="grupo.grup_i" class="table-input"></td>
            </tr>
          </tbody>
        </table>
        <button class="btn-agregar-fila" @click="agregarFilaGrupo">+ Agregar Fila</button>
      </div>
    </div>

    <div v-else-if="currentView === 'resumen-grupos'">
      <!-- Contenido específico para Resumen de Grupos -->
      <div class="section-card">
        <h3 class="section-title">Resumen de Grupos</h3>
        <p>Contenido específico para resumen de grupos...</p>
        <!-- Aquí puedes agregar la tabla o contenido específico -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Consultas',
  setup() {
    const route = useRoute()
    const currentView = ref('alumno')

    // Mapeo de rutas a vistas
    const routeToViewMap = {
      '/consultas': 'alumno',
      '/consultas-alumno': 'alumno',
      '/consultas-grupos': 'grupos',
      '/alumnos-grupo': 'alumnos-grupo',
      '/resumen-grupos': 'resumen-grupos'
    }

    // Títulos dinámicos según la vista
    const viewTitles = {
      'alumno': { title: 'Consulta por Alumno', desc: 'Consulta de Grupos' },
      'grupos': { title: 'Consulta de Grupos', desc: 'Consulta por Alumno' },
      'alumnos-grupo': { title: 'Alumnos por Grupo', desc: 'Resumen de grupos' },
      'resumen-grupos': { title: 'Resumen de Grupos', desc: 'Resumen general' }
    }

    const currentSubmoduleTitle = computed(() => 
      viewTitles[currentView.value]?.title || 'Consultas'
    )
    
    const currentSubmoduleDescription = computed(() => 
      viewTitles[currentView.value]?.desc || ''
    )

    const changeView = (view) => {
      currentView.value = view
    }

    // Detectar la ruta actual al cargar el componente
    onMounted(() => {
      const currentPath = route.path
      currentView.value = routeToViewMap[currentPath] || 'alumno'
    })

    // ... (el resto de tu data y methods actuales)

    return {
      currentView,
      currentSubmoduleTitle,
      currentSubmoduleDescription,
      changeView,
      // ... (el resto de tus returns)
    }
  }
}
</script>