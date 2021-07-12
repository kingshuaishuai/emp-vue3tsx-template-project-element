import { createApp } from 'vue'
import { locale } from 'element-plus'
import router from './router'
import { store, key } from './store'

// global
import 'dayjs/locale/zh-cn'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import App from './App'

// style
// import './styles/index.scss'
import 'element-plus/lib/theme-chalk/index.css'

locale(lang)

store.dispatch('permissionModule/getPermissionRoutes')

const app = createApp(App).use(router).use(store, key)

app.mount('#emp-root')
