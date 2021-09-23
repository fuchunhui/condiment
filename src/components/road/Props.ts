import {defineComponent, PropType} from 'vue';
interface Book {
  title: string;
  author: string;
  year: number;
}

const Component = defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    },
    success: {
      type: String,
      default: ''
    },
    callback: {
      type: Function as PropType<() => void>, // what 意思？
      default: () => {}
    },
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  }
});
console.log('components: ', Component);
