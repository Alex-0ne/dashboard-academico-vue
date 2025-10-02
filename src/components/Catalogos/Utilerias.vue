<template>
    <div class="utilerias">
        <h1>Utilerías</h1>
        <div class="utilerias-list">
            <div class="utileria-card" v-for="util in utilerias" :key="util.id">
                <h2>{{ util.nombre }}</h2>
                <p>{{ util.descripcion }}</p>
                <button @click="util.accion()">Ejecutar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Utilerias',
    data() {
        return {
            utilerias: [
                {
                    id: 1,
                    nombre: 'Limpiar Caché',
                    descripcion: 'Elimina los datos temporales almacenados en la aplicación.',
                    accion: () => alert('Caché limpiada correctamente.')
                },
                {
                    id: 2,
                    nombre: 'Reiniciar Configuración',
                    descripcion: 'Restaura la configuración de la aplicación a los valores predeterminados.',
                    accion: () => alert('Configuración reiniciada.')
                }
            ]
        }
    }
}
</script>

<style scoped>
.utilerias {
    padding: 2rem;
}
.utilerias-list {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}
.utileria-card {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 1rem;
    width: 250px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.utileria-card h2 {
    margin: 0 0 0.5rem 0;
}
.utileria-card button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #1976d2;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.utileria-card button:hover {
    background: #1565c0;
}
</style>