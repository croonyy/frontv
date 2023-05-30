import axios from 'axios'

var instance = axios.create({
    baseURL:'http://localhost:8080/api/',
    timeout: 20000,
    headers:{

    }
})

// 将token添加到请求头
export const $setToken = (token)=>{
    instance.defaults.headers.common['Authorization'] = token;
}

//get方法
export const $get=async(url,params)=>{
    let {data} = await instance.get(url,{params})
    return data
}

//post方法
export const $post = async(url,params)=>{
    let {data} = await instance.post(url,params)
    return data
}

//put方法
export const $put = async(url,params)=>{
    let {data} = await instance.put(url,params)
    return data
}

//delete方法
export const $delete=async(url,params)=>{
    let {data} = await instance.delete(url,{params})
    return data
}