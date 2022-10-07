<template>
  <div class="lists">
    <router-link
      v-for="(item, index) in lists"
      :key="index"
      :to="`/detail/${item.id}`"
      tag="dl"
    >
      <dt>
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <div class="top">
          <h5>{{item.name}}</h5>
          <p>累计{{12358 | numberFormat}}份 / 已拼{{1778 | numberFormat}}份</p>
          <div class="tag">
            <span>自营</span>
            <span>团购</span>
          </div>
        </div>
        <div class="bottom">
          <p><span class="money">￥</span>{{item.price | number}}<span>￥{{item.price | number}}</span></p>
          <div class="car">
            <img src="../../assets/images/xxcar.png" alt="">
          </div>
        </div>
      </dd>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: {
    lists: Array
  },
  filters: {
    numberFormat: function (value) {
      let unit = ''
      const k = 10000
      const sizes = ['', '万', '亿', '万亿']
      let i
      if (value < k) {
        i = value
        value = i
      } else {
        i = Math.floor(Math.log(value) / Math.log(k))
        value = ((value / Math.pow(k, i))).toFixed(2)
        unit = sizes[i]
      }
      return value + unit
    },
    number: function (value) {
      return (value / 100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.lists {
  margin-bottom: 100px;
  dl {
    @include wh(750px, 303px);
    padding: 33px 30px 30px 30px;
    box-sizing: border-box;
    display: flex;
    // justify-content: space-between;
    dt {
      @include wh(240px, 240px);
      padding-right: 30px;
      img {
        height: 100%;
      }
    }
    dd {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        h5 {
          font-size: 32px;
          color: #111;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        p {
          font-size: 24px;
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
          width: 66px;
          height: 63px;
          background: #FE3113;
          box-shadow: 0px 1px 1px 0px rgba(255,64,54,0.2);
          border-radius: 100%;
          img {
            position: absolute;
            width: 0.28rem;
            height: 0.28rem;
            top: 25%;
            left: 28%;
          }
        }
      }
    }
  }
}
</style>
