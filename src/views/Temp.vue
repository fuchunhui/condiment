<template>
  <div class="card">
    {{ text }}
  </div>
</template>

<script lang="ts">
import {computed, reactive, toRefs, ref, watchEffect, watch, onMounted} from 'vue';

export default {
  name: 'Card',

  props: {
    text: {
      type: [String, Number],
      required: false,
      default: 'card'
    }
  },

  setup() {
    const book = reactive({
      title: 'a new book',
      year: 2020,
      price: 'free'
    });

    console.log('reactive: ', book);
    const {price, title} = toRefs(book);
    title.value = '1';
    console.log(book.title, book);

    const count = ref(1);
    watch(
      count,
      (n, o) => {
        console.log('new old: ', n, o);
      }
    );
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1;
      }
    });
    console.log('computed: ', plusOne.value);
    plusOne.value ++;
    
    const stop = watchEffect(() => {
      console.log('watchEffect: ', count.value);
    });
    setTimeout(() => {
      count.value ++;
    }, 1000);
    setTimeout(() => {
      stop();
    }, 1000);
    setTimeout(() => { // no run.
      count.value ++;
    }, 1000);
    console.log('stop watchEffect: ', stop, stop instanceof Function);
    
    onMounted(() => {
      console.log('setup mounted.----------------------------------');
    });
    return {
      price,
      title
    };
  }
};
</script>

<style lang="less">
.card {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  &:hover {
    background-color: #f2f5ff;
    border-color: #4c84ff;
  }
  &:active {
    background-color: #4c84ff;
    border-color: #4c84ff;
    color: #ffffff;
  }
}
</style>