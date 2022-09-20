import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import api from './api/index'
import '../src/utils/rem'
import './assets/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import TabBar from './components/tabs/TabBar.vue'
import ProductList from './components/product'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
