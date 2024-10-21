import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MouseMenuDirective } from '@howdyjs/mouse-menu'

const app = createApp(App)
app.directive('mouse-menu', MouseMenuDirective)
app.mount('#app')
