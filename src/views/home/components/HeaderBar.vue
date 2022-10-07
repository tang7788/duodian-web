<template>
  <div class="header">
    <router-link to="/address">
      <i class="iconfont icon-shouhuodizhi"></i>
      <span>送至：{{address.formattedAddress}}</span>
      <i class="iconfont icon-xiangyoujiantou"></i>
    </router-link>
    <router-link to="/search" class="search">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'header-bar',
  computed: {
    ...mapState('user', ['address'])
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include wh(100%, 98px);
  @include flex(row, center, space-between);
  padding-left: 16px;
  box-sizing: border-box;
  a {
    display: block;
    max-width: 50%;
    font-size: 24px;
    color: #999;
    display: flex;
    span {
      font-size: 24px;
      color: #999;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .search {
    @include wh(54px, 54px);
    i {
      text-align: center;
      line-height: 54px;
      display: block;
    }
  }
}
</style>
