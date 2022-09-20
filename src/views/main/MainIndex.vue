<template>
  <div>
    <router-view></router-view>
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
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-index',
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
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/images/car.png'),
          icon_select: require('@/assets/images/car-select.png')
        },
        {
          path: '/my',
          text: '我的',
          icon: require('@/assets/images/my.png'),
          icon_select: require('@/assets/images/my-select.png')
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
    @include flex(row, center, center);
    padding-top: 14px;
    padding-bottom: 6px;
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
  }
}
</style>
