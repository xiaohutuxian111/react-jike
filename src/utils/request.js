import axios from 'axios'



// axios 封装处理
const request = axios.create({
    //域名配置
    baseURL: "http://wang.net/v1_0",
    //超时时间
    timeout: 50000
})

// 添加请求拦截器
// 在请求前 做拦截 插入一些自定义配置[参数处理]
request.interceptors.request.use(
    (config) => {
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)


// 添加响应拦截器
//  在响应返回到客户之前 做拦截 重点处理返回的数据
request.interceptors.response.use(
    (response) => {
        return response.data
    }, (error) => {
        return Promise.reject(error)
    }
)

export { request }
