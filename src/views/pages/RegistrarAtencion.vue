<script setup>
import InputNumber from 'primevue/inputnumber';
import { ref } from 'vue';
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

const treeSelectNodes = ref([
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
</script>

<template>
    <div class="grid">
        <div class="col md:col-4">
            <div class="card">
                <h5>Tipo de atención</h5>
                <div class="p-fluid mt-3">
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
            </div>
        </div>
        <div class="field col md:col-4">
            <div class="card">
                <h5>Datos de la empresa</h5>
                <div class="p-fluid mt-3">
                    <FloatLabel>
                        <InputNumber id="inputnumber" v-model="value3" inputId="withoutgrouping" :useGrouping="false">
                        </InputNumber>
                        <label for="inputnumber">NIT</label>
                    </FloatLabel>
                    <br>
                    <FloatLabel>
                        <InputNumber id="inputnumber" v-model="value4" inputId="withoutgrouping" :useGrouping="false">
                        </InputNumber>
                        <label for="inputnumber">Matricula de comercio</label>
                    </FloatLabel>
                    <br>
                    <FloatLabel>
                        <InputText type="text" id="inputtext" v-model="value5" />
                        <label for="inputtext">Nombre de la empresa</label>
                    </FloatLabel>
                </div>
            </div>
        </div>
        <div class="col md:col-4">
            <div class="card">
                <h5>Datos de la persona</h5>
                <div class="p-fluid mt-3">
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
                        <InputNumber id="inputnumber" v-model="value8" inputId="withoutgrouping" :useGrouping="false" />
                        <label for="inputtext">Numero de telefono</label>
                    </FloatLabel>
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col md:col-6">
            <div class="card">
                <h5>Tipo de problema</h5>
                <div class="p-fluid mt-3">
                    <FloatLabel>
                        <TreeSelect v-model="value9" :options="treeSelectNodes" placeholder="Select Item"></TreeSelect>
                        <label for="inputnumber">Problema</label>
                    </FloatLabel>
                </div>
            </div>
        </div>
        <div class="field col md:col-6">
            <div class="card">
                <h5>Estado </h5>
                <div class="p-fluid mt-3">
                    <FloatLabel>
                        <Dropdown id="dropdown" :options="solucion" v-model="value10" optionLabel="name"></Dropdown>
                        <label for="dropdown">Estado</label>
                    </FloatLabel>
                </div>
            </div>
        </div>
    </div>

</template>