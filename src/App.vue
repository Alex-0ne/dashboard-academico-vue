<template>
  <div id="app">
    <Header />
    <div class="app-container">
      <Sidebar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, sans-serif;
}

.app-container {
  display: flex;
  height: calc(100vh - 60px); /* Restar altura del header */
}

.main-content {
  flex: 1;
  background-color: #F5F7FA;
  overflow-y: auto;
}
</style>