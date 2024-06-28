<script setup>
import { ref } from 'vue';

const passwordAnterior = ref('');
const nuevaPassword = ref('');
const repetirNuevaPassword = ref('');
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Datos Personales</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText type="text" placeholder="Tu nombre" :disabled="true"></InputText>
                    </div>
                </div>
                <h5>Direccion</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 ">
                        <InputText type="text" placeholder="Tu nombre" :disabled="true"></InputText>
                    </div>
                </div>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <h5>CI</h5>
                        <InputText type="text" placeholder="Tu nombre" :disabled="true"></InputText>
                    </div>
                    <div class="col-12 md:col-6">
                        <h5>Celular</h5>
                        <InputText type="text" placeholder="Tu nombre" :disabled="true"></InputText>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card">
                <h5>Anterior Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <InputText type="text" placeholder="Default" v-model="passwordAnterior"></InputText>
                    </div>
                </div>
                <h5>Nueva Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <Password id="nuevopass" v-model="nuevaPassword" placeholder="Nueva Contraseña" :toggleMask="true"></Password>
                    </div>
                </div>
                <h5>Repita la Nueva Contraseña</h5>
                <div class="grid formgrid">
                    <div class="col-12 mb-2">
                        <Password id="repitenuevopass" v-model="repetirNuevaPassword" placeholder="Nueva Contraseña" :toggleMask="true"></Password>
                    </div>
                </div>
                <h5></h5>
                <Button label="Enviar" class="mr-2 mb-2"></Button>
            </div>
        </div>
    </div>
</template>