const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        additionalData: `@import "~@/assets/scss/base.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*'],
            exclude: /node_modules/i
          }),
          require('autoprefixer')()
        ]
      }
    }
  },
  configureWebpack: {
    externals: {
      AMap: 'AMap'
    }
  },
  // 在开发环境下将 API 请求代理到 API 服务器  跨域代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
}