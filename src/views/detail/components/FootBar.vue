<template>
  <div class="footer">
    <nav>
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        active-class="active"
      >
        <img :src="item.icon" alt="" class="icon">
        <img :src="item.icon_select" alt="" class="icon_select">
        <span>{{item.text}}</span>
      </router-link>
      <a href="javascript:;" class="add">加入购物车</a>
      <a href="javascript:;" class="buy">立即购买</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'foot-bar',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/home.png'),
          icon_select: require('@/assets/images/home-select.png')
        },
        {
          path: '/kind',
          text: '分类',
          icon: require('@/assets/images/kind.png'),
          icon_select: require('@/assets/images/kind-select.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ebebeb;
  background: #fff;
  nav {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    @include flex(row, center, center);
    a {
      flex: 1;
      flex-direction: column;
      display: flex;
      align-items: center;
      .icon_select {
        display: none;
      }
      .icon {
        @include wh(52px, 52px)
      }
      span {
        font-size: 22px;
        color: #666666;
        padding-top: 4px;
      }
      &.active {
        .icon_select {
          @include wh(52px, 52px);
          display: block;
        }
        .icon {
          display: none;
        }
        span {
          color: #fe3113;
        }
      }
    }
    .add {
      width: 210px;
      height: 100%;
      background: #FFBA2F;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      color: #fff;
      line-height: 100px;
    }
    .buy {
      width: 210px;
      height: 100%;
      background: #FE3212;
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      color: #fff;
      line-height: 100px;
    }
  }
}
</style>
