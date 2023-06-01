const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
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
})
