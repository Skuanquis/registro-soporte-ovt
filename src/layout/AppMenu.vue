<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
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
            { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out', to: '/' }
        ]
    }
])

/*const modelJefe = ref([
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
            { label: 'Ver Usuarios', icon: 'pi pi-fw pi-users', to: '/ver-usuarios' },
            { label: 'Registrar Usuario', icon: 'pi pi-fw pi-user-plus', to: '/registrar-usuario' },
            { label: 'Cerrar Sesión', icon: 'pi pi-fw pi-sign-out', to: '/' }
        ]
    }
])
*/
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>