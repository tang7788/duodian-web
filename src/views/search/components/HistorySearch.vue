<template>
  <div class="history">
    <div class="recently">
      <h3>历史搜索 <span class="del" @click="del"><img src="../../../assets/images/del_03.png" alt="">清空历史记录</span></h3>
      <ul class="list">
        <li
          v-for="(item, index) in hlists"
          :key="index"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history-search',
  props: {
    hlists: Array
  },
  methods: {
    del () {
      localStorage.removeItem('history')
      // this.lists = []
    }
  }
}
</script>

<style lang="scss" scoped>
.history {
  .recently {
    margin-top: 73px;
    padding: 0 30px;
    box-sizing: border-box;
    // display: none;
    h3 {
      width: 100%;
      font-size: 30px;
      color: #111;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .del {
        display: block;
        font-size: 24px;
        color: #999;
        font-weight: normal;
        img {
          vertical-align: sub;
          margin-right: 8px;
        }
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      li {
        color: #838383;
        font-size: 24px;
        padding: 10px 24px;
        background-color: #efefef;
        border-radius: 16px;
        box-sizing: border-box;
        margin-right: 12px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
