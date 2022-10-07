<template>
  <div>
    <search-bar
      v-model="searchKey"
      :tipList="tips"
      @search="search"
    ></search-bar>
    <div class="tang" v-show="product.length <= 0">
      <history-search
        :hlists="historyList"
      ></history-search>
      <hot-search></hot-search>
    </div>
    <product-list
      :lists="product"
      class="list"
    ></product-list>
  </div>
</template>

<script>
import HistorySearch from './components/HistorySearch.vue'
import HotSearch from './components/HotSearch.vue'
export default {
  name: 'search-index',
  components: {
    HistorySearch,
    HotSearch
  },
  data () {
    return {
      searchKey: '',
      tips: [],
      historyList: [] || localStorage.getItem('history'),
      product: []
    }
  },
  watch: {
    searchKey (value) {
      if (!value) {
        this.tips = []
        return
      }
      this.fetchTipData()
    },
    $route (newValue) {
      if (newValue.query.keyword) {
        this.tips = []
      } else {
        this.searchKey = ''
        this.product = []
      }
    }
  },
  methods: {
    async fetchTipData () {
      const res = await this.$api.search.tip()
      const searchData = res.data.filter(item =>
        item.name.includes(this.searchKey)
      )
      this.tips = searchData.map((item) => {
        return {
          oldItem: item,
          newItem: item.name.replace(this.searchKey, `<span style="color:#FE3113">${this.searchKey}</span>`)
        }
      })
      // console.log(this.tips, 555)
      // this.product = this.tips.map((item) => {
      //   return item.oldItem
      // })
      console.log(this.product)
    },
    search (val) {
      this.$router.push({
        path: '/search',
        query: {
          keyword: val
        }
      })
      this.historyList.unshift(val)
      this.historyList = [...new Set(this.historyList)]
      localStorage.setItem('history', this.historyList)
      this.product = this.tips.map((item) => {
        return item.oldItem
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
