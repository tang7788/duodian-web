<template>
  <div class="loading" v-show="show">
    <a href="javascript:;"></a>
  </div>
</template>

<script>
export default {
  name: 'loading-index',
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.16);
  @include flex(row, center, center);
  a {
    display: block;
    width: 140px;
    height: 140px;
    background-image: url(https://img.dmallcdn.com//dshop/201903/40208262-8001-4c19-ad20-370a039ed243);
    background-size: auto 140px;
    background-position: 0 0;
    animation: loading .9s steps(25) infinite;
  }
}
@keyframes loading {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -3500px 0;
  }
}
</style>
