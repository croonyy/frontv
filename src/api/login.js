import { $post, $setToken } from "../utils/requests";
import md5 from "js-md5";

import { message } from "ant-design-vue";

// 登录api
export const $login = async (params) => {
  //   params.password = md5(md5(params.password).split("").reverse().join(""));
  let data = await $post("rbac/login/", params);
  console.log(data);
  if (data.status) {
    let { access_token } = data;
    //浏览器缓存保存access_token
    // sessionStorage.setItem('token',access_token)
    localStorage.setItem("token", access_token);
    //设置请求头token
    $setToken(access_token);

    // console.log(data);
    message.success("登录成功");
    return data.status;
  } else {
    message.error(data.msg);
  }
};
