import '@/assets/styles.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import FloatLabel from 'primevue/floatlabel';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import TreeSelect from 'primevue/treeselect';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true });
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Password', Password);
app.component('Toast', Toast);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('FloatLabel', FloatLabel);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('TreeSelect', TreeSelect);

app.mount('#app')
