<template>
  <div class="consultas-container">
    <!-- Header Principal -->
    <div class="header">
      <h1>Consultas</h1>
      <h2>Consulta por Alumno</h2>
      <p>Consulta de Grupos</p>
    </div>

    <div class="content-grid">
      <!-- Columna Izquierda - Catálogos y Operaciones -->
      <div class="left-column">
        <!-- Catálogos -->
        <div class="section-card">
          <h3>Catálogos</h3>
          <div class="input-group">
            <label>No. de Control o Nombre</label>
            <input type="text" class="input-field" v-model="busquedaAlumno">
          </div>
        </div>

        <!-- Operaciones -->
        <div class="section-card">
          <h3>Operaciones</h3>
          <div class="input-group">
            <label>Nombre del Alumno:</label>
            <input type="text" class="input-field" v-model="nombreAlumno" readonly>
          </div>
        </div>

        <!-- Impresiones -->
        <div class="section-card">
          <h3>Impresiones</h3>
          <div class="input-group">
            <label>Status del alumno:</label>
            <input type="text" class="input-field" value="Activo" readonly>
          </div>
        </div>

        <!-- Utilerías -->
        <div class="section-card">
          <h3>Utilerías</h3>
          <div class="input-group">
            <label>Semestre actual:</label>
            <input type="text" class="input-field" value="Noveno" readonly>
          </div>
          <div class="input-group">
            <label>Tabuador de pago:</label>
            <input type="text" class="input-field" placeholder="_____">
          </div>
        </div>
      </div>

      <!-- Columna Derecha - Cardex y Grupos -->
      <div class="right-column">
        <!-- Cardex del Alumno -->
        <div class="section-card">
          <h3>Cardex del Alumno</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>cal_mod</th>
                <th>cal_cal</th>
                <th>cal_acr</th>
                <th>cal_per</th>
                <th>cal_m_o</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cardexData" :key="index">
                <td>{{ item.cal_mod }}</td>
                <td>{{ item.cal_cal }}</td>
                <td>{{ item.cal_acr }}</td>
                <td>{{ item.cal_per }}</td>
                <td>{{ item.cal_m_o }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Alumnos por Grupo -->
        <div class="section-card">
          <h3>Alumnos por Grupo</h3>
          <p>Resumen de grupos</p>
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
                <td>{{ grupo.grup_mod }}</td>
                <td>{{ grupo.grup_cgr }}</td>
                <td>{{ grupo.grup_can }}</td>
                <td>{{ grupo.grup_i }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Consultas',
  data() {
    return {
      busquedaAlumno: '',
      nombreAlumno: 'Daniela Quiroz',
      cardexData: [
        { cal_mod: 11, cal_cal: 90, cal_acr: 4044, cal_per: 2015, cal_m_o: '' },
        { cal_mod: 12, cal_cal: 60, cal_acr: 4044, cal_per: 2015, cal_m_o: '' },
        { cal_mod: 13, cal_cal: 50, cal_acr: 4044, cal_per: 2015, cal_m_o: '' },
        { cal_mod: 14, cal_cal: 60, cal_acr: 4044, cal_per: 2015, cal_m_o: '' }
      ],
      gruposData: [
        { grup_mod: '', grup_cgr: '', grup_can: '', grup_i: '' }
      ]
    }
  }
}
</script>

<style scoped>
.consultas-container {
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
  margin-bottom: 10px;
}

.header h2 {
  color: #2E4D88;
  font-size: 18px;
  margin-bottom: 5px;
}

.header p {
  color: #6B7280;
  font-size: 14px;
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

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  color: #6B7280;
  margin-bottom: 5px;
  font-size: 14px;
}

.input-field {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  background-color: #FFFFFF;
}

.input-field:read-only {
  background-color: #F5F7FA;
  color: #6B7280;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.data-table th,
.data-table td {
  border: 1px solid #D1D5DB;
  padding: 8px 12px;
  text-align: left;
  font-size: 14px;
}

.data-table th {
  background-color: #1B396A;
  color: #FFFFFF;
  font-weight: 600;
}

.data-table td {
  background-color: #FFFFFF;
  color: #000000;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>