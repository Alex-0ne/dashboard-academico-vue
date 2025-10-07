<template>
  <div class="adeudos-container">
    <!-- Header -->
    <div class="page-header">
      <h1>Operaciones</h1>
      <h2>Inscripción</h2>
    </div>

    <!-- Navegación de módulos -->
    <div class="modules-nav">
      <div class="nav-item active">Adeudos</div>
      <div class="nav-item">Cambio de grupo</div>
      <div class="nav-item">Captura de Calificaciones</div>
      <div class="nav-item">Imprimir comprobante</div>
    </div>

    <!-- Búsqueda -->
    <div class="search-section">
      <div class="search-input">
        <label>No. de Control o Nombre</label>
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="Ingresa número de control o nombre"
          class="search-field"
        >
      </div>
    </div>

    <!-- Tabla de Adeudos -->
    <div class="adeudos-table-section">
      <div class="table-header">
        <h3>Añadir Nuevo Adeudo</h3>
      </div>
      
      <div class="table-container">
        <table class="adeudos-table">
          <thead>
            <tr>
              <th>Prefijo</th>
              <th>Año</th>
              <th>Detalle</th>
              <th>Monto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(adeudo, index) in adeudos" :key="index">
              <td>
                <input 
                  v-model="adeudo.prefijo"
                  type="text"
                  class="table-input"
                  placeholder="Prefijo"
                >
              </td>
              <td>
                <input 
                  v-model="adeudo.ano"
                  type="text"
                  class="table-input"
                  placeholder="Año"
                >
              </td>
              <td>
                <input 
                  v-model="adeudo.detalle"
                  type="text"
                  class="table-input"
                  placeholder="Detalle"
                >
              </td>
              <td>
                <input 
                  v-model="adeudo.monto"
                  type="text"
                  class="table-input"
                  placeholder="Monto"
                >
              </td>
              <td>
                <button class="btn-eliminar" @click="eliminarAdeudo(index)">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Información adicional -->
    <div class="info-sections">
      <div class="info-card">
        <h4>Alumno</h4>
        <p>Detalle del adeudo del alumno</p>
      </div>
      
      <div class="info-card">
        <h4>Agregar Adeudo</h4>
        <div class="add-adeudo-form">
          <div class="form-group">
            <label>Prefijo</label>
            <input 
              v-model="nuevoAdeudo.prefijo" 
              type="text" 
              placeholder="Ingresar prefijo"
            >
          </div>
          <div class="form-group">
            <label>Año</label>
            <input 
              v-model="nuevoAdeudo.ano" 
              type="text" 
              placeholder="Ingresar año"
            >
          </div>
          <div class="form-group">
            <label>Detalle</label>
            <input 
              v-model="nuevoAdeudo.detalle" 
              type="text" 
              placeholder="Ingresar detalle"
            >
          </div>
          <div class="form-group">
            <label>Monto</label>
            <input 
              v-model="nuevoAdeudo.monto" 
              type="text" 
              placeholder="Ingresar monto"
            >
          </div>
          <button class="btn-agregar" @click="agregarAdeudo">
            Agregar Adeudo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Adeudos',
  setup() {
    const searchQuery = ref('')

    const adeudos = ref([
      { prefijo: '', ano: '2018', detalle: 'Mayo/Octubre', monto: '20000' },
      { prefijo: '', ano: '2019', detalle: 'Mayo/Octubre', monto: '20000' },
      { prefijo: 'Prefijo del adeudo', ano: '2014', detalle: 'Mayo/Octubre', monto: '20000' },
      { prefijo: '', ano: '2015', detalle: 'Mayo/Octubre', monto: '20000' },
      { prefijo: '', ano: '2016', detalle: 'Mayo/Octubre', monto: '20000' }
    ])

    const nuevoAdeudo = ref({
      prefijo: '',
      ano: '',
      detalle: '',
      monto: ''
    })

    const agregarAdeudo = () => {
      if (nuevoAdeudo.value.ano && nuevoAdeudo.value.detalle && nuevoAdeudo.value.monto) {
        adeudos.value.push({...nuevoAdeudo.value})
        nuevoAdeudo.value = { prefijo: '', ano: '', detalle: '', monto: '' }
      }
    }

    const eliminarAdeudo = (index) => {
      adeudos.value.splice(index, 1)
    }

    return {
      searchQuery,
      adeudos,
      nuevoAdeudo,
      agregarAdeudo,
      eliminarAdeudo
    }
  }
}
</script>

<style scoped>
.adeudos-container {
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

.page-header h2 {
  color: #2E4D88;
  font-size: 18px;
  margin: 0;
  font-weight: normal;
}

.modules-nav {
  display: flex;
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-item {
  padding: 10px 20px;
  cursor: pointer;
  color: #6B7280;
  border-radius: 4px;
  margin-right: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item.active {
  background-color: #1B396A;
  color: white;
}

.nav-item:hover {
  background-color: #2E4D88;
  color: white;
}

.search-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.search-input label {
  display: block;
  margin-bottom: 8px;
  color: #1B396A;
  font-weight: bold;
}

.search-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.adeudos-table-section {
  background: white;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

.table-header {
  background-color: #1B396A;
  color: white;
  padding: 15px 20px;
  margin: 0;
}

.table-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.table-container {
  padding: 20px;
}

.adeudos-table {
  width: 100%;
  border-collapse: collapse;
}

.adeudos-table th,
.adeudos-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #D1D5DB;
}

.adeudos-table th {
  background-color: #F5F7FA;
  color: #1B396A;
  font-weight: bold;
  font-size: 14px;
}

.table-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.btn-eliminar {
  background-color: #DC2626;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
}

.btn-eliminar:hover {
  background-color: #B91C1C;
}

.info-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-card h4 {
  color: #1B396A;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 600;
}

.info-card p {
  color: #6B7280;
  margin: 0;
}

.add-adeudo-form {
  display: grid;
  gap: 12px;
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

.btn-agregar {
  background-color: #1B396A;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}

.btn-agregar:hover {
  background-color: #2E4D88;
}
</style>