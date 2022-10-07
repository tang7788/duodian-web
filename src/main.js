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
import 'animate.css'
import TabBar from './components/tabs/TabBar.vue'
import ProductList from './components/product'
import CardWrap from './components/card'
import SearchBar from './components/search'
import PopupWrap from './components/popup'
import LoadingIndex from './components/loading'

Vue.config.productionTip = false
Vue.use(api)
Vue.use(VueAwesomeSwiper)
Vue.use(Loading)
Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
Vue.component('CardWrap', CardWrap)
Vue.component('SearchBar', SearchBar)
Vue.component('PopupWrap', PopupWrap)
// Vue.component('LoadingIndex', LoadingIndex)

new Vue({
  router,
  store,
  data: {
    userInfo: {}
  },
  created () {
    this.$store.dispatch('user/getUserInfo')
    if (Object.keys(this.$store.state.user.address).length < 1) {
      this.$router.push('/geolocation')
    }
  },
  render: h => h(App)
}).$mount('#app')
