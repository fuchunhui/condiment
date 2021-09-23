<template>
  <div>
    <button @click="decrement">
      -
    </button>
    {{ count }}
    <button @click="increment">
      +
    </button>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    return {
      count,
      increment,
      decrement
    };
  }
};
</script>
