<template>
  <div class="tabs" :class="{
      [layout]: true
    }">
    <nav>
      <a
        href="javascript:;"
        v-for="(item, index) in tabs"
        :key="index"
        @click="change(index)"
        :class="{active: activeIndex === index}"
      >{{item[text]}}</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array,
    text: {
      type: String,
      default: 'title'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
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
  &.column {
    width: 172px;
    height: 100%;
    background: #fafafa;
    padding-bottom: 0;
    padding-top: 0;
    position: fixed;
    top: 0.98rem;
    height: calc(100vh - 98px - 100px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    nav {
      display: flex;
      flex-direction: column;
      a {
        padding: 34px 38px;
        font-weight: 400;
        color: #999999;
        line-height: 55px;
        font-size: 24px;
        &.active {
          background: #fff;
          font-weight: 700;
          color: #fe3113;
        }
      }
    }
  }
}
</style>
