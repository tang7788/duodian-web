<template>
  <div class="geo">
    <search-bar
      v-model="searchKey"
      :tipList="tips"
      @search="search"
      :placeholder="holder"
      class="search-bar"
    ></search-bar>
    <a href="javascript:;" class="now" @click="geo">定位到当前位置</a>
    <popup-wrap title="选择地址" :visible="isshow" @close="fn" class="popup">
      <!-- <popup-wrap title="选择地址" :visible.sync="isshow" class="popup"> -->
      <ul>
        <li class="item" v-for="(item, index) in pois" :key="index" @click="search(item)">
          <p>{{item.name}}</p>
          <p class="district">{{item.address}}</p>
        </li>
      </ul>
    </popup-wrap>
    <loading-index show></loading-index>
  </div>
</template>

<script>
import AMap from 'AMap'
import map from '@/utils/map'
export default {
  name: 'address-index',
  data () {
    return {
      searchKey: '',
      tips: [],
      holder: '搜索地址',
      pois: [],
      isshow: false
    }
  },
  watch: {
    searchKey () {
      this.fetchAddress()
    }
  },
  methods: {
    fn (val) {
      this.isshow = val
    },
    fetchAddress () {
      AMap.plugin('AMap.Autocomplete', () => {
        // 实例化Autocomplete
        const autoOptions = {
          city: '全国'
        }
        const autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(this.searchKey, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          if (result !== 'NO_PARAMS') {
            this.tips = result.tips
          } else {
            this.tips = []
          }
        })
      })
    },
    search (item) {
      const address = {
        adcode: item.adcode,
        city: item.city,
        formattedAddress: item.name,
        district: item.district
      }
      this.$store.commit('user/SET_ADDRESS', address)
      this.$router.back()
      console.log(item)
    },
    geo () {
      this.$loading.show()
      map.geolocation().then((res) => {
        this.isshow = true
        console.log(res)
        this.pois = res.pois
        this.$loading.hide()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.geo {
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  .search-bar {
    background-color: #fff;
  }
  .now {
    display: block;
    width: 100%;
    font-size: 28px;
    color: #000;
    padding-left: 30px;
    box-sizing: border-box;
    height: 80px;
    margin-top: 30px;
    line-height: 80px;
    background-color: #fff;
  }
  .popup {
    ul {
      height: 550px;
      overflow-y: scroll;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
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
</style>
