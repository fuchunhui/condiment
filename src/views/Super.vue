<template>
  <div class="super-demo">
    TypeScript {{ time }}
    <ul>
      <li class="background-1">
        123
      </li>
      <li class="background-2">
        456
      </li>
      <li class="background-3">
        789
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import basic from 'store/super/basic';
// import interfaces from 'store/super/interfaces';
// import functions from 'store/super/functions';
// import literal from 'store/super/literal';
// import intersections from 'store/super/intersections';
// import classes from 'store/super/classes';
// import enums from 'store/super/enums';
// import generics from 'store/super/generics';
// import decorator from 'store/super/decorator';
// import utility from 'store/super/utility';
// import modules from 'store/super/modules';
// import advance from 'store/super/advance';
// import cus from 'store/super/cus';
// import checkType from 'store/super/checkType';

export default {
  created() {
  // basic();
  // interfaces();
  // functions();
  // literal();
  // intersections();
  // classes();
  // enums();
  // generics();
  // decorator();
  // utility();
  // modules();
  // advance();
  // cus();
  // checkType();
  },
  setup() {
    const date = new Date();
    return {
      time: date.toString()
    };
  }
};
</script>

<style lang="less">
.super-demo {
  padding: 30px;
  @media (prefers-color-scheme: dark) {
    background: #E5EEEF;
  }

  .palette(@color: #4C84FF) {
    .loop(@counter) when (@counter > 0) {
      .loop((@counter - 1));    // next iteration
      data-name+: if(@counter > 2, hsv(90, 100%, 50%), #3333AA);
    }
    
    .loop(3);
    @result: $data-name;
  }
  ul {
    @background-color: .palette(#4C84FF)[@result];

    each(@background-color, {
      .background-@{index} {
        color: @value;
      }
    })
  }
}
</style>
