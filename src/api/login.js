import { request, $setToken } from "../utils/requests";
// import md5 from "js-md5";
import { message } from "ant-design-vue";
import router from '../router'

// 登录api
export const $login = async (params) => {
  // let ret = await $login({username,password})
  let ret = {};
  try {
    ret = await request.post("login/", params);
  } catch (e) {
    message.error('登录错误')
    console.log(e);
    return 0;
  }
  console.log(ret.data);
  if (ret.data.status) {
    let token_info = ret.data;
    //浏览器缓存保存access_token
    // sessionStorage.setItem('token',access_token)
    localStorage.setItem("token_info", JSON.stringify(token_info));
    router.push('/layout')
    //设置请求头token
    // $setToken(access_token);
    message.success("登录成功");
    return 1;
  } else {
    message.error(ret.data.msg);
    return 0;
  }
};
