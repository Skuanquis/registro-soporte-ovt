<script setup>
import { ref, onMounted } from 'vue';
import { getPreguntasFrecuentes, addPregunta } from '@/services/userService';
import { useToast } from 'primevue/usetoast';
import { jwtDecode } from "jwt-decode";

const preguntas = ref({
    roe: [],
    planillas: [],
    resolucion: [],
    otros: []
});

const categoriaOptions = ref([
    { name: 'ROE', code: 'roe' },
    { name: 'Planillas', code: 'planillas' },
    { name: 'Resolusiones', code: 'resolucion' },
    { name: 'Otros', code: 'otros' }
]);

const dialogVisible = ref(false);
const categoria = ref(null);
const datos = ref({ pregunta: '', respuesta: '' });

const toast = useToast();

const fetchPreguntasData = async () => {
    try {
        const response = await getPreguntasFrecuentes();
        const data = response.data;

        preguntas.value.roe = data.filter(p => p.categoria.toLowerCase() === 'roe');
        preguntas.value.planillas = data.filter(p => p.categoria.toLowerCase() === 'planillas');
        preguntas.value.resolucion = data.filter(p => p.categoria.toLowerCase() === 'resolucion');
        preguntas.value.otros = data.filter(p => p.categoria.toLowerCase() === 'otros');
    } catch (error) {
        console.error(error);
    }
};

const showAddDialog = () => {
    dialogVisible.value = true;
};

const hideDialog = () => {
    dialogVisible.value = false;
    categoria.value = null;
    datos.value = { pregunta: '', respuesta: '' };
};

const guardarCambios = async () => {
    if (!categoria.value || !datos.value.pregunta || !datos.value.respuesta) {
        toast.add({ severity: 'warn', summary: 'Advertencia', detail: 'Todos los campos son obligatorios', life: 3000 });
        return;
    }
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const id_usuario = decoded.id;
    const nuevaPregunta = {
        categoria: categoria.value.name.toLowerCase(),
        pregunta: datos.value.pregunta,
        respuesta: datos.value.respuesta,
        id_usuario: id_usuario
    };

    try {
        await addPregunta(nuevaPregunta);
        toast.add({ severity: 'success', summary: 'Éxito', detail: 'Pregunta agregada exitosamente', life: 3000 });
        fetchPreguntasData();
        hideDialog();
    } catch (error) {
        console.error(error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar la pregunta', life: 3000 });
    }
};

onMounted(fetchPreguntasData);
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="card" v-if="preguntas.roe && preguntas.roe.length">
                <h5>ROE</h5>
                <Accordion>
                    <AccordionTab v-for="(pregunta, index) in preguntas.roe" :key="index" :header="pregunta.pregunta">
                        <p class="line-height-3 m-0">{{ pregunta.respuesta }}</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card" v-if="preguntas.planillas && preguntas.planillas.length">
                <h5>Planillas</h5>
                <Accordion>
                    <AccordionTab v-for="(pregunta, index) in preguntas.planillas" :key="index"
                        :header="pregunta.pregunta">
                        <p class="line-height-3 m-0">{{ pregunta.respuesta }}</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card" v-if="preguntas.resolucion && preguntas.resolucion.length">
                <h5>RM 152/24 y RM 105/18</h5>
                <Accordion>
                    <AccordionTab v-for="(pregunta, index) in preguntas.resolucion" :key="index"
                        :header="pregunta.pregunta">
                        <p class="line-height-3 m-0">{{ pregunta.respuesta }}</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card" v-if="preguntas.otros && preguntas.otros.length">
                <h5>Contraseña y Otros</h5>
                <Accordion>
                    <AccordionTab v-for="(pregunta, index) in preguntas.otros" :key="index" :header="pregunta.pregunta">
                        <p class="line-height-3 m-0">{{ pregunta.respuesta }}</p>
                    </AccordionTab>
                </Accordion>
            </div>
            <div class="p-fluid mt-3">
                <Button label="Añadir Pregunta" class="mr-2 mb-2" @click="showAddDialog" />
            </div>
            <Dialog v-model:visible="dialogVisible" :style="{ width: '450px' }" header="Añadir Pregunta" :modal="true"
                class="p-fluid">
                <div class="field">
                    <h5>Datos de la pregunta</h5>
                    <FloatLabel>
                        <Dropdown id="categoria" :options="categoriaOptions" v-model="categoria" optionLabel="name" />
                        <label for="categoria">Categoría</label>
                    </FloatLabel>
                    <br>
                    <FloatLabel>
                        <InputText type="text" id="inputtext" v-model="datos.pregunta" />
                        <label for="inputtext">Pregunta</label>
                    </FloatLabel>
                    <br>
                    <FloatLabel>
                        <InputText type="text" id="inputtext" v-model="datos.respuesta" />
                        <label for="inputtext">Respuesta</label>
                    </FloatLabel>
                </div>
                <template #footer>
                    <Button label="Cancelar" icon="pi pi-times" @click="hideDialog" />
                    <Button label="Guardar" icon="pi pi-check" @click="guardarCambios" />
                </template>
            </Dialog>
        </div>
    </div>
</template>

<style>
/* Agrega tus estilos aquí */
</style>
