<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getUserInfo } from '@/services/userService';
import AppMenuItem from './AppMenuItem.vue';

const modelPasante = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
            { label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/perfil' }
        ]
    },
    {
        label: 'Acciones',
        items: [
            { label: 'Registrar Atención', icon: 'pi pi-fw pi-pencil', to: '/registrar-atencion' },
            { label: 'Ver Atenciones', icon: 'pi pi-fw pi-book', to: '/ver-atenciones' },
            { label: 'Preguntas Frecuentes', icon: 'pi pi-fw pi-question-circle', to: '/preguntas-frecuentes' },
            { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out', command: () => cerrarSesion() }
        ]
    }
]);

const modelJefe = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
            { label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/perfil' }
        ]
    },
    {
        label: 'Acciones',
        items: [
            { label: 'Reportes', icon: 'pi pi-fw pi-file', to: '/reportes' },
            { label: 'Ver Pasantes', icon: 'pi pi-fw pi-users', to: '/ver-usuarios' },
            { label: 'Registrar Pasante', icon: 'pi pi-fw pi-user-plus', to: '/registrar-usuario' },
            { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out', command: () => cerrarSesion() }
        ]
    }
]);

const model = ref([]);
const router = useRouter();

const cerrarSesion = () => {
    localStorage.removeItem('token');
    router.push('/');
};

const loadUserInfo = async () => {
    try {
        const response = await getUserInfo();
        const user = response.data;

        if (user.rol === 'supervisor') {
            model.value = modelJefe.value;
        } else if (user.rol === 'pasante') {
            model.value = modelPasante.value;
        }
    } catch (error) {
        console.error('Error fetching user info:', error);
        localStorage.removeItem('token');
        router.push('/');
    }
};

onMounted(() => {
    loadUserInfo();
});
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
