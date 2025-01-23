import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')