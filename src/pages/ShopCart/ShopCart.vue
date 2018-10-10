<template>
  <div class="container-fluid" style="overflow:scroll; ">
    <!--首页头部-->
    <HeaderTop title="我的购物车">
      <div class="header_login" slot="right">
        <span class="header_login_text">
           <span @click="showDelete()">管理</span>
        </span>
      </div>
    </HeaderTop>
    <!--<p style="padding-top: 0.8rem; background-color: #FF5500"" >共5件商品</p>-->
    <div class="shopCart-header">
      <div class="row">
        <div class="col-12" style="background-color: #FF5500">
          <p style="padding-top: 0.8rem">共5件宝贝</p>
        </div>
      </div>
    </div>
    <div class="shopCart-list">
      <hr/>
      <div class="row">
        <div class="col-2" align="right">
          <van-checkbox ></van-checkbox>
        </div>
        <div class="col-8" align="left">
          <i class="iconfont icon-fanhui"></i>
          <span align="left">顾大嫂旗舰店 ></span>
        </div>
        <div class="col-2">
          <p align="left">领卷</p>
        </div>
      </div>
      <div class="row">
        <div class="col-2" align="right">
          <van-checkbox ></van-checkbox>
        </div>
        <div class="col-4" align="left">
          <img src="./img/shop1.png" width="100%"/>
        </div>
        <div class="col-6" align="left">
          <p style="font-size: 0.8rem">酸辣粉5袋装，正宗重庆酸辣粉酸辣粉5袋装...</p>
          <span style="text-align: left; font-size: 0.8rem; color: red">￥29.9</span>

          <GoodsButton/>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue';
  import GoodsButton from '@/components/GoodsButton/GoodsButton.vue';
  import { Checkbox, Sku } from 'vant';
  export default {

    components: {
      HeaderTop,
      GoodsButton,
      [Checkbox.name]: Checkbox,
      [Sku.name]: Sku,
    }
  }
</script>

<style scoped>

</style>
