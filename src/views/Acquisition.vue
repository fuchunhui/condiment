<template>
  <div class="acquisition">
    <div class="acquisition-record" v-if="showRecord">
      <textarea
        class="acquisition-area"
        placeholder="请输入你的数据"
        v-model="localSource"
      />
    </div>
    <div class="acquisition-content" v-else>
      <source-list
        class="acquisition-left"
        :source-list="sourceList"
        :error-list="errorList"
        @del="deleteItem"
        @update="updateItem"
      />
      <table-list
        class="acquisition-right"
        :source-list="tableList"
      />
    </div>
    <div class="acquisition-btn">
      <month-button :label="recordLabel" @click="record"/>
      <month-button label="分析" u="primary" :disabled="!parseEnabled" @click="parse"/>
      <month-button label="入库" u="primary" :disabled="!storeEnabled" @click="store"/>
      <month-button label="清空" u="grey" @click="reset"/>
    </div>
    <month-loading :show="loading"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import {MonthButton, MonthLoading} from 'components/month';
import {SourceList, TableList} from 'components/business';
import {SourceItemInfo, BankRecord, SourceInfo} from 'types/business';
import Parser from 'utils/parser';
import Database from 'db/index';
import UUID from 'utils/uuid';

interface SourceInfoList {
  value: SourceInfo[]
}

interface TableListInfo {
  value: BankRecord[]
}
interface ErrorList {
  value: string[]
}

export default defineComponent({
  name: 'Acquisition',

  components: {
    MonthButton,
    MonthLoading,
    SourceList,
    TableList
  },

  setup() {
    const showRecord = ref(true);
    const localSource = ref('');
    const sourceList: SourceInfoList = ref([]);
    const tableList: TableListInfo = ref([]);
    const errorList: ErrorList = ref([]);

    const recordLabel = computed(() => {
      return showRecord.value ? '录入' : '继续录入';
    });
    const parseEnabled = computed(() => {
      return !showRecord.value;
    });
    const noError = computed(() => {
      return !errorList.value.length;
    });
    const storeEnabled = computed(() => {
      return parseEnabled.value && noError.value;
    });
    const loading = ref(false);

    const record = () => {
      if (showRecord.value) {
        if (localSource.value === '') {
          return;
        }
        const list = localSource.value.trim().split('\n').filter(item => item !== '');
        const idList: SourceInfo[] = list.map(item => {
          return {
            id: UUID('month-'),
            value: item
          };
        });
        sourceList.value = sourceList.value.concat(idList);
        localSource.value = '';
      }
      showRecord.value = !showRecord.value;
    };
    const parse = () => {
      if (!parseEnabled.value) {
        return;
      }
      errorList.value = [];
      const data = Parser.parserArr(sourceList.value);
      data.forEach(({id, message}) => {
        if (message) {
          errorList.value.push(id);
        }
      });

      if (!errorList.value.length) {
        tableList.value = data as BankRecord[];
      }
    };
    const store = () => {
      if (!storeEnabled.value) {
        return;
      }
      // loading.value = true;
      // setTimeout(() => {
      //   loading.value = false;
      // }, 1000);
      console.log('store to data1base.');

      // Database.initial();
      console.log(Database.ready());
      // console.log(Database.initial());
      console.log('queryAllTables： ', Database.queryAllTables());
      console.log('has: ', Database.hasTable('employees'));

      // 初始化数据库
      // 后续再次点击，需要判断，是否已经初始化数据库。
      // 默认连接本地数据库，github忽略掉真正使用的数据库。
      // 数据库存储操作
      // 去重校验，check内容，返回检查结果，如果有给出id内容，添加到errorList
      // 左侧内容，自动标识出，在清空之前，不允许入库。
    };
    const reset = () => {
      localSource.value = '';
      showRecord.value = true;
      sourceList.value = [];
      tableList.value = [];
      errorList.value = [];
      loading.value = false;
    };
    const deleteItem = (index: number) => {
      const delList = sourceList.value.splice(index, 1);
      if (noError.value) {
        tableList.value.splice(index, 1);
      } else if (errorList.value.includes(delList[0].id)) {
        const errIndex = errorList.value.findIndex(item => item === delList[0].id);
        errorList.value.splice(errIndex, 1);
      }
      if (sourceList.value.length === 0) {
        showRecord.value = true;
      }
    };

    const updateItem = ({value, order}: SourceItemInfo) => {
      sourceList.value[order].value = value;
    };

    return {
      showRecord,
      recordLabel,
      localSource,
      parseEnabled,
      storeEnabled,
      sourceList,
      errorList,
      tableList,
      loading,
      record,
      store,
      parse,
      reset,
      deleteItem,
      updateItem
    };
  }
});
</script>

<style lang="less">
@import url('css/mixins.less');

.acquisition {
  display: flex;
  flex-direction: column;
  padding: 10px;
  &-record,
  &-content {
    flex: 1;
    min-height: 120px;
    background-color: rgb(239, 245, 231);
  }
  &-record {
    border-radius: 20px;
  }
  &-area {
    width: 100%;
    height: 100%;
    resize: none;
    position: relative;
    &::placeholder {
      .position-center();
    }
  }
  &-content {
    display: flex;
    height: 100%;
    overflow: scroll;
  }
  &-left,
  &-right {
    width: 50%;
    height: 100%;
  }
  &-btn {
    .flex-center();
    height: 64px;
    .month-button {
      margin-right: 20px;
    }
    .month-button:last-child {
      margin-right: 0;
    }
  }
}
</style>
