import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'css/base.less';
import 'css/main.less';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
