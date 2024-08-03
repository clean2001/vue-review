import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js' // ⭐️

const app = createApp(App);

app.use(router) // ⭐️ 이 두줄의 코드 아래에 깔아주어야함
app.mount('#app') // ⭐️
