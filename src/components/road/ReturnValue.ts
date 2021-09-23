import {defineComponent, reactive, h} from 'vue';

interface Book {
  title: string;
  year?: number;
}

export default defineComponent({
  name: 'ReturnValue',
  setup() {
    const book = reactive<Book>({title: 'return value'});
    console.log('Book: ', book);

    return () => h('div', book.title);
  }
});
