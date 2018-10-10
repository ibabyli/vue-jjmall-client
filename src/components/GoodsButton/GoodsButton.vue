<template>
  <!--<div class="button-group">
    <button class="button-left" type="button">一</button>
    <input type="number" disabled="disabled" class="button-number" :value="count">
    <button class="button-right">十</button>
  </div>-->
  <div class="van-sku__stepper van-stepper">
    <button class="van-stepper__minus"></button>
    <input type="number" disabled="disabled" class="van-stepper__input" value="2">
    <button class="van-stepper__plus"></button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 3,
      }
    }
  }
</script>

<style scoped lang="less">
  .button-group {
    float: right;
    padding: 0;
    margin: 0;
    display: block;
  }
  // 左边和右边的button
  .button-left, .button-right {
    border-radius: 2px 0 0 2px;
    margin: 0;
    font-family: inherit; // 使用指定给父元素的所有值”。如果父元素中没有明确的值定义，浏览器搜寻DOM树直到找到相应的属性。最终无法找到的话，它会使用浏览器的默认值
    font-size: 0.8rem;
    color: inherit;
    width: 40px;
    height: 30px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #eee;
    position: relative;
    /*padding: 5px;*/
    vertical-align: middle;
  }
  // 显示的数量
  .button-number[disabled] {
    color: #c9c9c9;
    background-color: #f8f8f8;
    width: 33px;
    height: 26px;
    border: 1px solid #eee;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-box-sizing: content-box;
    color: #666;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    -webkit-appearance: none;
  }
</style>
