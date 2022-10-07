<template>
  <div>
    <div class="price">
      <p><span class="money">￥</span>{{price | number}}<span>￥{{price | number}}</span></p>
      <p class="num">累计销售2233份</p>
    </div>
    <div class="bottom">
      <div class="title">
        {{title}}
        <p class="surplus">剩余3458份</p>
      </div>
      <div class="enjoy">分享好友</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-info',
  props: {
    price: String,
    title: String
  },
  // toFixed() 方法可把 Number四舍五入为指定小数位数的数字。
  filters: {
    number: function (value) {
      return (value / 100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  .price {
    width: 100%;
    height: 150px;
    background: #FE3113;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-left: 30px;
    padding-top: 26px;
    box-sizing: border-box;
    p {
      font-size: 46px;
      color: #fff;
      font-weight: 600;
      span {
        font-size: 22px;
        color: #fff;
        text-decoration: line-through;
        font-weight: 400;
      }
      .money {
        font-size: 20px;
        color: #fe3113;
        text-decoration: none;
        color: #fff;
      }
    }
    .num {
      font-size: 22px;
      color: #fff;
      font-weight: normal;
      padding-top: 8px;
    }
  }
  .bottom {
    width: 100%;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-right: 30px;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      flex-direction: column;
      width: 510px;
      font-size: 36px;
      font-weight: 400;
      color: #111111;
      line-height: 46px;
      .surplus {
        width: 130px;
        height: 32px;
        font-size: 24px;
        font-weight: 400;
        color: #999999;
        line-height: 32px;
        padding-top: 12px;
      }
    }
    .enjoy {
      font-weight: 400;
      color: #FE3113;
      line-height: 28px;
      font-size: 20px;
    }
  }
}
</style>
