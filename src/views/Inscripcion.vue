<template>
  <div class="inscripcion-container">
    <!-- Header Principal MODIFICADO -->
    <div class="header">
      <h1>Inscripción</h1>
      <!-- ELIMINAR los botones duplicados que ya están en el sidebar -->
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Formulario -->
      <div class="left-column">
        <!-- Datos del alumno -->
        <div class="section-card">
          <h3>1. Datos del alumno</h3>
          <div class="input-group">
            <label>No. de Control o Nombre</label>
            <input type="text" class="input-field" v-model="busquedaAlumno" placeholder="Buscar alumno...">
          </div>
        </div>

        <!-- Detalles de la inscripción -->
        <div class="section-card">
          <h3>2. Detalles de la inscripción</h3>
          <div class="input-group">
            <label>Seleccionar Módulo...</label>
            <select class="input-field" v-model="moduloSeleccionado">
              <option value="">Seleccionar módulo</option>
              <option v-for="modulo in modulos" :key="modulo.id" :value="modulo.id">
                {{ modulo.nombre }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label>Seleccionar Grupo...</label>
            <select class="input-field" v-model="grupoSeleccionado">
              <option value="">Seleccionar grupo</option>
              <option v-for="grupo in grupos" :key="grupo.id" :value="grupo.id">
                {{ grupo.nombre }}
              </option>
            </select>
          </div>
        </div>

        <!-- Generales -->
        <div class="section-card generales-card">
          <h3>Generales:</h3>
          <div class="alumno-info">
            <strong>{{ nombreAlumno }}</strong>
          </div>
          <button class="btn-inscribir" @click="inscribirAlumno">
            Inscribir
          </button>
        </div>
      </div>

      <!-- Columna Derecha - Información -->
      <div class="right-column">
        <!-- Informe -->
        <div class="section-card">
          <h3>Informe:</h3>
          <div class="dias-semana">
            <div class="dia" v-for="dia in diasSemana" :key="dia">
              <strong>{{ dia }}</strong>
            </div>
          </div>
        </div>

        <!-- Ficha del recibo -->
        <div class="section-card">
          <h3>Ficha del recibo:</h3>
          <div class="monto-section">
            <label>Monto</label>
            <input type="text" class="input-field monto-input" v-model="monto" placeholder="$0.00">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inscripcion',
  data() {
    return {
      busquedaAlumno: '',
      moduloSeleccionado: '',
      grupoSeleccionado: '',
      nombreAlumno: 'Daniela Quiroz',
      monto: '',
      modulos: [
        { id: 1, nombre: 'Módulo 1 - Matemáticas' },
        { id: 2, nombre: 'Módulo 2 - Ciencias' },
        { id: 3, nombre: 'Módulo 3 - Humanidades' }
      ],
      grupos: [
        { id: 1, nombre: 'Grupo A' },
        { id: 2, nombre: 'Grupo B' },
        { id: 3, nombre: 'Grupo C' }
      ],
      diasSemana: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    }
  },
  methods: {
    inscribirAlumno() {
      // Lógica para inscribir alumno
      alert('Alumno inscrito correctamente')
    }
  }
}
</script>

<style scoped>
.inscripcion-container {
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

/* ELIMINAR estilos de opciones-inscripcion ya que se quitaron los botones */

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

.generales-card {
  text-align: center;
}

.alumno-info {
  margin: 15px 0;
  padding: 10px;
  background-color: #F5F7FA;
  border-radius: 6px;
}

.btn-inscribir {
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

.btn-inscribir:hover {
  background-color: #2E4D88;
}

.dias-semana {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.dia {
  padding: 10px;
  background-color: #F5F7FA;
  border-radius: 6px;
  text-align: center;
}

.monto-section label {
  display: block;
  color: #6B7280;
  margin-bottom: 8px;
  font-weight: 500;
}

.monto-input {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>