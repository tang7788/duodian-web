<template>
  <div>
    <div class="search">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="val"
        @keydown.enter="search(val)"
      >
      <i class="iconfont icon-cuowu" v-show="showDel" @click="clear"></i>
    </div>
    <div class="tip" v-show="showTip">
      <div class="content">
        <ul>
          <li
            v-for="(item, index) in tipList"
            :key="index"
            @click="search(item)"
          >
            <p v-html="item.newItem"></p>
            <p>{{item.name}}</p>
            <p class="district">{{item.district}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    value: String,
    tipList: Array,
    placeholder: {
      type: String,
      default: '请输入商品名称'
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  computed: {
    showDel () {
      return this.val.length >= 1
    },
    showTip () {
      return this.tipList.length >= 1
    }
  },
  methods: {
    clear () {
      this.val = ''
      this.$router.push({
        path: '/search'
      })
    },
    search (value) {
      this.$emit('search', value)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  .search {
    width: 100%;
    height: 98px;
    padding: 17px 26px 17px 30px;
    box-sizing: border-box;
    font-size: 0;
    input {
      width: 100%;
      box-sizing: border-box;
      height: 64px;
      background: #f6f6f6;
      border-radius: 32px;
      outline: none;
      border: 0;
      padding-left: 38px;
      position: relative;
    }
    i {
      position: absolute;
      color: #999;
      font-weight: bold;
      top: 36px;
      right: 60px;
    }
  }
  .tip {
    position: fixed;
    top: 98px;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.1);
    z-index: 10;
    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow-y: scroll;
      ul {
        background-color: #f8f8f8;
        padding: 30px;
        li {
          font-size: 28px;
          color: #000;
          margin: 32px 0;
          p {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .district {
            font-size: 26px;
            margin-top: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
