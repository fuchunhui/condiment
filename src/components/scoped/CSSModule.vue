<template>
  <div :class="$style.red">
    CSSSSSS
    <p :class="classes.blue">
      {{ className }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {useCssModule, ref} from 'vue';

const className = ref('');
const css = useCssModule('classes');
className.value = css.blue;

const color = ref('#ff0000');

setTimeout(() => {
  color.value = 'rgba(123, 123, 123, 0.8)';
}, 2000);

</script>

<style lang="less" module>
.red {
  color: red;
}
</style>

<style module="classes">
.blue {
  width: 200px;
  height: 20px;
  line-height: 20px;
  background-color: blue;
  color: v-bind('color');
}
</style>