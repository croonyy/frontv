const Timestamp = new Date().getTime()
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer:{
  //   host:'localhost',
  //   port:'8080',
  //   proxy:{
  //     '/api':{
  //       //代理地址，这里设置的地址会代替axios中设置的baseURL
  //       target:'http://172.9.100.161:1155', 
  //       // changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
  //       // //!!!加了以下这部分内容，解决django-403Forbidden。 原因还未深入研究。
  //       // onProxyReq: function (proxyReq) {
  //       //   proxyReq.removeHeader('origin')
  //       //   // console.log(proxyReq)
  //       // },  
  //       pathRewrite:{
  //         '^/api':''
  //       }
  //     }
  //   }
  // }
  css: {
    loaderOptions: {
      // 你的基础样式 因为没有我就注释了
      // sass: {
      //     data: `
      //      @import "@/assets/style/base.scss";
      //  `,
      // },

      //这只主题样式，修改此文件后需要重新启动，
      less: {
        javascriptEnabled: true,
        lessOptions: {
          modifyVars: {
            //这是配置css主题色
            'primary-color': '#007AFF',
          },
          javascriptEnabled: true,
        },
      },
    },
    // 每次打包后生成的css携带时间戳
    extract: {
      filename: `css/[name].${Timestamp}.css`,
      chunkFilename: `css/[name].${Timestamp}.css`,
    },
  },
  productionSourceMap: false,
  //打包后相对目录
  publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
  configureWebpack: {
    //每次打包后生成的js携带时间戳
    output: {
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`,
    },
  },

})
