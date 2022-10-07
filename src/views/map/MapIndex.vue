<template>
  <div id="container"></div>
</template>

<script>
import map from '@/utils/map'
export default {
  name: 'map-index',
  mounted () {
    // const map = new AMap.Map('container', {
    //   zoom: 11,
    //   center: [116.397428, 39.90923],
    //   viewMode: '3D'
    // })
    // console.log(map)
    map.geolocation().then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
