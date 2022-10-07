import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  // baseURL: process.env.NODE_ENV === '' ? 'xxxx' : 'sss'
  timeout: 5000
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  config.headers.token = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  ...service,
  get (url, data) {
    return service.get(url, {
      params: data
    })
  }
}
