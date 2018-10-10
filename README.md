# jjmall_client

> GraduationProject

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.安装mint-ui
npm install --save mint-ui
npm install --save-dev babel-plugin-component(在babelc中配置)
2.安装axios
npm install --save axios
3.安装vuex
npm install --save vuex
4.安装less
npm install less less-loader --save
-- 使用bootstrap
5.安装jQuery
npm install jquery --save
6.安装bootstrap
npm install bootstrap --save
7.安装popper.js
npm install popper.js --save

----------------------使用vant分支--------------------------------
1.安装vant
npm i vant -S
2.配置babelrc
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
3.// .babelrc 中配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}


