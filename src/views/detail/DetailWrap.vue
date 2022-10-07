<template>
  <div class="detail">
    <banner-index :pics="banner"></banner-index>
    <product-info
      :price="price"
      :title="title"
    />
    <card-wrap title="购买记录" class="record"></card-wrap>
    <card-wrap title="商品评价" class="goods"></card-wrap>
    <card-wrap title="猜你喜欢" class="like">
      <product-list
        :lists="product"
        class="list"
      ></product-list>
    </card-wrap>
    <card-wrap title="商品详情" class="pics" v-html="info.detail"></card-wrap>
    <foot-bar />
  </div>
</template>

<script>
import BannerIndex from './components/BannerIndex.vue'
import ProductInfo from './components/ProductInfo.vue'
import FootBar from './components/FootBar.vue'
export default {
  name: 'detail-wrap',
  components: {
    BannerIndex,
    ProductInfo,
    FootBar
  },
  data () {
    return {
      banner: [],
      price: '',
      title: '',
      info: {},
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  created () {
    this.fetchProductDetail()
    this.fetchProductList()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = await this.$api.product.detail(id)
      console.log(res)
      this.info = res.data
      this.banner = res.data.images
      this.price = res.data.price
      this.title = res.data.name
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data
      } else {
        this.product = this.product.concat(res.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  background: #f8f8f8;
  .record {
    margin-top: 28px;
  }
  .goods {
    margin-top: 30px;
  }
  .like {
    margin-top: 35px;
    .list {
      display: flex;
      overflow-x: scroll;
      margin-bottom: 0;
      &::-webkit-scrollbar {
        display: none;
      }
      ::v-deep dl {
        width: 220px;
        height: 334px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        dt {
          @include wh(186px, 186px)
        }
        .top {
          h5 {
            font-size: 20px;
            margin-top: 10px;
            width: 100%;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            display: none;
            font-size: 18px;
            color: #999;
            margin: 12px 0;
          }
          .tag {
            display: none;
          }
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            font-size: 22px;
            color: #FE3113;
            span {
              font-size: 12px;
              color: #C0C0C0;
              text-decoration: line-through;
            }
            .money {
              font-size: 22px;
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
  .pics {
    margin-top: 22px;
    margin-bottom: 100px;
    ::v-deep img {
      width: 100%;
    }
  }
}
</style>
