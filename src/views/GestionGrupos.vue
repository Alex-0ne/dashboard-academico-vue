<template>
  <div class="gestion-grupos-container">
    <!-- Header -->
    <div class="page-header">
      <h1>Gestión de Grupos</h1>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Lista de grupos -->
      <div class="left-column">
        <div class="section-card">
          <h3 class="section-title">Lista de grupos existentes</h3>
          
          <div class="agregar-grupo">
            <button class="btn-agregar" @click="agregarNuevoGrupo">
              + Agregar Nuevo Grupo
            </button>
          </div>

          <table class="grupos-table">
            <thead>
              <tr>
                <th>Clave del Módulo</th>
                <th>Grupo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="grupo in grupos" 
                :key="grupo.id"
                :class="{ active: grupoSeleccionado?.id === grupo.id }"
                @click="seleccionarGrupo(grupo)"
              >
                <td>{{ grupo.claveModulo }}</td>
                <td>{{ grupo.grupo }}</td>
                <td>
                  <button class="btn-small" @click.stop="eliminarGrupo(grupo.id)">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Columna Derecha - Detalles del Grupo -->
      <div class="right-column">
        <div class="section-card">
          <h3 class="section-title">Detalles del Grupo</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label>Clave del módulo</label>
              <input 
                type="text" 
                v-model="grupoSeleccionado.claveModulo"
                placeholder="Ej: MAT101"
              >
            </div>
            
            <div class="form-group">
              <label>Grupo</label>
              <input 
                type="text" 
                v-model="grupoSeleccionado.grupo"
                placeholder="Ej: A, B, C"
              >
            </div>
            
            <div class="form-group">
              <label>Clave del Catedrático</label>
              <input 
                type="text" 
                v-model="grupoSeleccionado.claveCatedratico"
                placeholder="Ej: CAT001"
              >
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Límite del grupo</label>
                <input 
                  type="number" 
                  v-model="grupoSeleccionado.limite"
                  placeholder="0"
                >
              </div>
              
              <div class="form-group">
                <label>Cupo actual del grupo</label>
                <input 
                  type="number" 
                  v-model="grupoSeleccionado.cupoActual"
                  placeholder="0"
                >
              </div>
            </div>
            
            <div class="form-group full-width">
              <label>Descripción del Grupo</label>
              <textarea 
                v-model="grupoSeleccionado.descripcion"
                rows="3"
                placeholder="Descripción del grupo..."
              ></textarea>
            </div>
            
            <div class="form-group full-width">
              <label>Clasificación</label>
              <input 
                type="text" 
                v-model="grupoSeleccionado.clasificacion"
                placeholder="Clasificación del grupo"
              >
            </div>
          </div>
        </div>

        <!-- Horario -->
        <div class="section-card">
          <h3 class="section-title">Horario</h3>
          <div class="horario-grid">
            <div class="dia-horario" v-for="dia in diasSemana" :key="dia">
              <label>{{ dia }}</label>
              <input 
                type="text" 
                v-model="grupoSeleccionado.horario[dia]"
                placeholder="Ej: 7:00-9:00"
              >
              <input 
                type="text" 
                v-model="grupoSeleccionado.aula[dia]"
                placeholder="Aula"
                class="aula-input"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Catálogos y Botones -->
    <div class="bottom-section">
      <div class="section-card catalogos-card">
        <h3 class="section-title">Catálogos</h3>
        <div class="catalogos-list">
          <div class="catalogo-item">Operaciones</div>
          <div class="catalogo-subitem">Consultas</div>
          <div class="catalogo-subitem">Impresiones</div>
          <div class="catalogo-subitem">Utilerías</div>
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn-guardar" @click="guardarCambios">
          Guardar Cambios
        </button>
        <button class="btn-eliminar" @click="eliminarGrupoSeleccionado" :disabled="!grupoSeleccionado.id">
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'GestionGrupos',
  setup() {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const grupos = ref([
      { 
        id: 1, 
        claveModulo: 'MAT101', 
        grupo: 'A',
        claveCatedratico: 'CAT001',
        limite: 30,
        cupoActual: 25,
        descripcion: 'Grupo de Matemáticas Básicas',
        clasificacion: 'Básico',
        horario: { Lunes: '7:00-9:00', Martes: '', Miércoles: '7:00-9:00', Jueves: '', Viernes: '', Sábado: '' },
        aula: { Lunes: 'A101', Martes: '', Miércoles: 'A101', Jueves: '', Viernes: '', Sábado: '' }
      }
    ])

    const grupoSeleccionado = reactive({
      id: null,
      claveModulo: '',
      grupo: '',
      claveCatedratico: '',
      limite: 0,
      cupoActual: 0,
      descripcion: '',
      clasificacion: '',
      horario: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' },
      aula: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' }
    })

    const seleccionarGrupo = (grupo) => {
      Object.assign(grupoSeleccionado, JSON.parse(JSON.stringify(grupo)))
    }

    const agregarNuevoGrupo = () => {
      const nuevoGrupo = {
        id: Date.now(),
        claveModulo: '',
        grupo: '',
        claveCatedratico: '',
        limite: 0,
        cupoActual: 0,
        descripcion: '',
        clasificacion: '',
        horario: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' },
        aula: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' }
      }
      grupos.value.push(nuevoGrupo)
      seleccionarGrupo(nuevoGrupo)
    }

    const guardarCambios = () => {
      if (grupoSeleccionado.id) {
        const index = grupos.value.findIndex(g => g.id === grupoSeleccionado.id)
        if (index !== -1) {
          grupos.value[index] = JSON.parse(JSON.stringify(grupoSeleccionado))
          alert('Grupo guardado exitosamente')
        }
      } else {
        alert('Selecciona o crea un grupo primero')
      }
    }

    const eliminarGrupo = (id) => {
      if (confirm('¿Estás seguro de eliminar este grupo?')) {
        grupos.value = grupos.value.filter(g => g.id !== id)
        if (grupoSeleccionado.id === id) {
          resetGrupoSeleccionado()
        }
      }
    }

    const eliminarGrupoSeleccionado = () => {
      eliminarGrupo(grupoSeleccionado.id)
    }

    const resetGrupoSeleccionado = () => {
      Object.assign(grupoSeleccionado, {
        id: null,
        claveModulo: '',
        grupo: '',
        claveCatedratico: '',
        limite: 0,
        cupoActual: 0,
        descripcion: '',
        clasificacion: '',
        horario: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' },
        aula: { Lunes: '', Martes: '', Miércoles: '', Jueves: '', Viernes: '', Sábado: '' }
      })
    }

    // Seleccionar el primer grupo por defecto
    if (grupos.value.length > 0) {
      seleccionarGrupo(grupos.value[0])
    }

    return {
      diasSemana,
      grupos,
      grupoSeleccionado,
      seleccionarGrupo,
      agregarNuevoGrupo,
      guardarCambios,
      eliminarGrupo,
      eliminarGrupoSeleccionado
    }
  }
}
</script>

<style scoped>
.gestion-grupos-container {
  padding: 20px;
  background-color: #F5F7FA;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 20px;
}

.page-header h1 {
  color: #1B396A;
  font-size: 24px;
  margin: 0 0 5px 0;
  font-weight: 600;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section-card {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-title {
  color: #1B396A;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
  border-bottom: 1px solid #D1D5DB;
}

.btn-agregar {
  background-color: #1B396A;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
}

.btn-agregar:hover {
  background-color: #2E4D88;
}

.grupos-table {
  width: 100%;
  border-collapse: collapse;
}

.grupos-table th,
.grupos-table td {
  border: 1px solid #D1D5DB;
  padding: 10px;
  text-align: left;
  font-size: 14px;
}

.grupos-table th {
  background-color: #1B396A;
  color: #FFFFFF;
  font-weight: 600;
}

.grupos-table tr {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.grupos-table tr:hover {
  background-color: #F5F7FA;
}

.grupos-table tr.active {
  background-color: #1B396A;
  color: white;
}

.btn-small {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-row {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  margin-bottom: 5px;
  color: #6B7280;
  font-size: 14px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2E4D88;
}

.horario-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.dia-horario {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dia-horario label {
  color: #6B7280;
  font-size: 14px;
  font-weight: 500;
}

.aula-input {
  margin-top: 5px;
}

.catalogos-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.catalogo-item {
  padding: 8px 12px;
  background-color: #F5F7FA;
  border-radius: 4px;
  color: #1B396A;
  font-size: 14px;
  font-weight: 600;
  border-left: 3px solid #2E4D88;
}

.catalogo-subitem {
  padding: 6px 12px 6px 24px;
  color: #6B7280;
  font-size: 13px;
  border-left: 2px solid #D1D5DB;
  margin-left: 12px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
}

.btn-guardar {
  background-color: #1B396A;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-guardar:hover {
  background-color: #2E4D88;
}

.btn-eliminar {
  background-color: #DC2626;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-eliminar:hover:not(:disabled) {
  background-color: #B91C1C;
}

.btn-eliminar:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .content-grid,
  .bottom-section {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .horario-grid {
    grid-template-columns: 1fr;
  }
}
</style>