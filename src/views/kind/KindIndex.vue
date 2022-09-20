<template>
  <div class="kind">
    <search-wrap />
    <div class="content">
      <kind-wrap
        :lists="kinds"
      ></kind-wrap>
      <conts-wrap></conts-wrap>
      <!-- <product-list
        :lists="product"
      ></product-list> -->
    </div>
  </div>
</template>

<script>
import SearchWrap from './components/SearchWrap.vue'
import KindWrap from './components/KindWrap.vue'
import ContsWrap from './components/ContsWrap.vue'
export default {
  name: 'kind-index',
  components: {
    SearchWrap,
    KindWrap,
    ContsWrap
  },
  data () {
    return {
      kinds: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        classid: 1
      }
    }
  },
  created () {
    this.initKindData()
    this.fetchProductList()
  },
  methods: {
    initKindData () {
      this.$api.kind.assort().then(res => {
        this.kinds = res.data.data.kind
        console.log(res.data.data.kind)
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
    }
  }
}
</script>

<style lang="scss" scoped>
.kind {
  .content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
}
</style>
