import axios from '@/utils/axios'

export const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/product', params),
    assort: () => axios.get('/product/category'),
    detail: id => axios.get(`/product/${id}`)
  },
  search: {
    tip: () => axios.get('/search/tip')
  },
  user: {
    login: (params) => axios.post('/user/login', params),
    sendCode: (params) => axios.get('/user/sendCode', params),
    info: () => axios.get('/user/info')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
