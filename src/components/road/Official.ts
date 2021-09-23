import {h, ref, reactive} from 'vue';

export default {
  props: {
    message: {
      type: String,
      default: '123'
    }
  },
  setup(props: any) { // eslint-disable-line
    const readersNumber = ref(0);
    const book = reactive({title: 'A New Guide'});
    return () => h('div', [readersNumber.value, book.title, props.message]);
  }
};
