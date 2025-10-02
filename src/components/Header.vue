<template>
  <header class="header">
    <div class="header-content">
      <h2>Sistema Académico</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #1B396A;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content h2 {
  margin: 0;
  font-size: 1.2rem;
}
</style>