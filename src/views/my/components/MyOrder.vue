<template>
  <div class="order">
    <div class="top">
      <p>我的订单</p>
      <div class="all">
        <span>查看全部</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <div class="bottom">
      <nav>
        <a
          v-for="(item, index) in tabs"
          :key="index"
        >
          <img :src="item.icon" alt="" class="icon">
          <span>{{item.text}}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-order',
  data () {
    return {
      tabs: [
        {
          icon: require('@/assets/images/m1-2.png'),
          text: '代付款'
        },
        {
          icon: require('@/assets/images/m2.png'),
          text: '待配送'
        },
        {
          icon: require('@/assets/images/m3.png'),
          text: '已发货'
        },
        {
          icon: require('@/assets/images/m4.png'),
          text: '退款/售后'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  width: 690px;
  height: 299px;
  margin: 0 30px;
  background-color: #fff;
  box-shadow: 0px 33px 20px -20px rgba(0,0,0,0.11), 0px 0px 17px -3px rgba(0,0,0,0.06);
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: #111;
      font-size: 28px;
    }
    .all {
      font-size: 0;
      span {
        color: #999;
        font-size: 24px;
      }
      i {
        @include wh(10px, 18px);
        display: inline-block;
      }
    }
  }
  .bottom {
    nav {
      width: 100%;
      @include flex(row, center, center);
      a {
        flex: 1;
        flex-direction: column;
        display: flex;
        align-items: center;
        .icon {
          @include wh(61px, 50px);
          &:nth-child(4) {
            width: 46px;
            height: 36px;
          }
        }
        span {
          color: #111;
          font-size: 24px;
          line-height: 30px;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
