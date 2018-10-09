<template>
  <!--使用Bootstrap如果不使用面板的话，要把元素放进一个占满100%屏幕的容器里-->
  <!--class="container"则自动居中-->
  <div class="">
    <!--首页头部-->
    <HeaderTop title="个人资料">
      <router-link class="header_left" slot="left" to="/user" replace>
        <i class="iconfont icon-fanhui" style="font-size: 2rem"></i>
      </router-link>
    </HeaderTop>

    <mt-cell
      title="个人头像"
      to="//github.com"
      is-link
      style="text-align: left">
      <img src="./img/header_img.jpg" class="userSetting-header-img"/>
    </mt-cell>

    <mt-cell
      title="会员名"
      style="text-align: left"
      is-link
    value="ibabyli">
    </mt-cell>

    <mt-cell
      title="淘宝昵称"
      to="//github.com"
      is-link
      style="text-align: left" value="ibabyli">
    </mt-cell>

    <mt-cell
      title="我的二维码名片"
      to="//github.com"
      is-link
      style="text-align: left">
      <i class="iconfont icon-erweima" style="font-size: 1.3rem"></i>
    </mt-cell>

    <!--<hr/>-->
    <p></p>
    <mt-cell
      title="性别"
      to="//github.com"
      is-link
      style="text-align: left" value="女">
    </mt-cell>



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
