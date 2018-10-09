<template>
  <!--使用Bootstrap如果不使用面板的话，要把元素放进一个占满100%屏幕的容器里-->
  <!--class="container"则自动居中-->
  <div class="container-fluid">
    <!--首页头部-->
    <HeaderTop title="设置">
      <router-link class="header_left" slot="left" to="/user" replace>
        <i class="iconfont icon-fanhui" style="font-size: 2rem"></i>
      </router-link>
    </HeaderTop>

    <div class="user-header">
      <div class="row">
        <div class="col-2">
          <img src="./img/header_img.jpg" class="userSetting-header-img" @click="goToUserInfo()" style="margin-top: 0.5rem"/>
        </div>
        <div class="col-7">
          <p style="text-align: left; font-size: 1.5rem;">ibabyli</p>
          <p style="text-align: left;">会员名：ibabyli</p>
        </div>
        <div class="col-3" style="margin-top: 1.5rem;">
          <i class="iconfont icon-erweima" style="font-size: 1.3rem">> </i>
        </div>
      </div>
    </div>
    <mt-cell
      title="我的收货地址"
      style="text-align: left"
    value=">">
    </mt-cell>
    <mt-cell
      title="账户与安全"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="地区设置"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="音效与通知"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="隐私"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="通用"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="问题反馈"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>
    <mt-cell
      title="关于俊俊商城"
      to="//github.com"
      style="text-align: left" value=">">
    </mt-cell>

    <mt-button size="">退出当前账户</mt-button>


  </div>
</template>

<script>
  // 测试引入jQuery是否引入成功
  /*$(function () {
    alert('234')
  })*/
  import Vue from 'vue';
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);
  export default {
    data() {
      return {
      }
    },
    methods: {},
    components: {
      HeaderTop,
    }
  }

</script>

<style lang="less" scoped>
  .userSetting-header-img {
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    /*align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 1rem;*/
  }

</style>
