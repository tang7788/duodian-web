<template>
  <div class="tabs">
    <nav>
      <a
        href="javascript:;"
        v-for="(item, index) in tabs"
        :key="index"
        @click="change(index)"
        :class="{active: activeIndex === index}"
      >{{item.title}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  padding-top: 38px;
  padding-bottom: 28px;
  background: #fff;
  border-bottom: 1px solid #E2E2E2;
  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      font-size: 28px;
      color: #4A4A4A;
      &.active {
        font-size: 32px;
        color: #FE3113;
        font-weight: bold;
      }
    }
  }
}
</style>
