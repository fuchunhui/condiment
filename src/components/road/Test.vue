<template>
  <div class="test-wrapper">
    test demo {{ msg }}
    <button @click="onClick">
      click
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hhh'
    }
  },
  emits: ['demo'],

  setup(props, {emit}) {
    const checkConsole = () => {
      emit('demo', 10);
    };
    const onClick = () => {
      console.log('test demo click!');
      checkConsole();
    };

    return {
      onClick
    };
  }
});
</script>

<style lang="less">
.test-wrapper {
    background: #336699
}
</style>
