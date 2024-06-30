<script setup>
import { ref } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref(null);
const value7 = ref(null);
const value8 = ref(null);
const value9 = ref(null);
const value10 = ref(null);
const value11 = ref(null);
const atencion = ref({
    tipo: '',
    date: '',
    nit: '',
    matricula: '',
    empresa: '',
    nombreCompleto: '',
    correo: '',
    telefono: '',
    problema: '',
    estado: ''
});

const problemas = ref([
    {
        key: '1', label: 'Planillas', data: 'Planillas', children: [
            { key: '1-1', label: 'Mensual', data: 'Mensual' },
            { key: '1-2', label: 'Retroactiva', data: 'Retroactiva' },
            { key: '1-3', label: 'Aguinaldo', data: 'Aguinaldo' },
            { key: '1-4', label: 'Rectificación', data: 'Rectificación' },
            { key: '1-5', label: 'Declaración en cero', data: 'Declaración en cero' },
            { key: '1-6', label: 'Tipo de declaración', data: 'Tipo de declaración' },
            { key: '1-7', label: 'No figura sucursal', data: 'No figura sucursal' },
            { key: '1-8', label: 'Incumplimento de declaración', data: 'Incumplimento de declaración' },
            {
                key: '1-9', label: 'Fuera de plazo', data: 'Fuera de plazo', children: [
                    { key: '1-9-1', label: 'Minera', data: 'Minera' },
                    { key: '1-9-2', label: 'Publica', data: 'Publica' }
                ]
            },
            {
                key: '1-10', label: 'Error al importar', data: 'Error al importar', children: [
                    { key: '1-10-1', label: 'Encabezados', data: 'Encabezados' },
                    { key: '1-10-2', label: 'Separadores', data: 'Separadores' },
                    { key: '1-10-3', label: 'Decimales', data: 'Decimales' },
                    { key: '1-10-4', label: 'Nacionalidad', data: 'Nacionalidad' }
                ]
            },
            {
                key: '1-11', label: 'Trabajadores', data: 'Trabajadores', children: [
                    { key: '1-11-1', label: 'Jubilado', data: 'Jubilado' },
                    { key: '1-11-2', label: 'Retiro de trabajador', data: 'Retiro de trabajador' },
                    { key: '1-11-3', label: 'Validar dependiente', data: 'Validar dependiente' },
                    { key: '1-11-4', label: 'Validar trabajador', data: 'Validar trabajador' }
                ]
            }
        ]
    },
    {
        key: '2', label: 'ROE', data: 'ROE', children: [
            { key: '2-1', label: 'Dar de baja el ROE', data: 'Dar de baja el ROE' },
            { key: '2-2', label: 'Correo de confirmación', data: 'Correo de confirmación' },
            { key: '2-3', label: 'Multa RM N105/18', data: 'Multa RM N105/18' },
            { key: '2-4', label: 'Inicio de actividades', data: 'Inicio de actividades' },
            { key: '2-5', label: 'Sucursal inactiva', data: 'Sucursal inactiva' },
            { key: '2-6', label: 'Inscripción al ROE', data: 'Inscripción al ROE' },
            { key: '2-7', label: 'Pendiente de firma', data: 'Pendiente de firma' },
            {
                key: '2-8', label: 'Actualizar ROE', data: 'Actualizar ROE', children: [
                    { key: '2-8-1', label: 'Error interno', data: 'Error interno' },
                    { key: '2-8-2', label: 'Representante legal', data: 'Representante legal' },
                ]
            }
        ]
    },
    { key: '3', label: 'Falla interoperabilidad', data: 'Falla interoperabilidad' },
    { key: '4', label: 'Contraseña', data: 'Contraseña' },
    { key: '5', label: 'Otro', data: 'Otro' }
]);

const tipos = ref([
    { name: 'Correo', code: 'C' },
    { name: 'Telefono', code: 'T' },
    { name: 'Presencial', code: 'P' }
]);

const solucion = ref([
    { name: 'Solucionado', code: 'S' },
    { name: 'Pendiente', code: 'PE' }
]);



const editarAtencion = ref(false);
const submitted = ref(false);


const hideDialog = () => {
    editarAtencion.value = false;
    submitted.value = false;
    atencion.value = {
        tipo: '',
        date: '',
        nit: '',
        matricula: '',
        empresa: '',
        nombreCompleto: '',
        correo: '',
        telefono: '',
        problema: '',
        estado: ''
    };
};

const guardarCambios = () => {
    submitted.value = true;
    if (atencion.value.tipo && atencion.value.date && atencion.value.nit && atencion.value.empresa && atencion.value.nombreCompleto && atencion.value.correo && atencion.value.telefono && atencion.value.problema && atencion.value.estado) {
        //Nose porque chucha el toast no funciona xD
        //toast.add({ severity: 'success', summary: 'Editado', detail: 'La información se editó con éxito', life: 3000 });
        hideDialog();
        // lógica para editar la atención...
    } else {
        //toast.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete todos los campos', life: 3000 });
    }
    hideDialog();
};

const infoAtencion = (infoAtencion) => {
    atencion.value = { ...infoAtencion }
    editarAtencion.value = true;
};


const filtros = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    atencion: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    nit: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    empresa: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    telefono: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    estado: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
});

const iniciarFiltros = () => {
    filtros.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        atencion: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        date: { value: null, matchMode: FilterMatchMode.DATE_IS },
        nit: { value: null, matchMode: FilterMatchMode.EQUALS },
        empresa: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        telefono: { value: null, matchMode: FilterMatchMode.EQUALS },
        estado: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

const limpiarFiltros = () => iniciarFiltros();


const formatDate = (value) => {
    return value.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};


const getSeverity = (status) => {
    switch (status) {
        case 'pendiente':
            return 'danger';
        case 'solucionado':
            return 'success';
        default:
            return 'info';
    }
};


const atenciones = ref([
    { atencion: 'Correo', date: new Date('2024-06-18'), nit: 123456789, empresa: 'Gas y Gas', telefono: 71212888, estado: 'solucionado' },
    { atencion: 'Telefono', date: new Date('2024-06-19'), nit: 987654321, empresa: 'ElectroMax', telefono: 69874512, estado: 'pendiente' },
    { atencion: 'Presencial', date: new Date('2024-06-20'), nit: 111222333, empresa: 'Aguas Andinas', telefono: 65432178, estado: 'solucionado' },
    { atencion: 'Correo', date: new Date('2024-06-21'), nit: 444555666, empresa: 'Supermercados Max', telefono: 78945612, estado: 'pendiente' },
    { atencion: 'Telefono', date: new Date('2024-06-22'), nit: 777888999, empresa: 'CyberCafe Pro', telefono: 12312312, estado: 'solucionado' },
    { atencion: 'Presencial', date: new Date('2024-06-23'), nit: 666777888, empresa: 'Librería Nacional', telefono: 45645645, estado: 'pendiente' },
    { atencion: 'Correo', date: new Date('2024-06-24'), nit: 333444555, empresa: 'CineArte', telefono: 12121212, estado: 'solucionado' },
    { atencion: 'Correo', date: new Date('2024-06-25'), nit: 222333444, empresa: 'Gimnasio Peak', telefono: 34343434, estado: 'pendiente' }
]);


const listaAtenciones = ref(atenciones.value);
const loading1 = ref(false);

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Mis Atenciones</h5>
                <DataTable :value="listaAtenciones" :paginator="true" :rows="10" dataKey="id" :rowHover="true"
                    v-model:filters="filtros" filterDisplay="menu" :loading="loading1" :filters="filtros"
                    :globalFilterFields="['atencion', 'nit', 'telefono', 'empresa', 'estado']" showGridlines>
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
                    <template #empty> No se encontraron atenciones. </template>
                    <template #loading> Los datos se están cargando... </template>
                    <Column field="atencion" header="Atención" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.atencion }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Buscar por atención" />
                        </template>
                    </Column>
                    <Column header="Fecha" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" />
                        </template>
                    </Column>
                    <Column header="NIT" filterField="nit" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.nit }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" inputId="withoutgrouping" :useGrouping="false" />
                        </template>
                    </Column>
                    <Column field="empresa" header="Nombre empresa" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.empresa }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Buscar por nombre" />
                        </template>
                    </Column>
                    <Column header="Teléfono" filterField="telefono" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ data.telefono }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" inputId="withoutgrouping" :useGrouping="false" />
                        </template>
                    </Column>
                    <Column field="estado" header="Estado" style="min-width: 12rem">
                        <template #body="{ data }">
                            <Tag :severity="getSeverity(data.estado)">{{ data.estado.toUpperCase() }}</Tag>
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText v-model="filterModel.value" class="p-column-filter"
                                placeholder="Filtrar por estado" />
                        </template>
                    </Column>
                    <Column headerStyle="min-width:8rem; text-align: center;" header="Modificar">
                        <template #body="slotProps">
                            <div style="text-align: center;">
                                <Button icon="pi pi-pencil" severity="primary" rounded
                                    @click="infoAtencion(slotProps.data)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <Dialog v-model:visible="editarAtencion" :style="{ width: '450px' }" header="Detalles de la atención"
                    :modal="true" class="p-fluid">
                    <div class="field">
                        <h5>Tipo de atención</h5>
                        <FloatLabel>
                            <Dropdown id="dropdown" :options="tipos" v-model="value1" optionLabel="name"></Dropdown>
                            <label for="dropdown">Elige ua opción</label>
                        </FloatLabel>
                        <br>
                        <FloatLabel>
                            <Calendar inputId="calendar" v-model="value2"></Calendar>
                            <label for="calendar">Fecha</label>
                        </FloatLabel>
                    </div>
                    <div class="field">
                        <h5>Datos de la empresa</h5>
                        <FloatLabel>
                            <InputNumber id="inputnumber" v-model="value3" inputId="withoutgrouping"
                                :useGrouping="false"></InputNumber>
                            <label for="inputnumber">NIT</label>
                        </FloatLabel>
                        <br>
                        <FloatLabel>
                            <InputNumber id="inputnumber" v-model="value4" inputId="withoutgrouping"
                                :useGrouping="false"></InputNumber>
                            <label for="inputnumber">Matricula de comercio</label>
                        </FloatLabel>
                        <br>
                        <FloatLabel>
                            <InputText type="text" id="inputtext" v-model="value5" />
                            <label for="inputtext">Nombre de la empresa</label>
                        </FloatLabel>
                    </div>
                    <div class="field">
                        <h5>Datos de la persona</h5>
                        <FloatLabel>
                            <InputText type="text" id="inputtext" v-model="value6" />
                            <label for="inputtext">Nombre completo</label>
                        </FloatLabel>
                        <br>
                        <FloatLabel>
                            <InputText type="text" id="inputtext" v-model="value7" />
                            <label for="inputtext">Correo</label>
                        </FloatLabel>
                        <br>
                        <FloatLabel>
                            <InputNumber id="inputtext" v-model="value8" inputId="withoutgrouping"
                                :useGrouping="false" />
                            <label for="inputtext">Número de teléfono</label>
                        </FloatLabel>

                    </div>

                    <div class="field">
                        <h5>Tipo de problema</h5>
                        <div class="p-fluid mt-3">
                            <FloatLabel>
                                <TreeSelect v-model="value9" :options="problemas" placeholder="Select Item">
                                </TreeSelect>
                                <label for="inputnumber">Problema</label>
                            </FloatLabel>
                        </div>
                    </div>

                    <div class="field">
                        <h5>¿Se realizó asistencia remota?</h5>
                        <div class="field-radiobutton mb-0">
                            <RadioButton id="siRemoro" name="option" value="Si" v-model="value10" />
                            <label for="siRemoro">Si</label>
                        </div>
                        <br>
                        <div class="field-radiobutton mb-0">
                            <RadioButton id="noRemoto" name="option" value="No" v-model="value10" />
                            <label for="noRemoto">No</label>
                        </div>
                    </div>

                    <div class="field">
                        <h5>Tipo de problema</h5>
                        <div class="p-fluid mt-3">
                            <FloatLabel>
                                <Dropdown id="dropdown" :options="solucion" v-model="value11" optionLabel="name">
                                </Dropdown>
                                <label for="dropdown">Estado</label>
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
