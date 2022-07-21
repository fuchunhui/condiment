<template>
  <div class="finger-demo">
    <p>TypeScript {{ time }}</p>
    <div>
      <p>测试手机端如何屏蔽自带的菜单功能</p>
      <p>测试手机端如何屏蔽自带的菜单功能123</p>
      <p>测试手机端如何屏蔽自带的菜单功能456</p>
      <p>测试手机端如何屏蔽自带的菜单功能789</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const time = new Date().toString();

</script>

<style lang="less">
.finger-demo {
  padding: 30px;
  @media (prefers-color-scheme: dark) {
    background: #E5EEEF;
  }
}
</style>
