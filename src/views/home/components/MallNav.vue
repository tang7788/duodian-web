<template>
  <!-- <div class="nav">
    <div class="list">
      <a href="javascript:;"
        v-for="(item, index) in navs"
        :key="index"
      >
        <i class="icon">
          <img :src="item.icon" alt="">
        </i>
        <span>{{item.text}}</span>
      </a>
    </div>
  </div> -->
  <swiper ref="mySwiper" class="nav">
    <!-- slides -->
    <swiper-slide
      v-for="(item, index) in Math.ceil(navs.length/10)"
      :key="index"
      class="list"
    >
      <a href="javascript:;"
        v-for="(subitem, subindex) in navs.slice(index * 10, index * 10 + 10)"
        :key="subindex"
      >
        <i class="icon">
          <img :src="subitem.icon" alt="">
        </i>
        <span>{{subitem.text}}</span>
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
  </swiper>
</template>

<script>
export default {
  name: 'mall-nav',
  props: {
    navs: Array
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 20px;
  .list {
    display: grid;
    /* 声明列的宽度,数字3表示的重复3次，即有3列宽度为200px*/
    grid-template-columns: repeat(5, 20%);
    /* 声明行间距和列间距 */
    // grid-gap: 20px;
    /* 分别表示两行的高度 */
    // grid-template-rows: repeat(2, 156px);
    justify-content: space-around;
    grid-row-gap: 28px;
    a {
      display: grid;
      justify-items: center;
      font-size: 24px;
      color: #999;
      .icon {
        width: 75px;
        height: 75px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        margin-top: 12px;
      }
    }
  }
}
</style>
