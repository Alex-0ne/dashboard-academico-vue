<template>
  <div class="gestion-catedraticos-container">
    <!-- Header -->
    <div class="page-header">
      <h1>Gestión de Catedráticos</h1>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Catedráticos Existentes -->
      <div class="left-column">
        <div class="section-card">
          <h3 class="section-title">Catedráticos Existentes</h3>
          
          <div class="agregar-catedratico">
            <button class="btn-agregar" @click="agregarNuevoCatedratico">
              + Agregar Nuevo Catedrático
            </button>
          </div>

          <div class="catedraticos-lista">
            <div 
              v-for="catedratico in catedraticos" 
              :key="catedratico.id"
              class="catedratico-item"
              :class="{ active: catedraticoSeleccionado?.id === catedratico.id }"
              @click="seleccionarCatedratico(catedratico)"
            >
              <div class="catedratico-clave">{{ catedratico.clave }}</div>
              <div class="catedratico-nombre">{{ catedratico.nombre }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha - Detalles del Catedrático -->
      <div class="right-column">
        <div class="section-card">
          <h3 class="section-title">Detalles del Catedrático</h3>
          
          <div class="form-grid">
            <div class="form-group">
              <label>Clave</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.clave"
                placeholder="Ej: ASI, CBB"
              >
            </div>
            
            <div class="form-group">
              <label>Nombre</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.nombre"
                placeholder="Nombre completo"
              >
            </div>
            
            <div class="form-group">
              <label>Calle</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.calle"
                placeholder="Calle y número"
              >
            </div>
            
            <div class="form-group">
              <label>Colonia</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.colonia"
                placeholder="Colonia"
              >
            </div>
            
            <div class="form-group">
              <label>Municipio</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.municipio"
                placeholder="Municipio"
              >
            </div>
            
            <div class="form-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                v-model="catedraticoSeleccionado.telefono"
                placeholder="Teléfono"
              >
            </div>
            
            <div class="form-group">
              <label>Estado de estudios</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.estadoEstudios"
                placeholder="Estado de estudios"
              >
            </div>
            
            <div class="form-group">
              <label>Escuela de procedencia</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.escuelaProcedencia"
                placeholder="Escuela de procedencia"
              >
            </div>
            
            <div class="form-group">
              <label>Ciudad</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.ciudad"
                placeholder="Ciudad"
              >
            </div>
            
            <div class="form-group">
              <label>Estado</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.estado"
                placeholder="Estado"
              >
            </div>
            
            <div class="form-group">
              <label>Estudio</label>
              <input 
                type="text" 
                v-model="catedraticoSeleccionado.estudio"
                placeholder="Campo de estudio"
              >
            </div>
          </div>
        </div>

        <!-- Operaciones -->
        <div class="section-card">
          <h3 class="section-title">Operaciones</h3>
          <div class="operaciones-list">
            <div class="operacion-item">Consultas</div>
            <div class="operacion-item">Impresiones</div>
            <div class="operacion-item">Utilerías</div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="action-buttons">
          <button class="btn-guardar" @click="guardarCambios">
            Guardar Cambios
          </button>
          <button class="btn-eliminar" @click="eliminarCatedratico" :disabled="!catedraticoSeleccionado.id">
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
  name: 'GestionCatedraticos',
  setup() {
    const catedraticos = ref([
      { 
        id: 1, 
        clave: 'ASI', 
        nombre: 'Alainé Sanchez Itzayana',
        calle: 'Av. Principal 123',
        colonia: 'Centro',
        municipio: 'Municipio A',
        telefono: '555-1234',
        estadoEstudios: 'Maestría',
        escuelaProcedencia: 'Universidad Nacional',
        ciudad: 'Ciudad de México',
        estado: 'CDMX',
        estudio: 'Matemáticas'
      },
      { 
        id: 2, 
        clave: 'CBB', 
        nombre: 'Correa Baca Brinda',
        calle: 'Calle Secundaria 456',
        colonia: 'Norte',
        municipio: 'Municipio B',
        telefono: '555-5678',
        estadoEstudios: 'Doctorado',
        escuelaProcedencia: 'Instituto Politécnico',
        ciudad: 'Guadalajara',
        estado: 'Jalisco',
        estudio: 'Física'
      }
    ])

    const catedraticoSeleccionado = reactive({
      id: null,
      clave: '',
      nombre: '',
      calle: '',
      colonia: '',
      municipio: '',
      telefono: '',
      estadoEstudios: '',
      escuelaProcedencia: '',
      ciudad: '',
      estado: '',
      estudio: ''
    })

    const seleccionarCatedratico = (catedratico) => {
      Object.assign(catedraticoSeleccionado, { ...catedratico })
    }

    const agregarNuevoCatedratico = () => {
      const nuevoCatedratico = {
        id: Date.now(),
        clave: '',
        nombre: '',
        calle: '',
        colonia: '',
        municipio: '',
        telefono: '',
        estadoEstudios: '',
        escuelaProcedencia: '',
        ciudad: '',
        estado: '',
        estudio: ''
      }
      catedraticos.value.push(nuevoCatedratico)
      seleccionarCatedratico(nuevoCatedratico)
    }

    const guardarCambios = () => {
      if (catedraticoSeleccionado.id) {
        const index = catedraticos.value.findIndex(c => c.id === catedraticoSeleccionado.id)
        if (index !== -1) {
          catedraticos.value[index] = { ...catedraticoSeleccionado }
          alert('Catedrático guardado exitosamente')
        }
      } else {
        alert('Selecciona o crea un catedrático primero')
      }
    }

    const eliminarCatedratico = () => {
      if (catedraticoSeleccionado.id && confirm('¿Estás seguro de eliminar este catedrático?')) {
        catedraticos.value = catedraticos.value.filter(c => c.id !== catedraticoSeleccionado.id)
        Object.assign(catedraticoSeleccionado, {
          id: null,
          clave: '',
          nombre: '',
          calle: '',
          colonia: '',
          municipio: '',
          telefono: '',
          estadoEstudios: '',
          escuelaProcedencia: '',
          ciudad: '',
          estado: '',
          estudio: ''
        })
      }
    }

    // Seleccionar el primer catedrático por defecto
    if (catedraticos.value.length > 0) {
      seleccionarCatedratico(catedraticos.value[0])
    }

    return {
      catedraticos,
      catedraticoSeleccionado,
      seleccionarCatedratico,
      agregarNuevoCatedratico,
      guardarCambios,
      eliminarCatedratico
    }
  }
}
</script>

<style scoped>
.gestion-catedraticos-container {
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

.catedraticos-lista {
  max-height: 400px;
  overflow-y: auto;
}

.catedratico-item {
  padding: 12px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.catedratico-item:hover {
  background-color: #F5F7FA;
  border-color: #2E4D88;
}

.catedratico-item.active {
  background-color: #1B396A;
  color: white;
  border-color: #1B396A;
}

.catedratico-clave {
  font-weight: 600;
  font-size: 14px;
}

.catedratico-nombre {
  font-size: 12px;
  color: #6B7280;
  margin-top: 4px;
}

.catedratico-item.active .catedratico-nombre {
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

.form-group input {
  padding: 10px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: #2E4D88;
}

.operaciones-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.operacion-item {
  padding: 8px 12px;
  background-color: #F5F7FA;
  border-radius: 4px;
  color: #1B396A;
  font-size: 14px;
  font-weight: 600;
  border-left: 3px solid #2E4D88;
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