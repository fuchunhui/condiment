// import * as types from './mutation-types';
interface DateInfo {
  list: [];
  protocol: string;
  bundles: number;
}

export default {
  state: {
    list: [
      1618227517933,
      'Mon Apr 02 2021 12:39:34 GMT+0800',
      '2021, 01, 17',
      '2020-11-17 3:24:0'
    ],
    protocol: 'https',
    bundles: 100
  },
  getters: {
    getDateList: ({list}: DateInfo): Array<Date> => {
      const localList = list.map(item => new Date(item));
      return localList;
    },
    getBundles: ({protocol, bundles}: DateInfo): string => {
      return `${protocol}-${bundles}`;
    },
    getQuadruple: ({bundles}: DateInfo): (num: number) => number => (num: number): number => { // TODO 简化写法是什么，泛型吧
      return (bundles + num) * 4;
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getListLength: (state: any, getters: any): number => { // TODO 解决掉提示线
      return getters.getDateList.length;
    }
  },
  actions: {},
  mutations: {
    // [types.SET_DATE](state: State, {num}: Count): void {}
  }
};
