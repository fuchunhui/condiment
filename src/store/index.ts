import {createStore} from 'vuex';
import counter from './counter';
import date from './date';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 1000
  },
  mutations: {},
  actions: {},
  modules: {
    counter,
    date
  }
});
