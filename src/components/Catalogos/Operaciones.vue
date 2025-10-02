<template>
    <div class="operaciones">
        <h1>Catálogo de Operaciones</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="operacion in operaciones" :key="operacion.id">
                    <td>{{ operacion.id }}</td>
                    <td>{{ operacion.nombre }}</td>
                    <td>{{ operacion.descripcion }}</td>
                    <td>
                        <button @click="editarOperacion(operacion)">Editar</button>
                        <button @click="eliminarOperacion(operacion.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <form @submit.prevent="agregarOperacion">
            <h2>Agregar Nueva Operación</h2>
            <input v-model="nuevaOperacion.nombre" placeholder="Nombre" required />
            <input v-model="nuevaOperacion.descripcion" placeholder="Descripción" required />
            <button type="submit">Agregar</button>
        </form>
        <div v-if="editandoOperacion">
            <h2>Editar Operación</h2>
            <form @submit.prevent="guardarEdicion">
                <input v-model="editandoOperacion.nombre" placeholder="Nombre" required />
                <input v-model="editandoOperacion.descripcion" placeholder="Descripción" required />
                <button type="submit">Guardar</button>
                <button type="button" @click="cancelarEdicion">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Operaciones',
    data() {
        return {
            operaciones: [
                { id: 1, nombre: 'Operación A', descripcion: 'Descripción de A' },
                { id: 2, nombre: 'Operación B', descripcion: 'Descripción de B' }
            ],
            nuevaOperacion: {
                nombre: '',
                descripcion: ''
            },
            editandoOperacion: null
        };
    },
    methods: {
        agregarOperacion() {
            const nueva = {
                id: Date.now(),
                nombre: this.nuevaOperacion.nombre,
                descripcion: this.nuevaOperacion.descripcion
            };
            this.operaciones.push(nueva);
            this.nuevaOperacion.nombre = '';
            this.nuevaOperacion.descripcion = '';
        },
        editarOperacion(operacion) {
            this.editandoOperacion = { ...operacion };
        },
        guardarEdicion() {
            const index = this.operaciones.findIndex(op => op.id === this.editandoOperacion.id);
            if (index !== -1) {
                this.operaciones.splice(index, 1, { ...this.editandoOperacion });
            }
            this.editandoOperacion = null;
        },
        cancelarEdicion() {
            this.editandoOperacion = null;
        },
        eliminarOperacion(id) {
            this.operaciones = this.operaciones.filter(op => op.id !== id);
        }
    }
};
</script>

<style scoped>
.operaciones {
    max-width: 700px;
    margin: 0 auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1em;
}
th, td {
    border: 1px solid #ccc;
    padding: 0.5em;
    text-align: left;
}
form {
    margin-top: 1em;
}
input {
    margin-right: 0.5em;
}
button {
    margin-right: 0.5em;
}
</style>