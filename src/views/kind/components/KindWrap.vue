<template>
  <div class="list">
    <ul>
      <li
        v-for="(item, index) in lists"
        :key="index"
        :class="n === index ? 'active' : ''"
        @click="change(index)"
      >{{item.categoryName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'kind-wrap',
  props: {
    lists: Array
  },
  data () {
    return {
      n: 0
    }
  },
  methods: {
    change (index) {
      this.n = index
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 172px;
  height: 100%;
  background: #fafafa;
  ul {
    padding-top: 23px;
    li {
      font-weight: 400;
      color: #999999;
      line-height: 55px;
      font-size: 24px;
      text-align: center;
      padding: 34px 38px;
      &.active {
        background-color: #fff;
        color: #fe3113;
        font-weight: 700;
      }
    }
  }
}
</style>
