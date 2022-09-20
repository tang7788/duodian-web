<template>
  <div>
    <header-bar />
    <banner-index :pics="banner"></banner-index>
    <mall-nav :navs="nav"></mall-nav>
    <every-day />
    <div ref="conts">
      <tab-bar
        :tabs="hot_nav"
        @change="navchange"
        class="tab"
      ></tab-bar>
      <product-list
        :lists="product"
      ></product-list>
    </div>
  </div>
</template>

<script>
// import jsonp from '../../utils/jsonp'
import HeaderBar from './components/HeaderBar.vue'
import BannerIndex from './components/BannerIndex.vue'
import MallNav from './components/MallNav.vue'
import EveryDay from './components/EveryDay.vue'
import scroll from '@/mixins/scroll.js'
export default {
  name: 'home-index',
  mixins: [scroll],
  components: {
    HeaderBar,
    BannerIndex,
    MallNav,
    EveryDay
  },
  data () {
    return {
      banner: [],
      nav: [],
      hot_nav: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    // jsonp('http://localhost:7001/api/home').then((res) => {
    //   console.log(res)
    // })
    // this.$axios.get('/api/home').then((res) => {
    //   console.log(res)
    // }).catch((e) => {
    //   console.log(e)
    // })
    this.initHomeData()
    this.fetchProductList()
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    initHomeData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.nav = res.data.data.nav
        this.hot_nav = res.data.data.hot_nav
        console.log(res)
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data.data
      } else {
        this.product = this.product.concat(res.data.data)
      }
      console.log(res)
    },
    navchange (index, item) {
      this.fetchProductParams.classid = item.id
      this.fetchProductParams.page = 1
      const top = this.$refs.conts.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  .tab {
    position: sticky;
    top: 0;
    z-index: 10;
  }
}
</style>
