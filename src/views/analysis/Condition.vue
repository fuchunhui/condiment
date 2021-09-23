<template>
  <div class="analysis-condition">
    <div class="condition-common condition-card">
      <card
        v-for="item in bankList"
        :key="item.value"
        :text="item.value"
        :active="item.value === info.card"
        @click="change(item.value, INFO_TYPE.CARD)"
      />
    </div>
    <div class="condition-common condition-month">
      <card
        v-for="item in monthList"
        :key="item.value"
        :text="item.label"
        :active="info.month.includes(item.value)"
        @click="change(item.value, INFO_TYPE.MONTH)"
      />
    </div>
    <div class="condition-common condition-year">
      <card
        v-for="item in yearList"
        :key="item.value"
        :text="item.label"
        :active="item.value === info.year"
        @click="change(item.value, INFO_TYPE.YEAR)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';
import Card from './Card.vue';
import {BANK, MONTH, YEAR} from 'config/index';

enum INFO_TYPE {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  CARD = 'CARD',
}

export default defineComponent({
  name: 'AnalysisCondition',

  components: {
    Card
  },

  props: {
    info: {
      type: Object,
      required: true,
      default: () => {
        return {
          year: 2020,
          month: [1],
          card: '0797'
        };
      }
    }
  },
  emits: ['update:info'],

  setup(props, {emit}) {
    const {info} = toRefs(props);
    const bankList = [BANK.num1, BANK.num2].map(item => {
      return {
        label: item,
        value: item
      };
    });
    const monthList = MONTH.map(item => {
      return {
        label: `${item}月`,
        value: item
      };
    });
    const yearList = YEAR.map(item => {
      return {
        label: item,
        value: item
      };
    });

    function change(value: string | number, key: string) {
      const localInfo = {
        year: info.value.year,
        month: info.value.month,
        card: info.value.card
      };
      if (key === INFO_TYPE.CARD) {
        localInfo.card = value;
      } else if (key === INFO_TYPE.YEAR) {
        localInfo.year = Number(value);
      } else {
        const monthValue = Number(value);
        if (localInfo.month.includes(monthValue)) {
          localInfo.month.splice(localInfo.month.indexOf(monthValue), 1);
        } else {
          localInfo.month.push(monthValue);
        }
      }
      emit('update:info', localInfo);
    }
    return {
      change,
      bankList,
      monthList,
      yearList,
      INFO_TYPE
    };
  },
  methods: {
    reset() {
      console.log('params reset');
    }
  }
});
</script>

<style lang="less">
.analysis-condition {
  height: 56px;
  margin-bottom: 10px;
  background: #F7F9FB;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  .condition-common {
    display: flex;
    padding: 10px;
  }
  .condition-month {
    .card {
      width: 48px;
    }
    .card + .card {
      margin-left: 5px;
    }
  }
  .condition-card,
  .condition-month,
  .condition-year {
    border-right: 1px dashed #eeeeee;
  }
}
</style>
