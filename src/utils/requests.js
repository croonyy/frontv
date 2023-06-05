import axios from "axios";
import { base_url } from "../config";

const common_config = {
  baseURL: base_url,
  timeout: 10000,
  headers: {},
}

var request = axios.create(common_config);

var authRequest = axios.create(common_config);


// 刷新时检查是否需要更新token
// import { $setToken } from "./utils/requests";
// // let token = sessionStorage.getItem('token')
// let token = localStorage.getItem("token");
// if (token) {
//   $setToken(token);
// }

// request拦截器
authRequest.interceptors.request.use(
  (req) => {
    // console.log(req)
    const token = window.localStorage.getItem('token')
    // req.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    req.headers.Authorization = `Bearer ${token}`;
    return req
  }
)

// response拦截器
request.interceptors.response.use(
  (res) => res, // 成功的请求返回处理
  (err) => { // 异常的请求返回处理
    const data = {
      message: err.response.data.message || '请重试',
      code: err.response.status !== 200 ? err.response.status : err.response.data.errCode
    }
    throw data;
  }
)


export { request, authRequest };

// 将token添加到请求头
export const $setToken = (token) => {
  request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
