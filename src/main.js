import { createApp } from 'vue'
import App from './App.vue'

import  EriCustomTitle  from 'eri-custom-title/dist/eri-custom-title.common.js'
import 'eri-custom-title/dist/eri-custom-title.css'

createApp(App)
.component('eri-custom-title', EriCustomTitle)
.mount('#app')