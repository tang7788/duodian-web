import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/product', params)
  },
  kind: {
    assort: () => axios.get('/category')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
