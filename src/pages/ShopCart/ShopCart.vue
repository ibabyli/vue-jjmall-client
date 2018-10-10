<template>
  <div class="container-fluid" style="overflow:scroll; ">
    <!--首页头部-->
    <HeaderTop title="我的购物车">
      <span name="right">管理</span>
    </HeaderTop>
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

<style scoped>

</style>
