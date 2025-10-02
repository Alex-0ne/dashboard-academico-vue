<template>
  <div class="fusionar-grupos-container">
    <!-- Header Principal -->
    <div class="header">
      <h1>Fusionar Grupos</h1>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Selección de Grupos -->
      <div class="left-column">
        <!-- Cambio de grupo -->
        <div class="section-card">
          <h3>Cambio de grupo</h3>
          <div class="fusionar-options">
            <button class="btn-fusionar active">Fusionar Grupos</button>
          </div>
        </div>

        <!-- Grupo Origen -->
        <div class="section-card">
          <h3>Grupo Origen</h3>
          <div class="input-group">
            <label>Seleccionar Grupo...</label>
            <select class="input-field" v-model="grupoOrigen">
              <option value="">Seleccionar grupo origen</option>
              <option v-for="grupo in grupos" :key="grupo.id" :value="grupo.id">
                {{ grupo.nombre }} - {{ grupo.profesor }}
              </option>
            </select>
          </div>
          <div class="grupo-info" v-if="grupoOrigen">
            <div class="info-item">
              <strong>Profesor:</strong> {{ getGrupoInfo(grupoOrigen)?.profesor }}
            </div>
            <div class="info-item">
              <strong>Alumnos:</strong> {{ getGrupoInfo(grupoOrigen)?.alumnos }}
            </div>
            <div class="info-item">
              <strong>Horario:</strong> {{ getGrupoInfo(grupoOrigen)?.horario }}
            </div>
          </div>
        </div>

        <!-- Grupo Destino -->
        <div class="section-card">
          <h3>Grupo Destino</h3>
          <div class="input-group">
            <label>Seleccionar Grupo...</label>
            <select class="input-field" v-model="grupoDestino">
              <option value="">Seleccionar grupo destino</option>
              <option 
                v-for="grupo in gruposFiltrados" 
                :key="grupo.id" 
                :value="grupo.id"
                :disabled="grupo.id === grupoOrigen"
              >
                {{ grupo.nombre }} - {{ grupo.profesor }}
              </option>
            </select>
          </div>
          <div class="grupo-info" v-if="grupoDestino">
            <div class="info-item">
              <strong>Profesor:</strong> {{ getGrupoInfo(grupoDestino)?.profesor }}
            </div>
            <div class="info-item">
              <strong>Alumnos:</strong> {{ getGrupoInfo(grupoDestino)?.alumnos }}
            </div>
            <div class="info-item">
              <strong>Horario:</strong> {{ getGrupoInfo(grupoDestino)?.horario }}
            </div>
          </div>
        </div>
      </div>

      <!-- Columna Derecha - Información y Acción -->
      <div class="right-column">
        <!-- Código -->
        <div class="section-card">
          <h3>Código</h3>
          <div class="codigo-section">
            <div class="fusionar-option">
              <strong>Fusionar Grupos</strong>
            </div>
            <div class="tesor-info">
              <div class="tesor-item">
                <strong>TESOR</strong>
              </div>
              <div class="distancia-info">
                La Tamaña (4,1 km)
              </div>
            </div>
          </div>
        </div>

        <!-- Resumen de la fusión -->
        <div class="section-card">
          <h3>Resumen de la Fusión</h3>
          <div class="resumen-info">
            <div class="resumen-item">
              <label>Total de alumnos a fusionar:</label>
              <span class="resumen-value">{{ totalAlumnosFusionar }}</span>
            </div>
            <div class="resumen-item">
              <label>Nuevo total en grupo destino:</label>
              <span class="resumen-value">{{ nuevoTotalDestino }}</span>
            </div>
            <div class="resumen-item">
              <label>Grupo origen se eliminará:</label>
              <span class="resumen-value">{{ grupoOrigen ? 'Sí' : 'No' }}</span>
            </div>
          </div>
        </div>

        <!-- Botón de acción -->
        <div class="action-section">
          <button 
            class="btn-fusionar-ejecutar" 
            @click="ejecutarFusion"
            :disabled="!grupoOrigen || !grupoDestino"
          >
            Ejecutar Fusión de Grupos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FusionarGrupos',
  data() {
    return {
      grupoOrigen: '',
      grupoDestino: '',
      grupos: [
        { 
          id: 1, 
          nombre: 'Grupo A', 
          profesor: 'Prof. Rodríguez', 
          alumnos: 15,
          horario: 'Lun-Mie-Vie 8:00-10:00'
        },
        { 
          id: 2, 
          nombre: 'Grupo B', 
          profesor: 'Prof. García', 
          alumnos: 12,
          horario: 'Mar-Jue 14:00-16:00'
        },
        { 
          id: 3, 
          nombre: 'Grupo C', 
          profesor: 'Prof. Martínez', 
          alumnos: 18,
          horario: 'Sab 9:00-13:00'
        },
        { 
          id: 4, 
          nombre: 'Grupo D', 
          profesor: 'Prof. López', 
          alumnos: 10,
          horario: 'Lun-Vie 16:00-18:00'
        }
      ]
    }
  },
  computed: {
    gruposFiltrados() {
      return this.grupos.filter(grupo => grupo.id !== this.grupoOrigen);
    },
    totalAlumnosFusionar() {
      const grupoOrigenInfo = this.getGrupoInfo(this.grupoOrigen);
      return grupoOrigenInfo ? grupoOrigenInfo.alumnos : 0;
    },
    nuevoTotalDestino() {
      const grupoOrigenInfo = this.getGrupoInfo(this.grupoOrigen);
      const grupoDestinoInfo = this.getGrupoInfo(this.grupoDestino);
      return (grupoOrigenInfo?.alumnos || 0) + (grupoDestinoInfo?.alumnos || 0);
    }
  },
  methods: {
    getGrupoInfo(grupoId) {
      return this.grupos.find(grupo => grupo.id === grupoId);
    },
    ejecutarFusion() {
      if (this.grupoOrigen && this.grupoDestino) {
        const confirmacion = confirm(`¿Estás seguro de fusionar el grupo origen con el grupo destino? Esta acción no se puede deshacer.`);
        if (confirmacion) {
          alert('Fusión de grupos ejecutada exitosamente');
          // Aquí iría la lógica real de fusión
        }
      } else {
        alert('Por favor selecciona tanto el grupo origen como el grupo destino');
      }
    }
  }
}
</script>

<style scoped>
.fusionar-grupos-container {
  padding: 20px;
  background-color: #F5F7FA;
  min-height: 100vh;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  color: #1B396A;
  font-size: 24px;
  margin-bottom: 5px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.section-card {
  background: #FFFFFF;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.section-card h3 {
  color: #1B396A;
  margin-bottom: 15px;
  font-size: 16px;
  border-bottom: 1px solid #D1D5DB;
  padding-bottom: 8px;
}

.fusionar-options {
  margin-bottom: 15px;
}

.btn-fusionar {
  background-color: #1B396A;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.btn-fusionar.active {
  background-color: #2E4D88;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  color: #6B7280;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  background-color: #FFFFFF;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: #2E4D88;
}

.grupo-info {
  margin-top: 15px;
  padding: 15px;
  background-color: #F5F7FA;
  border-radius: 6px;
  border-left: 4px solid #BFA975;
}

.info-item {
  margin-bottom: 8px;
  font-size: 14px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.codigo-section {
  text-align: center;
}

.fusionar-option {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #F5F7FA;
  border-radius: 6px;
  font-size: 16px;
}

.tesor-info {
  margin-top: 15px;
}

.tesor-item {
  font-size: 18px;
  font-weight: bold;
  color: #1B396A;
  margin-bottom: 10px;
}

.distancia-info {
  color: #6B7280;
  font-size: 14px;
}

.resumen-info {
  margin-top: 10px;
}

.resumen-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #E5E7EB;
}

.resumen-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.resumen-item label {
  color: #6B7280;
  font-size: 14px;
}

.resumen-value {
  font-weight: 600;
  color: #1B396A;
}

.action-section {
  text-align: center;
  margin-top: 20px;
}

.btn-fusionar-ejecutar {
  background-color: #1B396A;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-fusionar-ejecutar:hover:not(:disabled) {
  background-color: #2E4D88;
}

.btn-fusionar-ejecutar:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>