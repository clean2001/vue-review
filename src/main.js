import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js' // ⭐️
import vuetify from './plugins/vuetify'; // ⭐️

const app = createApp(App);

app.use(router) // ⭐️ 이 두줄의 코드 아래에 깔아주어야함
app.use(vuetify)
app.mount('#app') // ⭐️
