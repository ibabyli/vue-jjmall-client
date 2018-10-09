// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 声明使用vuex
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// 图片懒加载
// import VueLazyload from 'vue-lazyload'
// import loading from '@/common/img/loading.gif'
// <img v-lazy="food.image">

//import '@/filters' // 加载自定义过滤器


Vue.config.productionTip = false // 设置为 false 以阻止 vue 在启动时生成生产提示。

// 引入部分
import { Button, Toast } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //components: { App },
  router, //使用上vue-router
  store, // 使用上vuex
  //loading,
})
