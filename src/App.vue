<template>
  <div class="nav">
    <router-link to="acquisition" v-if="ready">
      acquisition
    </router-link> |
    <router-link to="analysis">
      analysis
    </router-link> |
    <router-link to="travel">
      travel
    </router-link> |
    <router-link to="/">
      Super Demo
    </router-link> |
    <router-link to="magic">
      Magic CSS
    </router-link>
  </div>
  <router-view class="month-content"/>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import Database from './db/index';

export default defineComponent({
  created() {
    Database.initDB().then(() => {
      this.ready = true;
    });
  },
  setup() {
    const ready = ref(false);
    return {
      ready
    };
  }
});
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  padding: 30px;
  font-size: 16px;
  background: rgba(17, 158, 183, 0.3);
  color: #2c3e50;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.month-content {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
