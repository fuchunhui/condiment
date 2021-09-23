<template>
  <div class="analysis">
    <condition v-model:info="info"/>
    <container v-bind="info"/>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import Condition from './analysis/Condition.vue';
import Container from './analysis/Container.vue';
import {BANK} from '@/config/index';

export default {
  name: 'Analysis',

  components: {
    Condition,
    Container
  },

  data() {
    return {};
  },

  setup() {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const card: string = BANK.num1;
    const current = ref({
      year,
      month: [month],
      card
    });
    return {
      info: current
    };
  }
};
</script>

<style lang="less">
.analysis {
  background: #446688;
  padding: 10px;
}
</style>
