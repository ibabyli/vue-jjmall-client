<template>
	<div class="container-fluid" style="overflow:scroll; height: 50rem">
    <!--首页头部-->
    <HeaderTop title="首页">
    </HeaderTop>
    <div class="row">
      <div class="col-9">
        <van-field clearable v-model="searchGoods" placeholder="请输入商品名称" style="border: 1px solid #fd7e14" />
      </div>
      <div class="col-3" style="padding-top: 0.7rem">
        <i class="iconfont icon-sousuo" style="padding-top: 15px; text-align: cneter">搜索</i>
      </div>
    </div>
    <hr/>
		<h6>每日好店</h6>
    <div class="home-good-food">
      <div class="row">
        <div class="col-6">
          <span style="font-size: 0.9rem">万能市集</span>
          <span style="font-size: 0.8rem">发现深藏的好店</span>
          <img src="./img/home_good_food1.png" style="width: 100%; height: 100%"/>
        </div>
        <div class="col-6">
          <span style="font-size: 0.9rem">淘宝江湖</span>
          <span style="font-size: 0.8rem">我点乐子儿~</span>
          <img src="./img/home_good_food2.png" style="width: 100%; height: 100%"/>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-6">
          <span style="font-size: 0.9rem">深藏不漏</span>
          <span style="font-size: 0.8rem">日常版造物节</span>
          <img src="./img/home_good_food3.png" style="width: 100%; height: 100%"/>
        </div>
        <div class="col-6">
          <span style="font-size: 0.9rem">好看林立</span>
          <span style="font-size: 0.8rem">好店不怕巷子深</span>
          <img src="./img/home_good_food4.png" style="width: 100%; height: 100%"/>
        </div>
      </div>
    </div>
    <hr/>
    <hr/>
    <h6><i class="iconfont icon-xinaixin" style="color: #FF5500"></i>猜你喜欢</h6>
    <div class="home-favorite">
      <div class="row">
        <div class="col-6">
          <img src="./img/home_good_food1.png" style="width: 100%; height: 100%"/>
          <span style="font-size: 0.9rem">正宗火腿肠。。。。100根，只要55</span>

        </div>
        <div class="col-6">
          <img src="./img/home_good_food2.png" style="width: 100%; height: 100%"/>
          <span style="font-size: 0.9rem">酸辣粉5袋装，正宗重庆酸辣粉。。。。</span>

        </div>
      </div>
    </div>
</div>
</template>

<script>
  import { Field } from 'vant';
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
	export default {

    data() {
      return {
        searchGoods: '', //搜索的商品名称
      }
    },
    components: {
      HeaderTop,
      [Field.name]: Field
    }
  }

</script>

<style>
</style>
