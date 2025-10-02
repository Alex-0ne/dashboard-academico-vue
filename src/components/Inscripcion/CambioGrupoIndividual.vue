<template>
  <div class="cambio-grupo-container">
    <!-- Header Principal MODIFICADO -->
    <div class="header">
      <h1>Cambio Individual</h1>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Formulario -->
      <div class="left-column">
        <!-- Datos del alumno -->
        <div class="section-card">
          <h3>Datos del alumno</h3>
          <div class="input-group">
            <label>No. de Control o Nombre</label>
            <input type="text" class="input-field" v-model="busquedaAlumno" placeholder="Buscar alumno...">
          </div>
        </div>

        <!-- Grupo Actual -->
        <div class="section-card">
          <h3>Grupo Actual</h3>
          <div class="input-group">
            <label>Profesor Actual</label>
            <input type="text" class="input-field" v-model="profesorActual" readonly>
          </div>
          <div class="input-group">
            <label>Descripción del Grupo</label>
            <textarea class="input-field textarea-field" v-model="descripcionGrupoActual" readonly></textarea>
          </div>
        </div>
      </div>

      <!-- Columna Derecha - Nuevo Grupo -->
      <div class="right-column">
        <!-- Asignar Nuevo Grupo -->
        <div class="section-card">
          <h3>Asignar Nuevo Grupo</h3>
          <div class="input-group">
            <label>Seleccionar Grupo...</label>
            <select class="input-field" v-model="nuevoGrupo">
              <option value="">Seleccionar grupo</option>
              <option v-for="grupo in gruposDisponibles" :key="grupo.id" :value="grupo.id">
                {{ grupo.nombre }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <label>Nuevo Profesor</label>
            <input type="text" class="input-field" v-model="nuevoProfesor" readonly>
          </div>
          <div class="input-group">
            <label>Descripción del Grupo</label>
            <textarea class="input-field textarea-field" v-model="descripcionNuevoGrupo" readonly></textarea>
          </div>
        </div>

        <!-- Ficha del recibo MODIFICADA -->
        <div class="section-card">
          <h3>Ficha del recibo:</h3>
          <div class="recibo-info">
            <div class="recibo-item">
              <label>Folio</label>
              <input type="text" class="input-field recibo-field" v-model="folio" placeholder="Folio automático">
            </div>
            <div class="recibo-item">
              <label>Monto</label>
              <input type="text" class="input-field recibo-field" v-model="monto" placeholder="$0.00">
            </div>
          </div>
        </div>

        <!-- Botón de acción -->
        <div class="action-section">
          <button class="btn-cambiar-grupo" @click="realizarCambioGrupo">
            Realizar Cambio de Grupo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CambioGrupoIndividual',
  data() {
    return {
      busquedaAlumno: '',
      profesorActual: 'Profesor Actual del Alumno',
      descripcionGrupoActual: 'Descripción del grupo actual del alumno...',
      nuevoGrupo: '',
      nuevoProfesor: 'Nuevo Profesor Asignado',
      descripcionNuevoGrupo: 'Descripción del nuevo grupo...',
      folio: 'CG-' + new Date().getTime(),
      monto: '$250.00',
      gruposDisponibles: [
        { id: 1, nombre: 'Grupo A - Matutino' },
        { id: 2, nombre: 'Grupo B - Vespertino' },
        { id: 3, nombre: 'Grupo C - Sabatino' },
        { id: 4, nombre: 'Grupo D - Intensivo' }
      ]
    }
  },
  methods: {
    realizarCambioGrupo() {
      // Lógica para cambiar de grupo
      if (this.nuevoGrupo) {
        alert('Cambio de grupo realizado exitosamente')
      } else {
        alert('Por favor selecciona un nuevo grupo')
      }
    }
  }
}
</script>

<style scoped>
.cambio-grupo-container {
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

/* ELIMINADO: header h2 styles ya que solo usamos h1 */

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

.input-field:read-only {
  background-color: #F5F7FA;
  color: #6B7280;
}

.textarea-field {
  min-height: 80px;
  resize: vertical;
}

.input-field:focus {
  outline: none;
  border-color: #2E4D88;
}

/* NUEVO: Estilos para la ficha del recibo */
.recibo-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.recibo-item label {
  display: block;
  color: #6B7280;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}

.recibo-field {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  background-color: #F5F7FA;
}

.action-section {
  text-align: center;
  margin-top: 20px;
}

.btn-cambiar-grupo {
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

.btn-cambiar-grupo:hover {
  background-color: #2E4D88;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .recibo-info {
    grid-template-columns: 1fr;
  }
}
</style>