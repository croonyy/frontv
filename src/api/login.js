import { request, authRequest, $setToken } from "../utils/requests";
// import md5 from "js-md5";
import { message } from "ant-design-vue";

// 登录api
export const $login = async (params) => {
  // let ret = await $login({username,password})
  let ret = {};
  try {
    // window.ud_error()
    ret = await authRequest.post("login/", params);
  } catch (e) {
    console.log(e);
    message.error(`错误:请看控制台。`);
    return 0;
  }
  console.log(ret.data);
  if (ret.data.status) {
    let data = ret.data;
    let { access_token } = data;
    //浏览器缓存保存access_token
    // sessionStorage.setItem('token',access_token)
    localStorage.setItem("token", access_token);
    //设置请求头token
    $setToken(access_token);
    message.success("登录成功");
    return 1;
  } else {
    message.error(ret.data.msg);
    return 0;
  }
};
