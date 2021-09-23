import * as types from './mutation-types';

interface State {
  count: number
}

type Count = {
  num: number;
};

export default {
  state: {
    count: 0
  },
  getters: {
    getCount: ({count}: State): number => {
      console.log('store getters: ', count);
      return count;
    }
  },
  actions: {
    // TODO 如何接机context定义any的问题，全局定义types?
    addCount(context: any, {num}: Count): void { // eslint-disable-line
      context.commit(types.ADD_COUNT, {
        num
      });
    },
    async plusCount(context: any, {num}: Count): Promise<void> { // eslint-disable-line
      await context.commit(types.ADD_COUNT, {
        num
      });
    },
    async quadrupleCount(context: any, {num}: Count): Promise<void> { // eslint-disable-line
      await context.dispatch('plusCount', {num});
    }
  },
  mutations: {
    [types.ADD_COUNT](state: State, {num}: Count): void {
      state.count = num + state.count;
    }
  }
};
