<template>
  <div class="adeudos-container">
    <!-- Header simple con solo "Operaciones" -->
    <div class="page-header">
      <h1>Operaciones</h1>
    </div>

    <!-- Sección principal -->
    <div class="adeudos-content">
      <!-- Cuadro de búsqueda funcional -->
      <div class="search-section">
        <div class="search-box">
          <input 
            type="text" 
            v-model="terminoBusqueda"
            placeholder="No. de Control o Nombre"
            @keyup.enter="buscarAdeudos"
            class="search-input"
          >
          <button class="search-btn" @click="buscarAdeudos">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
        </div>
        <p class="search-note">Nota: Puede buscar por No. de Control o Nombre del alumno</p>
      </div>

      <!-- Formulario para añadir adeudo -->
      <div class="add-adeudo-section">
        <h3>Añadir Nuevo Adeudo</h3>
        <div class="form-fields">
          <div class="form-group">
            <label>Periodo del adeudo</label>
            <input type="text" v-model="nuevoAdeudo.periodo" placeholder="Ej: Enero Junio">
          </div>
          <div class="form-group">
            <label>Año</label>
            <input type="text" v-model="nuevoAdeudo.ano" placeholder="Ej: 2024">
          </div>
          <div class="form-group">
            <label>Detalle del adeudo</label>
            <input type="text" v-model="nuevoAdeudo.detalle" placeholder="Ej: Inscripción tardía">
          </div>
          <div class="form-group">
            <label>Monto ($)</label>
            <input type="number" v-model="nuevoAdeudo.monto" placeholder="0.00" step="0.01" min="0">
          </div>
        </div>
        <button class="btn-agregar" @click="agregarAdeudo">Agregar Adeudo</button>
      </div>

      <!-- Tabla de adeudos actuales -->
      <div class="adeudos-actuales">
        <h3>Adeudos Actuales</h3>
        <div class="result-info" v-if="terminoBusqueda">
          <p>Mostrando resultados para: <strong>"{{ terminoBusqueda }}"</strong></p>
        </div>
        <table class="adeudos-table">
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Año</th>
              <th>Detalle</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(adeudo, index) in adeudosFiltrados" :key="index">
              <td>{{ adeudo.periodo }}</td>
              <td>{{ adeudo.ano }}</td>
              <td>{{ adeudo.detalle }}</td>
              <td>${{ formatMonto(adeudo.monto) }}</td>
            </tr>
          </tbody>
        </table>
        <div class="no-results" v-if="adeudosFiltrados.length === 0 && terminoBusqueda">
          <p>No se encontraron adeudos para "{{ terminoBusqueda }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adeudos',
  data() {
    return {
      terminoBusqueda: '',
      nuevoAdeudo: {
        periodo: '',
        ano: '',
        detalle: '',
        monto: ''
      },
      // Base de datos simulada de adeudos
      todosLosAdeudos: [
        {
          id: 1,
          numeroControl: '2024001',
          nombre: 'Juan Pérez García',
          periodo: 'Enero Junio',
          ano: '2024',
          detalle: 'Inscripción tardía',
          monto: 500.00
        },
        {
          id: 2,
          numeroControl: '2024001',
          nombre: 'Juan Pérez García',
          periodo: 'Enero Junio',
          ano: '2024',
          detalle: 'Materiales educativos',
          monto: 300.00
        },
        {
          id: 3,
          numeroControl: '2024002',
          nombre: 'María López Hernández',
          periodo: 'Enero Junio',
          ano: '2024',
          detalle: 'Inscripción tardía',
          monto: 500.00
        },
        {
          id: 4,
          numeroControl: '2024003',
          nombre: 'Carlos Rodríguez',
          periodo: 'Enero Junio',
          ano: '2024',
          detalle: 'Laboratorio de cómputo',
          monto: 200.00
        },
        {
          id: 5,
          numeroControl: '2024004',
          nombre: 'Ana Martínez',
          periodo: 'Enero Junio',
          ano: '2024',
          detalle: 'Inscripción tardía',
          monto: 500.00
        }
      ],
      adeudosFiltrados: []
    }
  },
  methods: {
    buscarAdeudos() {
      if (!this.terminoBusqueda.trim()) {
        this.adeudosFiltrados = [];
        return;
      }

      const termino = this.terminoBusqueda.toLowerCase().trim();
      
      this.adeudosFiltrados = this.todosLosAdeudos.filter(adeudo => 
        adeudo.numeroControl.toLowerCase().includes(termino) ||
        adeudo.nombre.toLowerCase().includes(termino)
      );
    },

    agregarAdeudo() {
      // Validar que todos los campos estén llenos
      if (this.nuevoAdeudo.periodo && this.nuevoAdeudo.ano && this.nuevoAdeudo.detalle && this.nuevoAdeudo.monto) {
        
        // Validar que el monto sea un número válido
        const monto = parseFloat(this.nuevoAdeudo.monto);
        if (isNaN(monto) || monto <= 0) {
          alert('Por favor ingrese un monto válido');
          return;
        }

        // En un caso real, aquí se enviaría al backend
        const nuevoAdeudo = {
          id: Date.now(),
          numeroControl: this.terminoBusqueda || 'N/A',
          nombre: 'Alumno agregado',
          periodo: this.nuevoAdeudo.periodo,
          ano: this.nuevoAdeudo.ano,
          detalle: this.nuevoAdeudo.detalle,
          monto: monto
        };
        
        this.todosLosAdeudos.push(nuevoAdeudo);
        
        // Si hay una búsqueda activa, actualizar los resultados
        if (this.terminoBusqueda) {
          this.buscarAdeudos();
        }
        
        // Limpiar formulario
        this.limpiarFormulario();
        
        // Mostrar mensaje de éxito
        alert('Adeudo agregado correctamente');
      } else {
        alert('Por favor complete todos los campos');
      }
    },

    limpiarFormulario() {
      this.nuevoAdeudo = {
        periodo: '',
        ano: '',
        detalle: '',
        monto: ''
      };
    },

    formatMonto(monto) {
      // Formatear el monto a 2 decimales
      return parseFloat(monto).toFixed(2);
    }
  },

  mounted() {
    // Inicializar con lista vacía hasta que se realice una búsqueda
    this.adeudosFiltrados = [];
  }
}
</script>

<style scoped>
.adeudos-container {
  padding: 20px;
  background: #F5F7FA;
  min-height: 100vh;
}

.page-header {
  background: #1B396A;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.page-header h1 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.adeudos-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Estilos para el cuadro de búsqueda */
.search-section {
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #D1D5DB;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;
}

.search-input:focus {
  border-color: #2E4D88;
  box-shadow: 0 0 0 2px rgba(46, 77, 136, 0.1);
}

.search-btn {
  background: #2E4D88;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-btn:hover {
  background: #1B396A;
}

.search-note {
  margin: 0;
  color: #6B7280;
  font-size: 12px;
  font-style: italic;
}

/* Estilos para el formulario */
.add-adeudo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
}

.add-adeudo-section h3 {
  color: #1B396A;
  margin-bottom: 15px;
  font-size: 16px;
}

.form-fields {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  color: #6B7280;
  font-weight: 500;
  font-size: 14px;
}

.form-group input {
  padding: 8px 12px;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 14px;
}

.form-group input:focus {
  border-color: #2E4D88;
  outline: none;
  box-shadow: 0 0 0 2px rgba(46, 77, 136, 0.1);
}

.btn-agregar {
  background: #BFA975;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

.btn-agregar:hover {
  background: #a89262;
}

.adeudos-actuales h3 {
  color: #1B396A;
  margin-bottom: 15px;
  font-size: 16px;
}

.result-info {
  background: #EFF6FF;
  padding: 10px 15px;
  border-radius: 4px;
  margin-bottom: 15px;
  border-left: 4px solid #2E4D88;
}

.result-info p {
  margin: 0;
  color: #6B7280;
  font-size: 14px;
}

.adeudos-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.adeudos-table th {
  background: #2E4D88;
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
}

.adeudos-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #E5E7EB;
  color: #6B7280;
}

.adeudos-table tr:nth-child(even) {
  background: #F9FAFB;
}

.no-results {
  text-align: center;
  padding: 30px;
  color: #6B7280;
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .form-fields {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .form-fields {
    grid-template-columns: 1fr;
  }
}
</style>