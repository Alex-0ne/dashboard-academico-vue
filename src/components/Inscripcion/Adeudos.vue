<template>
  <div class="adeudos-content">
    <div class="grid-2">
      <!-- Columna izquierda: Datos del alumno -->
      <div class="card">
        <h3 class="card-title">1. Datos del alumno</h3>
        
        <div class="form-group">
          <label>No. de Control o Nombre</label>
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Ingrese número de control o nombre"
            class="search-input"
          >
        </div>
        
        <div class="form-group">
          <label>Número de control:</label>
          <input 
            type="text" 
            v-model="student.controlNumber"
            class="readonly-field"
          >
        </div>
        
        <div class="form-group">
          <label>Nombre del Alumno:</label>
          <input 
            type="text" 
            v-model="student.name"
            class="readonly-field"
          >
        </div>
        
        <div class="form-group">
          <label>Status del alumno:</label>
          <input 
            type="text" 
            v-model="student.status"
            class="readonly-field"
          >
        </div>
        
        <div class="form-group">
          <label>Semestre actual:</label>
          <input 
            type="text" 
            v-model="student.semester"
            class="readonly-field"
          >
        </div>
        
        <div class="form-group">
          <label>Tabulador de pago:</label>
          <input 
            type="text" 
            v-model="student.paymentTable"
          >
        </div>
        
        <div class="form-group">
          <label>Plan de estudio:</label>
          <input 
            type="text" 
            v-model="student.studyPlan"
          >
        </div>
      </div>

      <!-- Columna derecha: Detalles de inscripción -->
      <div class="card">
        <h3 class="card-title">2. Detalles de la Inscripción</h3>
        
        <div class="form-group">
          <label>Seleccionar Módulo...</label>
          <select v-model="selectedModule">
            <option value="">Seleccione un módulo</option>
            <option value="matematicas">Matemáticas</option>
            <option value="ciencias">Ciencias</option>
            <option value="humanidades">Humanidades</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Seleccionar Grupo...</label>
          <select v-model="selectedGroup">
            <option value="">Seleccione un grupo</option>
            <option value="grupo-a">Grupo A</option>
            <option value="grupo-b">Grupo B</option>
            <option value="grupo-c">Grupo C</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Catedrático:</label>
          <input type="text" v-model="professor" class="readonly-field">
        </div>
        
        <div class="form-group">
          <label>Inscrita:</label>
          <input type="text" value="Horario" class="readonly-field">
        </div>
        
        <!-- Horario como en el mockup -->
        <div class="horario-section">
          <label>Horario</label>
          <table class="horario-table">
            <thead>
              <tr>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" v-model="horario.lunes" placeholder="7-9"></td>
                <td><input type="text" v-model="horario.martes" placeholder="7-9"></td>
                <td><input type="text" v-model="horario.miercoles" placeholder="7-9"></td>
                <td><input type="text" v-model="horario.jueves" placeholder="7-9"></td>
                <td><input type="text" v-model="horario.viernes" placeholder="7-9"></td>
                <td><input type="text" v-model="horario.sabado" placeholder="7-9"></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>Folio del recibo:</label>
            <input type="text" v-model="folioRecibo">
          </div>
          <div class="form-group">
            <label>Monto:</label>
            <input type="text" v-model="monto" placeholder="$0.00">
          </div>
        </div>
        
        <button class="btn btn-primary" @click="procesarInscripcion">Procesar Inscripción</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'Adeudos',
  setup() {
    const searchQuery = ref('')
    const selectedModule = ref('')
    const selectedGroup = ref('')
    const professor = ref('Daniela Quiroz')
    const folioRecibo = ref('')
    const monto = ref('')

    const student = ref({
      controlNumber: 's21030111',
      name: 'Daniela Quiroz',
      status: 'Activo',
      semester: 'Noveno',
      paymentTable: '......',
      studyPlan: '......'
    })

    const horario = ref({
      lunes: '',
      martes: '',
      miercoles: '',
      jueves: '',
      viernes: '',
      sabado: ''
    })

    // Actualizar profesor basado en grupo seleccionado
    watch(selectedGroup, (nuevoGrupo) => {
      const profesores = {
        'grupo-a': 'Profesor A',
        'grupo-b': 'Profesor B',
        'grupo-c': 'Profesor C'
      }
      professor.value = profesores[nuevoGrupo] || 'Daniela Quiroz'
    })

    const procesarInscripcion = () => {
      alert('Inscripción procesada exitosamente')
    }

    return {
      searchQuery,
      selectedModule,
      selectedGroup,
      professor,
      folioRecibo,
      monto,
      student,
      horario,
      procesarInscripcion
    }
  }
}
</script>

<style scoped>
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.3rem;
  color: #1B396A;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #D1D5DB;
  font-weight: 600;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #888888;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #2E4D88;
}

.readonly-field {
  background-color: #F5F7FA !important;
  color: #6B7280 !important;
}

.horario-section {
  margin: 20px 0;
}

.horario-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.horario-table th, .horario-table td {
  border: 1px solid #D1D5DB;
  padding: 8px;
  text-align: center;
}

.horario-table th {
  background: #F5F7FA;
  color: #1B396A;
  font-weight: 600;
}

.horario-table input {
  width: 100%;
  border: none;
  text-align: center;
  background: transparent;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.btn-primary {
  background: #1B396A;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: 10px;
}

.btn-primary:hover {
  background: #2E4D88;
}
</style>