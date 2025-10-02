<template>
  <div class="dashboard-container">
    <div class="main-content">
      <div class="content-header">
        <h1>Dashboard Académico</h1>
        <p>Sistema de gestión académica integral</p>
      </div>
      
      <div class="content-body">
        <div class="welcome-grid">
          <div class="card">
            <h3 class="card-title">Bienvenido</h3>
            <p>Selecciona una opción del menú lateral para comenzar</p>
          </div>
          <div class="card">
            <h3 class="card-title">Consultas</h3>
            <p>Consulta información de alumnos y grupos</p>
          </div>
          <div class="card">
            <h3 class="card-title">Operaciones</h3>
            <p>Gestión de inscripciones y procesos académicos</p>
          </div>
          <div class="card">
            <h3 class="card-title">Catálogos</h3>
            <p>Administración de datos del sistema</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard-container {
  min-height: calc(100vh - 60px);
}

.main-content {
  padding: 20px;
  background: #F5F7FA;
  min-height: 100%;
}

.content-header {
  margin-bottom: 30px;
}

.content-header h1 {
  font-size: 2rem;
  color: #1B396A;
  margin-bottom: 8px;
}

.content-header p {
  color: #6B7280;
  font-size: 1rem;
}

.welcome-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 25px;
  border: 1px solid #D1D5DB;
}

.card-title {
  font-size: 1.3rem;
  color: #1B396A;
  margin-bottom: 15px;
  font-weight: 600;
}

.card p {
  color: #6B7280;
  line-height: 1.5;
}
</style>