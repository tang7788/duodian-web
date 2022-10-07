<template>
  <div class="lists">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="left">
          <img :src="item.icon" alt="" class="icon">
          <span>{{item.title}}</span>
        </div>
        <div class="right">{{item.right}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-list',
  data () {
    return {
      list: [
        {
          icon: require('@/assets/images/quan.png'),
          title: '我的优惠券',
          right: '8张未使用'
        },
        {
          icon: require('@/assets/images/rule.png'),
          title: '资质规则'
        },
        {
          icon: require('@/assets/images/ke.png'),
          title: '联系客服',
          right: '400-123-123'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.lists {
  width: 690px;
  height: 342px;
  background-color: #fff;
  margin: 40px 30px 0 30px;
  padding: 41px 56px 40px 32px;
  box-sizing: border-box;
  box-shadow: 0px 0px 17px -3px rgba(0,0,0,0.06);
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      .left {
        font-size: 0;
        .icon {
          @include wh(40px, 36px);
          display: inline-block;
          transform: translateY(8px);
        }
        span {
          color: #111;
          font-size: 28px;
          margin-left: 4px;
        }
      }
      .right {
        font-size: 24px;
      }
      &:nth-child(1) {
        .right {
          color: #FE3113;
        }
      }
      &:nth-child(3) {
        .right {
          color: #999;
        }
      }
    }
  }
}
</style>
