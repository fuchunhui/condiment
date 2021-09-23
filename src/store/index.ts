import {createStore} from 'vuex';
import counter from './counter';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 1000
  },
  mutations: {},
  actions: {},
  modules: {
    counter
  }
});
