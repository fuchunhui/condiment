<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
    <test ref="test" msg="123456" @demo="showDemo"/>
    <counter/>
    <official message="123456"/>
    <return-value message="123456"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/road/HelloWorld.vue';
import Test from '@/components/road/Test';
import Counter from '@/components/road/Counter';
import Official from '@/components/road/Official.ts';
import ReturnValue from '@/components/road/ReturnValue.ts';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Test,
    Counter,
    Official,
    ReturnValue
  },

  methods: {
    showDemo(event) {
      console.log('showDemo: ', event);
    }
  },

  mounted() {
    console.log('test: ', this.$refs.test);
  }
};
</script>
