import axios from 'axios'

var request = axios.create({
    // baseURL:'http://localhost:8080/api/',
    baseURL:'http://localhost:8080',
    timeout: 20000,
    headers:{

    }
})

export {request}

// 将token添加到请求头
export const $setToken = (token)=>{
    request.defaults.headers.common['Authorization'] = token;
}

//get方法
export const $get=async(url,params)=>{
    let {data} = await request.get(url,{params})
    return data
}

//post方法
export const $post = async(url,params)=>{
    let {data} = await request.post(url,params)
    return data
}

//put方法
export const $put = async(url,params)=>{
    let {data} = await request.put(url,params)
    return data
}

//delete方法
export const $delete=async(url,params)=>{
    let {data} = await request.delete(url,{params})
    return data
}