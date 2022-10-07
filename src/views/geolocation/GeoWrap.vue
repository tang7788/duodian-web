<template>
  <div>
    正在定位
  </div>
</template>

<script>
import map from '@/utils/map'
export default {
  name: 'geo-wrap',
  mounted () {
    // const map = new AMap.Map('container', {
    //   zoom: 11,
    //   center: [116.397428, 39.90923],
    //   viewMode: '3D'
    // })
    // console.log(map)
    map.geolocation().then((res) => {
      console.log(res)
      this.$store.commit('user/SET_ADDRESS', {
        ...res.addressComponent,
        formattedAddress: res.formattedAddress
      })
      this.$router.replace('/home')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
