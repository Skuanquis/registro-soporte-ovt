<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { getPasantes, getPasanteById, updatePasante } from '../../services/userService';

const pasantes = ref([]);
const loading1 = ref(false);

const pasante = ref({
    id_usuario: null,
    nombre: '',
    direccion: '',
    ci: '',
    numero: '',
    casos: '',
    password: ''
});

const nuevaPassword = ref('');

const editarPasante = ref(false);
const submitted = ref(false);

const hideDialog = () => {
    editarPasante.value = false;
    submitted.value = false;
    pasante.value = {
        id_usuario: null,
        nombre: '',
        direccion: '',
        ci: '',
        numero: '',
        casos: '',
        password: ''
    };
    nuevaPassword.value = '';
};

const loadPasantes = async () => {
    loading1.value = true;
    try {
        const response = await getPasantes();
        pasantes.value = response.data;
    } catch (error) {
        console.error('Error fetching pasantes:', error);
    } finally {
        loading1.value = false;
    }
};

const guardarCambios = async () => {
    submitted.value = true;
    if (pasante.value.nombre && pasante.value.direccion && pasante.value.ci && pasante.value.numero) {
        if (nuevaPassword.value) {
            pasante.value.password = nuevaPassword.value;
        }
        try {
            await updatePasante(pasante.value.id_usuario, pasante.value);
            hideDialog();
            loadPasantes();
        } catch (error) {
            console.error('Error updating pasante:', error);
        }
    }
};

const infoPasante = async (infoPasante) => {
    try {
        const response = await getPasanteById(infoPasante.id_usuario);
        pasante.value = { ...response.data, casos: infoPasante.casos };
        editarPasante.value = true;
    } catch (error) {
        console.error('Error fetching pasante:', error);
    }
};

const filtros = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    nombre: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    celular: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    ci: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    casos: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
});

const iniciarFiltros = () => {
    filtros.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        nombre: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        celular: { value: null, matchMode: FilterMatchMode.EQUALS },
        ci: { value: null, matchMode: FilterMatchMode.EQUALS },
        casos: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

const limpiarFiltros = () => iniciarFiltros();

onMounted(() => {
    loadPasantes();
});
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Mis Pasantes</h5>
                <DataTable :value="pasantes" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
                    v-model:filters="filtros" filterDisplay="menu" :loading="loading1" :filters="filtros"
                    :globalFilterFields="['nombre', 'celular', 'ci', 'casos']" showGridlines>
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Limpiar" outlined
                                @click="limpiarFiltros()" />
                            <IconField iconPosition="left">
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="filtros['global'].value" placeholder="Buscar" style="width: 100%" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty> No se encontraron pasantes. </template>
                    <template #loading> Los datos se están cargando... </template>
                    <Column field="nombre" header="Nombre" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.nombre }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Buscar por nombre" />
                        </template>
                    </Column>
                    <Column header="CI" filterField="ci" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.ci }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" inputId="withoutgrouping" :useGrouping="false" />
                        </template>
                    </Column>
                    <Column header="Celular" filterField="celular" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.celular }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" inputId="withoutgrouping" :useGrouping="false" />
                        </template>
                    </Column>
                    <Column field="casos" header="Casos Atendidos" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.casos }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" inputId="withoutgrouping" :useGrouping="false" />
                        </template>
                    </Column>
                    <Column headerStyle="min-width:8rem; text-align: center;" header="Modificar">
                        <template #body="slotProps">
                            <div style="text-align: center;">
                                <Button icon="pi pi-pencil" severity="primary" rounded
                                    @click="infoPasante(slotProps.data)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <Dialog v-model:visible="editarPasante" :style="{ width: '450px' }" header="Modificar Pasante"
                    :modal="true" class="p-fluid">
                    <div v-if="pasante">
                        <div class="field">
                            <h5>Datos del pasante</h5>
                            <FloatLabel>
                                <InputText type="text" id="inputtext" v-model="pasante.nombre" />
                                <label for="inputtext">Nombre completo</label>
                            </FloatLabel>
                            <br>
                            <FloatLabel>
                                <InputText type="text" id="inputtext" v-model="pasante.direccion" />
                                <label for="inputtext">Dirección</label>
                            </FloatLabel>
                            <br>
                            <FloatLabel>
                                <InputNumber id="inputnumber" v-model="pasante.ci" inputId="withoutgrouping"
                                    :useGrouping="false">
                                </InputNumber>
                                <label for="inputnumber">CI</label>
                            </FloatLabel>
                            <br>
                            <FloatLabel>
                                <InputNumber id="inputnumber" v-model="pasante.numero" inputId="withoutgrouping"
                                    :useGrouping="false">
                                </InputNumber>
                                <label for="inputnumber">Número de celular</label>
                            </FloatLabel>
                        </div>
                        <div class="field">
                            <h5>Asignar nueva contraseña</h5>
                            <FloatLabel>
                                <InputText type="password" id="inputtext" v-model="nuevaPassword" />
                                <label for="inputtext">Nueva Contraseña</label>
                            </FloatLabel>
                        </div>
                    </div>
                    <template #footer>
                        <Button label="Cancelar" icon="pi pi-times" text="" @click="hideDialog" />
                        <Button label="Guardar" icon="pi pi-check" text="" @click="guardarCambios" />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.p-datatable-frozen-tbody) {
    font-weight: bold;
}

:deep(.p-datatable-scrollable .p-frozen-column) {
    font-weight: bold;
}
</style>
