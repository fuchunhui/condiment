<template>
  <div class="travel" v-bind="$attrs">
    <home/>
    <about/>
    <div class="count-group" @click="add">
      {{ `${text}: ${count}` }}
    </div>
    <div class="store-group" @click="storeAdd">
      {{ `${storeText}: ${storeCount}, ${storeCountCC}` }}
    </div>
    <div class="store-group" @click="doubleAdd">
      {{ book }}
    </div>
  </div>
  <div class="travel">
    {{ `Normal Store.${dateProtocol}` }}
  </div>
</template>

<script lang="ts">
import Home from '@/components/road/Home.vue';
import About from '@/components/road/About.vue';
import {ref, defineComponent, PropType, computed} from 'vue';
import {useStore, mapState} from 'vuex';

interface Book {
  title: string;
  author: string;
  year: number;
  capacity?: number;
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hh'
    },
    notise: {
      type: String,
      default: ''
    },
    callback: {
      type: Function as PropType<() => void>,
      default: () => {}
    },
    car: {
      type: Object as PropType<Book>,
      default: () => {
        return {
          title: 'two-month',
          author: 'me',
          year: 2020
        };
      }
    },
    bike: {
      type: Object as PropType<Book>,
      default: () => ({
        title: 'Arrow Function Expression'
      }),
      validator: (book: Book) => !!book.title
    },
    truck: {
      type: Object as PropType<Book>,
      default(this: void) {
        return {
          title: 'Function Expression'
        };
      },
      validator(this: void, book: Book) {
        return !!book.title;
      }
    }
  },
  components: {
    Home,
    About
  },
  emits: {
    addbook(payload: {bookName: string}) {
      return payload.bookName.length > 0;
    },
    'non-declared-event': null
  },
  data() {
    return {
      dataCount: 100,
      book: {
        title: 'condiment',
        author: 'me',
        year: 2020
      } as Book
    };
  },  
  setup(props: any) { // eslint-disable-line
    const text = '点我，来吧';
    const storeText = '帮我挠挠，点我';
    const count = ref(0);
    const store = useStore();
    console.log('store-------------->', {...store}, store.state.count);
    const storeCountCC = computed(() => store.getters.getCount);
    const add: () => void = () => {
      count.value++;
      console.log('add message: ', props.msg);
    };
    const storeAdd = () => {
      store.dispatch('addCount', {num: 10});
    };
    const doubleAdd = () => {
      store.dispatch('quadrupleCount', {num: 10});
    };
    store.subscribe(mutation => {
      console.log(mutation.type, mutation.payload);
    });
    return {
      text,
      count,
      add,
      storeCountCC,
      storeText,
      storeAdd,
      doubleAdd
    };
  },
  computed: {
    storeCount(): number {
      return this.$store.getters.getCount + this.$store.state.count;
    },
    greeting(): string {
      return this.book.title + '!';
    },
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase();
      },
      set(newValue: string) {
        this.book.title = newValue.toUpperCase();
      }
    },
    dateProtocol(): string {
      // return this.$store.state.date.protocol; // 怎么解决这种红线的问题
      return 'https';
    },
    ...mapState({
      protocolAlias: (state: any) => state.date.protocol,
      countPlusLocalState(state: any) {
        return state.date.bundles + this.count;
      }
    }),
    ...mapState([
      'date'
    ])
  },
  methods: {
    onSubmit() {
      this.$emit('addbook', {
        bookName: 'options api'
      });
      this.$emit('non-declared-event');
    }
  },
  mounted() {
    const result = this.dataCount;
    console.log('result: ', result, this.greeting, this.greetingUppercased);
  }
});
</script>

<style lang="less">
.travel {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .count-group {
    p {
      background: #339966;
      cursor: pointer;
    }
  }
}
</style>
