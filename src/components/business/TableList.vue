<template>
  <div class="table-list">
    <template 
      v-for="(item, index) in sourceList"
      :key="index"
    >
      <table-item v-bind="item"/>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TableItem from './TableItem.vue';

export default defineComponent({
  name: 'TableList',

  components: {
    TableItem
  },

  props: {
    sourceList: {
      type: Array,
      default: () => []
    }
  }
});
</script>
