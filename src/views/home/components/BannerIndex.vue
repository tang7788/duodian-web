<template>
<div>
  <swiper :options="swiperOption" ref="mySwiper" class="banner" v-if="pics.length>0">
    <!-- slides -->
    <swiper-slide
      v-for="(item, index) in pics"
      :key="index"
    >
      <img :src="item.img" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
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
    @include wh(100%, auto);
    img {
      width: 100%;
      height: 100%;
    };
    ::v-deep .swiper-pagination-bullet-active {
      background: $color-primary;
    }
  }
}
</style>
