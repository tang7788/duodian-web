<template>
  <div class="card">
    <h2 class="title">{{title}}</h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-wrap',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 40px 30px;
  box-sizing: border-box;
  h2 {
    font-size: 28px;
    color: #111;
  }
}
</style>
