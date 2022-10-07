<template>
  <div class="my-info">
    <div class="info">
      <h5>{{info.name}}</h5>
      <p>开启美好的一天...</p>
    </div>
    <div class="pic">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-info',
  props: {
    info: Object
  }
}
</script>

<style lang="scss" scoped>
.my-info {
  width: 100%;
  height: 264px;
  background-color: #FE3113;
  padding: 58px 30px 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .info {
    h5 {
      font-size: 40px;
      color: #fff;
      font-weight: 600;
      margin-bottom: 16px;
    }
    p {
      font-size: 24px;
      font-weight: 400;
      color: #fff;
    }
  }
  .pic {
    @include wh(84px, 90px);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
