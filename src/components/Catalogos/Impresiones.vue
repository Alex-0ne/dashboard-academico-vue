<template>
    <div class="impresiones">
        <h1>Catálogo de Impresiones</h1>
        <div>
            <button @click="abrirModal">Agregar Impresión</button>
        </div>
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
                <tr v-for="impresion in impresiones" :key="impresion.id">
                    <td>{{ impresion.id }}</td>
                    <td>{{ impresion.nombre }}</td>
                    <td>{{ impresion.descripcion }}</td>
                    <td>
                        <button @click="editarImpresion(impresion)">Editar</button>
                        <button @click="eliminarImpresion(impresion.id)">Eliminar</button>
                    </td>
                </tr>
                <tr v-if="impresiones.length === 0">
                    <td colspan="4">No hay impresiones registradas.</td>
                </tr>
            </tbody>
        </table>

        <div v-if="mostrarModal" class="modal">
            <div class="modal-content">
                <h2>{{ impresionSeleccionada ? 'Editar' : 'Agregar' }} Impresión</h2>
                <form @submit.prevent="guardarImpresion">
                    <div>
                        <label>Nombre:</label>
                        <input v-model="form.nombre" required />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input v-model="form.descripcion" required />
                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                        <button type="button" @click="cerrarModal">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Impresiones',
    data() {
        return {
            impresiones: [],
            mostrarModal: false,
            impresionSeleccionada: null,
            form: {
                nombre: '',
                descripcion: ''
            }
        };
    },
    methods: {
        abrirModal() {
            this.impresionSeleccionada = null;
            this.form = { nombre: '', descripcion: '' };
            this.mostrarModal = true;
        },
        cerrarModal() {
            this.mostrarModal = false;
        },
        guardarImpresion() {
            if (this.impresionSeleccionada) {
                // Editar
                Object.assign(this.impresionSeleccionada, this.form);
            } else {
                // Agregar
                const nuevaImpresion = {
                    id: Date.now(),
                    nombre: this.form.nombre,
                    descripcion: this.form.descripcion
                };
                this.impresiones.push(nuevaImpresion);
            }
            this.cerrarModal();
        },
        editarImpresion(impresion) {
            this.impresionSeleccionada = impresion;
            this.form = { ...impresion };
            this.mostrarModal = true;
        },
        eliminarImpresion(id) {
            this.impresiones = this.impresiones.filter(i => i.id !== id);
        }
    }
};
</script>

<style scoped>
.impresiones {
    padding: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}
th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}
.modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    min-width: 300px;
}
</style>