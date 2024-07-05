<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getUserInfo, updateUserProfile, updateUserPassword } from '@/services/userService';

const nombre = ref('');
const direccion = ref('');
const ci = ref('');
const numero = ref('');
const passwordAnterior = ref('');
const nuevaPassword = ref('');
const repetirNuevaPassword = ref('');
const userId = ref(null);
const router = useRouter();

const loadUserInfo = async () => {
    try {
        const response = await getUserInfo();
        const user = response.data;
        nombre.value = user.nombre;
        direccion.value = user.direccion;
        ci.value = user.ci;
        numero.value = user.numero;
        userId.value = user.id_usuario;
    } catch (error) {
        console.error('Error fetching user info:', error);
        localStorage.removeItem('token');
        router.push('/');
    }
};

const actualizarInformacion = async () => {
    try {
        await updateUserProfile(userId.value, {
            nombre: nombre.value,
            direccion: direccion.value,
            ci: ci.value,
            numero: numero.value,
        });
        alert('Información actualizada con éxito');
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('Error actualizando la información');
    }
};

const actualizarContrasena = async () => {
    if (nuevaPassword.value !== repetirNuevaPassword.value) {
        alert('Las nuevas contraseñas no coinciden');
        return;
    }

    try {
        await updateUserPassword(userId.value, {
            passwordAnterior: passwordAnterior.value,
            nuevaPassword: nuevaPassword.value,
        });
        alert('Contraseña actualizada con éxito');
        passwordAnterior.value = '';
        nuevaPassword.value = '';
        repetirNuevaPassword.value = '';
    } catch (error) {
        console.error('Error updating password:', error);
        alert('Error actualizando la contraseña');
    }
};

onMounted(() => {
    loadUserInfo();
});
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Datos Personales</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText v-model="nombre" placeholder="Tu nombre"></InputText>
                    </div>
                </div>
                <h5>Direccion</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText v-model="direccion" placeholder="Tu dirección"></InputText>
                    </div>
                </div>
                <br>
                <div class="formgroup-inline">
                    <div class="col-12 md:col-6">
                        <h5>CI</h5>
                        <InputText v-model="ci" placeholder="Tu CI"></InputText>
                    </div>
                    <div class="col-12 md:col-6">
                        <h5>Número</h5>
                        <InputText v-model="numero" placeholder="Tu número"></InputText>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <Button label="Actualizar Información" class="mr-2 mb-2" @click="actualizarInformacion"></Button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Anterior Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <InputText type="password" v-model="passwordAnterior" placeholder="Contraseña Anterior">
                        </InputText>
                    </div>
                </div>
                <h5>Nueva Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <Password id="nuevopass" v-model="nuevaPassword" placeholder="Nueva Contraseña"
                            :toggleMask="true"></Password>
                    </div>
                </div>
                <h5>Repita la Nueva Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <Password id="repitenuevopass" v-model="repetirNuevaPassword"
                            placeholder="Repita la Nueva Contraseña" :toggleMask="true"></Password>
                    </div>
                </div>
                <Button label="Actualizar Contraseña" class="mr-2 mb-2" @click="actualizarContrasena"></Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Agrega tus estilos aquí */
</style>
