<template>
  <!--使用Bootstrap如果不使用面板的话，要把元素放进一个占满100%屏幕的容器里-->
  <!--class="container"则自动居中-->
  <div class="container-fluid" style="overflow:scroll; height: 50rem">
    <div class="user-header">
      <div class="row">
        <div class="col-2">
          <img src="./img/header_img.jpg" class="user-header-img"/>
        </div>
        <div class="col-7">
          <p style="text-align: left; font-size: 2rem;">ibabyli</p>
          <p style="text-align: left;">我的亲情账号</p>
        </div>
        <div class="col-1">
          <i class="iconfont icon-rili"></i>
        </div>
        <div class="col-1">
          <i class="iconfont icon-shezhi"></i>
          &nbsp;&nbsp;&nbsp;
        </div>
        <div class="col-1">
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <span>2</span>
          <p class="">收藏夹</p>
        </div>
        <div class="col-3">
          <span>2</span>
          <p class="">关注店铺</p>
        </div>
        <div class="col-3">
          <span>2</span>
          <p class="">足迹</p>
        </div>
        <div class="col-3">
          <span>2</span>
          <p class="">红包卡劵</p>
        </div>
      </div>
    </div>
    <hr/>
    <div class="user-order">
      <div class="row">
        <div class="col-6">我的订单</div>
        <div class="col-6">查看全部订单></div>
      </div>
      <br/>
      <div class="row">
        <div class="col-3">
          <i class="iconfont icon-daifukuan"></i>
          <p>待付款</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-ziyuan"></i>
          <p>待发货</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-daishouhuo"></i>
          <p>待收货</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-icon-anxinqiao-1"></i>
          <p>待评价</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-tuikuanshouhou"></i>
          <p>退款/售后</p>
        </div>
      </div>
      <hr/>
    </div>
    <div class="user-tools">
      <div class="row">
        <div class="col-6">必备工具</div>
        <div class="col-6">查看全部工具></div>
      </div>
      <br/>
      <div class="row">
        <div class="col-3">
          <i class="iconfont icon-nav_zhutihuanfu" style="color: #B680D6;"></i>
          <p>主题换肤</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-lingjuanzhongxin"></i>
          <p>领卷中心</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-zhuanhuan_qianbao"></i>
          <p>闲置换钱</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-kefu"></i>
          <p>客服小丽</p>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <i class="iconfont icon-huabei"></i>
          <p>花呗</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-mayibaoqia"></i>
          <p>丽丽宝卡</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-wodepingjia"></i>
          <p>我的评价</p>
        </div>
        <div class="col-3">
          <i class="iconfont icon-gengduo"></i>
          <p>查看更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 测试引入jQuery是否引入成功
  /*$(function () {
    alert('234')
  })*/
  export default {

    methods: {}
  }

</script>

<style lang="less" scoped>
  .user-header {
    background: linear-gradient(to right, #FF6D00, #FF5500); /* 标准的语法（必须放在最后） */
  }

  .user-header-img {
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 1rem;
  }

  .user-order {
    .iconfont {
      color: #FF6300;
      font-size: 2rem;
    }
  }

    .user-tools {
      .iconfont {
        color: #FF6300;
        font-size: 2rem;
      }
    }

  .user-header {
    .iconfont {
      color: #ffffff;
      font-size: 2rem;
    }
  }

</style>
