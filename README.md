# vue-mobile
基于vue1.0的vonic框架写的一个webApp
接口需要调用第三方金融信息，涉及商业保密，暂未接入
已引入vue-resource作为ajax通信框架，当然也可用vue2.0推荐的axios，写法更酷炫
数据驱动视图的vue写法，更适合快速开发迭代的项目
打包之后单文件在首屏加载时稍有延迟，单webapp的理念就是单次加载，重复使用，页面切换只需前端控制，减轻服务器压力
# install dependencies
npm install

# serve with hot reload at localhost:6565
npm run dev

# build for production with minification
npm run build
