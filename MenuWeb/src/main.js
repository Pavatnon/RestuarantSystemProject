import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// layout
import UserLayout from '@/components/user/UserLayout.vue'
import IconList from '@/components/IconList.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//layout component
app.component('UserLayout', UserLayout)
app.component('IconList', IconList)

app.mount('#app')
