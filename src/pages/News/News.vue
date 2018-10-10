<template>
  <div class="container-fluid" style="overflow:scroll; ">
    <!--首页头部-->
    <HeaderTop title="消息">
    </HeaderTop>
    <div class="news-header">
      <div class="row">
        <div class="col-4">
          <i class="iconfont icon-jiaoyiwuliu"></i>
          <p>交易物流</p>
        </div>
        <div class="col-4">
          <i class="iconfont icon-xitongxiaoxi-"></i>
          <p>通知消息</p>
        </div>
        <div class="col-4">
          <i class="iconfont icon-hudongxiaoxi"></i>
          <p>互动消息</p>
        </div>
      </div>
    </div>
    <hr/>
    <div class="news-list-newly">
      <div class="row">
        <div class="col-2">
          <img src="./img/header_img.jpg" style="width: 100%"/>
        </div>
        <div class="col-7" style="text-align: left">
          <p style=" margin-bottom: -0.2rem">丽利</p>
          <span style="font-size: 0.8rem">这里有一条祝福快来看！</span>
        </div>
        <div class="col-3" style="text-align: center">
          18/10/10
        </div>
      </div>
    </div>
    <hr/>
    <h5 align="left"><i style="font-size: 1.3rem; color: #FF5500" class="iconfont icon-shijianlishijilujishizhongbiaomianxing"></i>两周前消息</h5>
    <br/>
    <div class="news-list-pass">
      <div class="row">
        <div class="col-2">
          <img src="./img/header_img.jpg" style="width: 100%"/>
        </div>
        <div class="col-7" style="text-align: left">
          <p style=" margin-bottom: -0.2rem">丽利</p>
          <span style="font-size: 0.8rem">这里有一条祝福快来看！</span>
        </div>
        <div class="col-3" style="text-align: center">
          18/10/10
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
  export default {

    components: {
      HeaderTop,

    }
  }

</script>

<style scoped lang="less">
  .news-header {
    .iconfont {
      font-size: 2rem;
      color: #FF5500;
    }
  }
</style>
