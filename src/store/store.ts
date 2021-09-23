import {InjectionKey} from 'vue';
import {createStore, Store, useStore as baseUseStore} from 'vuex';

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 1024
  }
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
