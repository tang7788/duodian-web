<template>
  <div class="day">
    <h3>每日必购<span>大家都在买</span></h3>
    <div class="pics">
      <img src="../../../assets/images/sheng.jpg" alt="">
      <img src="../../../assets/images/food.jpg" alt="">
      <img src="../../../assets/images/jia.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'every-day'
}
</script>

<style lang="scss" scoped>
.day {
  margin-top: 30px;
  padding-top: 20px;
  h3 {
    font-size: 40px;
    font-weight: bold;
    color: #4A4A4A;
    padding-left: 30px;
    span {
      font-size: 28px;
      font-weight: normal;
      margin-left: 12px;
    }
  }
  .pics {
    width: 100vw;
    margin-top: 28px;
    img {
      display: inline-block;
      width: 33.33%;
      height: 300px;
    }
  }
}
</style>
