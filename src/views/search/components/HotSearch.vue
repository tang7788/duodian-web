<template>
  <div class="hot">
    <h3>热门搜索</h3>
    <ul class="hot-list">
        <li>冻干粉</li>
        <li>枸杞</li>
        <li>面膜</li>
        <li>项链</li>
        <li>水果</li>
        <li>零食</li>
        <li>洗面奶</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hot-search'
}
</script>

<style lang="scss" scoped>
.hot {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  margin-top: 30px;
  h3 {
    font-size: 30px;
    color: #111;
    font-weight: 600;
  }
  .hot-list {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      li {
        color: #838383;
        font-size: 24px;
        padding: 10px 24px;
        background-color: #efefef;
        border-radius: 16px;
        box-sizing: border-box;
        margin-right: 12px;
        margin-bottom: 12px;
      }
  }
}
</style>
