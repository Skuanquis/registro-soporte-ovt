<script setup>
import { ref } from 'vue';
import { createUser } from '../../services/userService';

const nombre = ref('');
const direccion = ref('');
const ci = ref('');
const celular = ref('');
const userAsignada = ref('');
const passwordAsignada = ref('');
const rol = ref('pasante');

const resetForm = () => {
    nombre.value = '';
    direccion.value = '';
    ci.value = '';
    celular.value = '';
    userAsignada.value = '';
    passwordAsignada.value = '';
    rol.value = 'pasante';
}

const handleSubmit = async () => {
    try {
        const userData = {
            nombre: nombre.value,
            direccion: direccion.value,
            ci: ci.value,
            numero: celular.value,
            username: userAsignada.value,
            password: passwordAsignada.value,
            rol: rol.value
        };
        const response = await createUser(userData)
        alert(response.data.message);
        resetForm();
    } catch (error) {
        alert('Error al registrar pasante');
    }
};

</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Nombre Completo</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText type="text" v-model="nombre" placeholder="Nombre Completo" :disabled="false">
                        </InputText>
                    </div>
                </div>
                <h5>Dirección</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText type="text" v-model="direccion" placeholder="Dirección" :disabled="false">
                        </InputText>
                    </div>
                </div>
                <h5>CI</h5>
                <div class="grid formgrid">
                    <div class="col-12 md:col-6">
                        <InputNumber id="inputnumber" placeholder="Cédula de identidad" v-model="ci"
                            inputId="withoutgrouping" :useGrouping="false" />
                    </div>
                </div>
                <h5>Número</h5>
                <div class="grid formgrid">
                    <div class="col-12 md:col-6">
                        <InputNumber id="inputnumber" placeholder="Número de celular" v-model="celular"
                            inputId="withoutgrouping" :useGrouping="false" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Asignar Credenciales</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <InputText type="text" placeholder="Asignar Usuario" v-model="userAsignada"></InputText>
                    </div>
                </div>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <InputText type="text" placeholder="Asignar Contraseña" v-model="passwordAsignada"></InputText>
                    </div>
                </div>
                <h5></h5>
                <Button label="Enviar" class="mr-2 mb-2" @click="handleSubmit"></Button>
            </div>
        </div>
    </div>
</template>