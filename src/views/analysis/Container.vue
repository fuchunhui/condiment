<template>
  <div class="analysis-Container">
    Container {{ current }}
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, computed} from 'vue';

export default defineComponent({
  name: 'AnalysisContainer',

  props: {
    year: {
      type: Number,
      default: 2020
    },
    month: {
      type: Array,
      default: () => []
    },
    card: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const {year, month, card} = toRefs(props);
    const current = computed(() => {
      return `${card.value}, ${year.value}, ${month.value.join('-')}`;
    });
    return {
      current
    };
  }
});
</script>

<style lang="less">
.analysis-Container {
  background: #11EEAA;
  min-height: 300px;
}
</style>
