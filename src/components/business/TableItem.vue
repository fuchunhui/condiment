<template>
  <div class="table-item">
    <p class="table-item-short">
      {{ cardName }}
    </p>
    <p class="table-item-normal">
      {{ date }}
    </p>
    <p class="table-item-tiny">
      {{ type }}
    </p>
    <p class="table-item-short">
      {{ amount }}
    </p>
    <p class="table-item-long">
      {{ purpose }}
    </p>
    <p class="table-item-tiny">
      {{ app }}
    </p>
    <p class="table-item-short">
      {{ balance }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';

export default defineComponent({
  name: 'TableItem',

  props: {
    card: {
      type: String,
      default: '0000'
    },
    name: {
      type: String,
      default: 'bank',
      required: true
    },
    date: {
      type: String,
      default: '2021-06-21 11:18',
      required: true
    },
    type: {
      type: String,
      default: 'INCOME',
      required: true
    },
    purpose: {
      type: String,
      default: 'body building',
      required: true
    },
    app: {
      type: String,
      default: 'Keep',
      required: true
    },
    amount: {
      type: Number,
      default: 99,
      required: true
    },
    balance: {
      type: Number,
      default: 10000,
      required: true
    }
  },

  setup(props: any) {
    const {card, name} = toRefs(props);
    return {
      cardName: `${name.value}${card.value}`
    };
  }
});
</script>

<style lang="less">
@import (reference) url('assets/css/variable.less');

.table-item {
  display: flex;
  height: @line-height + 1;
  line-height: @line-height;
  border-bottom: 1px solid @line-color;

  &-tiny,
  &-short,
  &-normal,
  &-long {
    text-align: center;
  }

  &-tiny {
    width: 60px;
  }
  &-short {
    width: 96px;
  }
  &-normal {
    width: 120px;
  }
  &-long {
    flex: 1;
  }
  @media screen and (min-width: 1600px) {
    &-tiny {
      width: 80px;
    }
    &-short {
      width: 120px;
    }
    &-normal {
      width: 160px;
    }
  }
}
</style>
