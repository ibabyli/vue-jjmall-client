<template>
  <!--使用Bootstrap如果不使用面板的话，要把元素放进一个占满100%屏幕的容器里-->
  <!--class="container"则自动居中-->
  <div class="container-fluid" style="overflow:scroll; height: 70rem">
    <!--首页头部-->
    <HeaderTop title="babyli">
      <div class="header_login" slot="right">
        <!--<router-link to="/user/userSetting" replace>
          <span class="header_login_text">
           <span>设置</span>
        </span>
        </router-link>-->
        <span class="header_login_text">
           <span @click="goToUserSetting()">设置</span>
          <!--<router-view></router-view>-->
           <!--<span @click="$router.push('/user/UserSetting')">设置</span>-->
        </span>
      </div>
    </HeaderTop>

    <div class="user-header">
      <div class="row">
        <div class="col-2">
          <img src="./img/header_img.jpg" class="user-header-img" @click="goToUserInfo()"/>
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
    <hr/>
    <div class="user-bank-card">
      <div class="row">
        <div class="col-10">
          <i class="iconfont icon-yinhangqia" style="color: #92D6ED;"></i>
          我的银行卡
        </div>
        <div class="col-2">
          <i class="iconfont icon-yanjing1" style="font-size: 2rem"></i>
        </div>
      </div>
      <div class="row user-bank-card-money">
        <div class="col-6">173.98元</div>
        <div class="col-6">675.88元</div>
      </div>
      <div class="row user-bank-card-font-1">
        <div class="col-6">本月淘宝消费</div>
        <div class="col-6">用花呗笔笔挖金</div>
      </div>
      <div class="row user-bank-card-font-2">
        <div class="col-6">花了多少一目了然</div>
        <div class="col-6">去看看</div>
      </div>
      <br/>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-info">查看更多服务</button>
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
  import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
  export default {
    data() {
      return {
      }
    },
    methods: {
      // 跳转到用户信息
      goToUserInfo() {
        this.$router.push('/user/userInfo')
      },
      // 跳转到用户设置
      goToUserSetting() {
        this.$router.push('/user/userSetting')
      },
    },
    components: {
      HeaderTop,
    }
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
      font-size: 1.5rem;
    }
  }

  .user-bank-card-money {
    color: #1D79BC;
    font-size: 2rem;
  }

  .user-bank-card-font-1 {
    color: #000000;
    font-size: 1.2rem;
  }

  .user-bank-card-font-2 {
    color: #999999;
    font-size: 1rem;
  }

</style>
