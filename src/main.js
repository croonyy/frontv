import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


import './mock/index.js'

// 刷新时检查是否需要更新token
import {$setToken} from './utils/requests'
// let token = sessionStorage.getItem('token')
let token = localStorage.getItem('token')

if(token){
    $setToken(token)
}

let vm = createApp(App)
// import SvgIcon from './.../SvgIcon/index.vue'
// vm.component('SvgIcon',SvgIcon)
vm.use(Antd).use(router).mount('#app')
