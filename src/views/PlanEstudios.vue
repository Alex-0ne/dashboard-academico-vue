<template>
  <div class="plan-estudios-container">
    <!-- Header -->
    <div class="page-header">
      <h1>Gestión de Plan de Estudios</h1>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Planes Existentes -->
      <div class="left-column">
        <div class="section-card">
          <h3 class="section-title">Planes Existentes</h3>
          
          <div class="agregar-plan">
            <button class="btn-agregar" @click="agregarNuevoPlan">
              + Agregar Nuevo Plan
            </button>
          </div>

          <div class="planes-lista">
            <div 
              v-for="plan in planes" 
              :key="plan.id"
              class="plan-item"
              :class="{ active: planSeleccionado?.id === plan.id }"
              @click="seleccionarPlan(plan)"
            >
              <div class="plan-clave">{{ plan.clave }}</div>
              <div class="plan-nombre">{{ plan.nombre }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha - Detalles del Plan -->
      <div class="right-column">
        <div class="section-card">
          <h3 class="section-title">Detalles del Plan de Estudio</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label>Clave del Plan</label>
              <input 
                type="text" 
                v-model="planSeleccionado.clave"
                placeholder="Ingresar clave"
              >
            </div>
            
            <div class="form-group">
              <label>Nombre del Plan</label>
              <input 
                type="text" 
                v-model="planSeleccionado.nombre"
                placeholder="Ingresar nombre del plan"
              >
            </div>
            
            <div class="form-group">
              <label>Fecha de Inicio del Plan</label>
              <input 
                type="date" 
                v-model="planSeleccionado.fechaInicio"
              >
            </div>
            
            <div class="form-group">
              <label>Fecha de Finalización del Plan</label>
              <input 
                type="date" 
                v-model="planSeleccionado.fechaFin"
              >
            </div>
            
            <div class="form-group">
              <label>Status del Plan</label>
              <select v-model="planSeleccionado.status">
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
                <option value="pendiente">Pendiente</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Cantidad de Módulos del Plan</label>
              <input 
                type="number" 
                v-model="planSeleccionado.cantidadModulos"
                placeholder="0"
              >
            </div>
          </div>
        </div>

        <!-- Catálogos -->
        <div class="section-card">
          <h3 class="section-title">Catálogos</h3>
          <div class="catalogos-list">
            <div class="catalogo-item">Operaciones</div>
            <div class="catalogo-subitem">Consultas</div>
            <div class="catalogo-subitem">Impresiones</div>
            <div class="catalogo-subitem">Utilerías</div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="action-buttons">
          <button class="btn-guardar" @click="guardarCambios">
            Guardar Cambios
          </button>
          <button class="btn-eliminar" @click="eliminarPlan" :disabled="!planSeleccionado.id">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'PlanEstudios',
  setup() {
    const planes = ref([
      { 
        id: 1, 
        clave: 'ING-GEN', 
        nombre: 'Inglés General Francés Básico',
        fechaInicio: '2024-01-15',
        fechaFin: '2024-12-15',
        status: 'activo',
        cantidadModulos: 12
      },
      { 
        id: 2, 
        clave: 'MAT-AVA', 
        nombre: 'Matemáticas Avanzadas',
        fechaInicio: '2024-02-01',
        fechaFin: '2024-11-30',
        status: 'activo',
        cantidadModulos: 8
      }
    ])

    const planSeleccionado = reactive({
      id: null,
      clave: '',
      nombre: '',
      fechaInicio: '',
      fechaFin: '',
      status: 'activo',
      cantidadModulos: 0
    })

    const seleccionarPlan = (plan) => {
      Object.assign(planSeleccionado, { ...plan })
    }

    const agregarNuevoPlan = () => {
      const nuevoPlan = {
        id: Date.now(),
        clave: '',
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        status: 'activo',
        cantidadModulos: 0
      }
      planes.value.push(nuevoPlan)
      seleccionarPlan(nuevoPlan)
    }

    const guardarCambios = () => {
      if (planSeleccionado.id) {
        const index = planes.value.findIndex(p => p.id === planSeleccionado.id)
        if (index !== -1) {
          planes.value[index] = { ...planSeleccionado }
          alert('Plan guardado exitosamente')
        }
      } else {
        alert('Selecciona o crea un plan primero')
      }
    }

    const eliminarPlan = () => {
      if (planSeleccionado.id && confirm('¿Estás seguro de eliminar este plan?')) {
        planes.value = planes.value.filter(p => p.id !== planSeleccionado.id)
        Object.assign(planSeleccionado, {
          id: null,
          clave: '',
          nombre: '',
          fechaInicio: '',
          fechaFin: '',
          status: 'activo',
          cantidadModulos: 0
        })
      }
    }

    // Seleccionar el primer plan por defecto
    if (planes.value.length > 0) {
      seleccionarPlan(planes.value[0])
    }

    return {
      planes,
      planSeleccionado,
      seleccionarPlan,
      agregarNuevoPlan,
      guardarCambios,
      eliminarPlan
    }
  }
}
</script>

<style scoped>
.plan-estudios-container {
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

.planes-lista {
  max-height: 400px;
  overflow-y: auto;
}

.plan-item {
  padding: 12px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.plan-item:hover {
  background-color: #F5F7FA;
  border-color: #2E4D88;
}

.plan-item.active {
  background-color: #1B396A;
  color: white;
  border-color: #1B396A;
}

.plan-clave {
  font-weight: 600;
  font-size: 14px;
}

.plan-nombre {
  font-size: 12px;
  color: #6B7280;
  margin-top: 4px;
}

.plan-item.active .plan-nombre {
  color: #D1D5DB;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  color: #6B7280;
  font-size: 14px;
  font-weight: 500;
}

.form-group input,
.form-group select {
  padding: 10px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #2E4D88;
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
  gap: 15px;
  margin-top: 20px;
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
  flex: 1;
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
  flex: 1;
}

.btn-eliminar:hover:not(:disabled) {
  background-color: #B91C1C;
}

.btn-eliminar:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>