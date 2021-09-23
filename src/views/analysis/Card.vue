<template>
  <div
    :class="{
      'card': true,
      'card-active': active
    }"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">

export default {
  name: 'Card',

  props: {
    text: {
      type: [String, Number],
      required: false,
      default: 'card'
    },
    active: {
      type: Boolean,
      default: false,
      required: false
    }
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
  &:active,
  &.card-active {
    background-color: #4c84ff;
    border-color: #4c84ff;
    color: #ffffff;
  }
}
</style>
