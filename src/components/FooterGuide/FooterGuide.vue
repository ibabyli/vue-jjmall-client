<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: '/news'===$route.path}" @click="goTo('/news')">
      <span class="item_icon">
        <i class="iconfont icon-zixun"></i>
      </span>
      <span>消息</span>
    </span>
    <span class="guide_item" :class="{on: '/shopCart'===$route.path}" @click="goTo('/shopCart')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>购物车</span>
    </span>
    
    <span class="guide_item" :class="{on: '/user'===$route.path}" @click="goTo('/user')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="less" scoped >
	.footer_guide {
		/*.top-border-1px(#e4e4e4); */
		position: fixed; /*生成绝对定位的元素，相对于浏览器窗口进行定位。*/
    z-index: 100;  /*让他别被挡住*/
    /*当你定义的CSS中有position属性值为absolute、relative或fixed，用z-index此取值方可生效。*此属性参数值越大，则被层叠在最上面。*/
    left: 0;
    right: 0;
    bottom: 0;
    /*在底部居中*/
    background-color: #fff; /*底部导航栏背景色*/
    width: 100%;
    /*height: 50px;*/
    display: flex;  /*把底部的导航栏变为一行显示*/
   	/*设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。*/
    .guide_item {
    	display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column; /*灵活的项目将垂直显示，正如一个列一样。*/
      align-items: center;
      margin: 5px;
      color: #999999;
      &.on {
      	color: #02a774;
      }
      span {
      	font-size: 12px;
        margin-top: 2px;
        margin-bottom: 2px;
        .iconfont {
        	font-size: 22px;
        }
      }
    }
	}
</style>
