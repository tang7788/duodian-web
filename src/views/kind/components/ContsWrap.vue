<template>
  <div class="right">
    <div class="top">
      <ul class="filter">
        <li>全部</li>
      </ul>
      <div class="icon">
        <img src="https://fast-static.dmallcdn.com/kayak-project/wxdmall/dist/wxdmall/view/sorts/images/filter.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conts-wrap'
}
</script>

<style lang="scss" scoped>
.right {
  width: calc(100% - 172px);
  box-sizing: border-box;
  .top {
    padding-left: 20px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 21px;
    .filter {
      li {
        font-size: 24px;
        color: #999;
      }
    }
    .icon {
      @include wh(60px, 64px);
      font-size: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
