import { createApp } from 'vue'
import App from './App.vue'
import Router from '../src/router/index.js'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(Router).mount('#app')
