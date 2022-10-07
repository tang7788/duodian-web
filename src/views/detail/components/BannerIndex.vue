<template>
<div>
  <swiper :options="swiperOption" ref="mySwiper" class="banner" v-if="pics.length>0">
    <!-- slides -->
    <swiper-slide
      v-for="(item, index) in pics"
      :key="index"
    >
      <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="num">
      <p>{{index}}<span>/{{pics.length}}</span></p>
    </div> -->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'banner-index',
  props: {
    pics: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
  // mounted () {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   console.log('this is current swiper instance object', this.swiper)
  //   // this.swiper.slideTo(3, 3000, true)
  // }
}
</script>

<style lang="scss" scoped>
div {
  .banner {
    @include wh(100%, 490px);
    position: relative;
    img {
      width: 100%;
      height: 100%;
    };
    // ::v-deep .swiper-pagination-bullet-active {
    //   background: $color-primary;
    // }
    ::v-deep .my-bullet{
      color: white;
      padding: 4px;
      background: transparent;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      width: 22px;
      height: 22px;
      border: 1px solid #dddddd;
      margin:0 5px;
      border-radius: 0;
      opacity: 1;
    }
    ::v-deep .my-bullet-active{
      background-color: rgb(204, 0, 0);
      border-color: rgb(204, 0, 0);
    }
  }
}
</style>
