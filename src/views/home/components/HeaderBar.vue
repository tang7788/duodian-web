<template>
  <div class="header">
    <a href="javascript:;">
      <i class="iconfont icon-shouhuodizhi"></i>
      <span>送至：北京八维研修学院</span>
      <i class="iconfont icon-xiangyoujiantou"></i>
    </a>
    <a href="javascript:;" class="search">
      <i class="iconfont icon-sousuo"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style lang="scss" scoped>
.header {
  @include wh(100%, 98px);
  @include flex(row, center, space-between);
  padding-left: 16px;
  box-sizing: border-box;
  a {
    font-size: 24px;
    color: #999;
    span {
      font-size: 24px;
      color: #999;
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
