import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
let app = createApp(App);
import 'ant-design-vue/dist/antd.css';


// 测试
// import './ant-design'
// import { message } from "ant-design-vue";


// import SvgIcon from './.../SvgIcon/index.vue'
// vm.component('SvgIcon',SvgIcon)
// 全量引入
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// app.use(Antd).use(router).mount("#app");


// 按需引入
import {
  // Button,
  // ConfigProvider,
  // Checkbox,
  // Layout,
  // Menu,
  // message,
  // Input,
  // Space,
  // Dropdown,
  // Divider,
  // Form,
  // AutoComplete,
  // Modal,
  // Tree,
  // Drawer,
  // Row,
  // Col,
  // Select,
  // DatePicker,
  // Tooltip,
  // Breadcrumb,
  // Popconfirm,
  // InputNumber,
  // Table,
  // Pagination,
  // InputPassword,
} from 'ant-design-vue'
app
  // .use(Button)
  // .use(ConfigProvider)
  // .use(Checkbox)
  // .use(Layout)
  // .use(Menu)
  // .use(message)
  // .use(Input)
  // .use(Space)
  // .use(Dropdown)
  // .use(Divider)
  // .use(Form)
  // .use(AutoComplete)
  // .use(Modal)
  // .use(Tree)
  // .use(Drawer)
  // .use(Row)
  // .use(Col)
  // .use(Select)
  // .use(DatePicker)
  // .use(Tooltip)
  // .use(Breadcrumb)
  // .use(Popconfirm)
  // .use(InputNumber)
  // .use(Table)
  // .use(Pagination)
  // .use(InputPassword)
  .use(router).mount("#app")



// 劫持ajax请求，生产环境要注释
// import "./mock/index.js";

// 全局错误处理
// vm.config.errorHandler = (err,vm,info)=>{
//     console.log('vue global erro handler')
//     console.log(err)
//     // console.log(vm)
//     console.log(info)
//     message.error("运行异常");
// }


// 为了测试
window.udcnt = 1;
window.ud_error = () => {
  // udcnt 为偶数的时候抛错误
  console.log("@@@udcnt:", window.udcnt);
  if (window.udcnt % 2 === 0) {
    window.udcnt += 1;
    throw {
      code: -1,
      msg: "自定义偶数次操作错误",
    };
    // throw new Error('当前时间为偶数无法执行任务')
  }
  window.udcnt += 1;
};

// window.addEventListener("unhandledrejection",(e)=>{console.log(e)})
