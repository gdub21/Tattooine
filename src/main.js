import './assets/main.css'
import '../node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css';
import Button from 'primevue/button';
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
const app = createApp(App);

app.use(PrimeVue);
app.use(Toast);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Galleria', Galleria);
//app.component('Toast', Toast);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.mount('#app')
