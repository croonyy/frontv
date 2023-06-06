import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import { message } from "ant-design-vue";

// 劫持ajax请求，生产环境要注释
// import "./mock/index.js";

// 刷新时检查是否需要更新token
import { $setToken } from "./utils/requests";
// let token = sessionStorage.getItem('token')
let token = localStorage.getItem("token");
if (token) {
  $setToken(token);
}

let app = createApp(App);
// vm.config.errorHandler = (err,vm,info)=>{
//     console.log('vue global erro handler')
//     console.log(err)
//     // console.log(vm)
//     console.log(info)
//     message.error("运行异常");
// }

// import SvgIcon from './.../SvgIcon/index.vue'
// vm.component('SvgIcon',SvgIcon)
// vm.use(Antd).use(router).mount("#app");
app.use(router).mount("#app");

// 为了测试

window.udcnt = 1;
window.ud_error = () => {
  // udcnt 为偶数的时候抛错误
  console.log("@@@udcnt:", window.udcnt);
  if (window.udcnt % 2 === 0) {
    window.udcnt += 1;
    throw {
      code: -1,
      msg: "类型错误",
    };
    // throw new Error('当前时间为偶数无法执行任务')
  }
  window.udcnt += 1;
};

// window.addEventListener("unhandledrejection",(e)=>{console.log(e)})
