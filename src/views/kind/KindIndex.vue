<template>
  <div class="kind">
    <router-link to="/search">
      <search-wrap />
    </router-link>
    <div class="content">
      <tab-bar
        :tabs="kinds"
        text="categoryName"
        layout="column"
        @change="leftNavChange"
        class="tab"
      ></tab-bar>
      <div class="right">
        <tab-bar
          :tabs="rightMenu"
          text="categoryName"
          @change="rightNavChange"
          class="right-tab"
        ></tab-bar>
        <!-- <conts-wrap></conts-wrap> -->
        <product-list
          :lists="product"
          class="list"
        ></product-list>
      </div>
    </div>
  </div>
</template>

<script>
import SearchWrap from './components/SearchWrap.vue'
import scroll from '@/mixins/scroll.js'
export default {
  name: 'kind-index',
  components: {
    SearchWrap
  },
  mixins: [scroll],
  data () {
    return {
      kinds: [],
      product: [],
      rightMenu: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  created () {
    this.initKindData()
    this.fetchProductList()
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    initKindData () {
      this.$api.product.assort().then(res => {
        this.kinds = res.data
        console.log(res.data)
        this.rightMenu = [{
          categoryId: res.data[0].categoryId,
          categoryName: '全部'
        }].concat(res.data[0].children)
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data
      } else {
        this.product = this.product.concat(res.data)
      }
    },
    leftNavChange (index, item) {
      this.rightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部'
      }].concat(item.children)
      this.fetchProductParams.page = 1
      this.fetchProductParams.category_id = item.categoryId
    },
    rightNavChange (index, item) {
      this.fetchProductParams.page = 1
      this.fetchProductParams.category_id = item.categoryId
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
    .right {
      width: calc(100% - 172px);
      box-sizing: border-box;
      position: absolute;
      left: 1.72rem;
      ::v-deep .right-tab {
        padding: 0;
        padding-left: 20px;
        position: sticky;
        top: 0;
        z-index: 10;
        background: #fff;
        nav {
          height: 60px;
          padding: 0;
          justify-content: start;
          overflow-x: scroll;
          &::-webkit-scrollbar {
            display: none;
          }
          a {
            font-size: 24px;
            color: #999;
            padding-right: 24px;
            flex-shrink: 0;
            &.active {
              color: #fe3113;
            }
          }
        }
      }
      .list {
        ::v-deep dl {
          width: 100%;
          height: 234px;
          overflow: hidden;
          dt {
            @include wh(186px, 186px)
          }
          .top {
            h5 {
              font-size: 28px;
              width: 292px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            p {
              font-size: 18px;
              color: #999;
              margin: 12px 0;
            }
            .tag {
              font-size: 0;
              span {
                @include wh(60px, 26px);
                display: inline-block;
                font-size: 20px;
                text-align: center;
                line-height: 26px;
                color: #fff;
                background: linear-gradient(251deg, #FE3113 0%, #FD7A00 100%);
                box-shadow: 0px 4px 8px 0px rgba(252,36,33,0.2), inset 0px 4px 14px 2px rgba(255,255,255,0.25);
                border-radius: 17px;
                margin-right: 8px;
              }
            }
          }
          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              font-size: 36px;
              color: #FE3113;
              span {
                font-size: 20px;
                color: #C0C0C0;
                text-decoration: line-through;
              }
              .money {
                font-size: 20px;
                color: #fe3113;
                text-decoration: none;
              }
            }
            .car {
              position: relative;
              width: 45px;
              height: 45px;
              background: #FE3113;
              box-shadow: 0px 1px 1px 0px rgba(255,64,54,0.2);
              border-radius: 100%;
              img {
                position: absolute;
                width: 20px;
                height: 20px;
                top: 25%;
                left: 28%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
