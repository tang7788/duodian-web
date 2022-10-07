import AMap from 'AMap'
const geolocation = () => {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Geolocation', function () {
      const geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        // timeout: 10000,
        // 调整PC端为优先使用浏览器定位，失败后使用IP定位
        GeoLocationFirst: true,
        // 定位按钮的停靠位置的偏移量
        // offset: [10, 20],
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        // zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        // position: 'RB'
        // 是否需要周边POI、道路交叉口等信息
        extensions: 'all'
      })
      geolocation.getCurrentPosition((status, result) => {
        if (status === 'complete') {
          resolve(result)
        } else {
          reject(result)
        }
      })
      // function onComplete (data) {
      //   // data是具体的定位信息
      //   console.log('成功', data)
      // }
      // function onError (data) {
      //   // 定位出错
      //   console.log('失败', data)
      // }
    })
  })
}
export default {
  geolocation
}
