<template>
  <div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索校园超市商品">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-wrap'
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 98px;
  display: flex;
  border-bottom: 1px solid #EDEDED;
  .search {
    i {
      @include wh(22px, 22px);
      position: absolute;
      left: 60px;
      top: 38px;
      color: #565656;
      z-index: 10;
    }
    input {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      height: 64px;
      background: #f6f6f6;
      border-radius: 32px;
      margin: 17px 26px 17px 30px;
      outline: none;
      border: 0;
      padding-left: 78px;
    }
  }
}
</style>
