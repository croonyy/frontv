import axios from "axios";
import { base_url } from "../config";
import { getLocalTime } from "./tools.js";
import router from "@/router";
import { message } from "ant-design-vue";

const common_config = {
  baseURL: base_url,
  timeout: 10000,
  headers: {},
};

const request = axios.create(common_config);
const authRequest = axios.create(common_config);

// request.defaults.headers.Authorization

function setReqTokenHeader(req_obj, access_token) {
  req_obj.defaults.headers.Authorization = `Bearer ${access_token}`;
}

async function checkToken() {
  let token_info = localStorage.getItem("token_info");
  if (!token_info) {
    message.error("登录信息不存在，请重新登录。");
    router.push("/login");
    return undefined;
  }
  token_info = JSON.parse(token_info);
  let { refresh_token, exp } = token_info;
  let now_timestap = Math.ceil(getLocalTime(0).valueOf() / 1000);
  if (now_timestap < exp - 5) {
    console.log("access_token未过期");
    return token_info;
  } else {
    console.log("access_token已过期");
    let ret = {};
    try {
      ret = await request.post("refresh_token/", { refresh_token });
      if (ret.data.status == 1) {
        console.log("刷新token成功。");
        token_info = ret.data
        localStorage.setItem("token_info", JSON.stringify(token_info));
        return token_info;
      } else {
        message.error("登录已失效，请重新登录！");
        router.push("login");
        return undefined;
      }
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
}

request.interceptors.response.use(
  (res) => res, // 成功的请求返回处理
  (err) => {
    // 异常的请求返回处理
    const data = {
      message: err.response.data.message || "请重试",
      code:
        err.response.status !== 200
          ? err.response.status
          : err.response.data.errCode,
    };
    throw data;
  }
);

authRequest.interceptors.request.use(
  // 请求拦截器 检查并设置Authorization 头
  async (req) => {
    let token_info = await checkToken()
    if (token_info) {
      req.headers.Authorization = `Bearer ${token_info.access_token}`;
    }
    else {
      router.push('login/')
    }
    return req;
  }
);

// 将token添加到请求头
export const $setToken = (token) => {
  request.defaults.headers.common["Authorization"] = token;
};

//get方法
export const $get = async (url, params) => {
  let { data } = await request.get(url, { params });
  return data;
};

//post方法
export const $post = async (url, params) => {
  let { data } = await request.post(url, params);
  return data;
};

//put方法
export const $put = async (url, params) => {
  let { data } = await request.put(url, params);
  return data;
};

//delete方法
export const $delete = async (url, params) => {
  let { data } = await request.delete(url, { params });
  return data;
};

export { request, authRequest, checkToken, setReqTokenHeader };
