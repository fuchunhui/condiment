<template>
  <div class="amazing-css">
    <section class="flow-root">
      <p>
        <img src="~assets/logo.png" alt="demo image">
      </p>
    </section>

    <section class="margin-outside">
      <div class="box1">
        <p>看看下面的</p>
      </div>
      <div class="box1 box2">
        <p>display: flow-root</p>
      </div>
    </section>

    <section class="auto-layout">
      <img src="~assets/logo.png" alt="demo image">
      <p>
        配合浮动属性，实现两栏自适应布局效果，你说的好用就算好用吧，怎么好像这个例子没有实际作用呢！
      </p>
    </section>
  </div>
</template>

<style lang="less">
.amazing-css {
  display: flex;
  .flow-root {
    width: 240px;
    height: 240px;
    p {
      display: flow-root;
      outline: 3px solid deepskyblue;
    }
    img {
      float: left;
    }
  }

  .margin-outside {
    width: 240px;
    height: 240px;
    padding: 10px;

    .box1 {
      background-color: gray;
      p {
        margin: 10px;
      }
    }
    .box2 {
      display: flow-root;
      border: 1px solid green; 
    }
  }

  .auto-layout {
    width: 500px;
    height: 240px;
    display: flow-root;
    background-color: aliceblue;
    border: 5px solid rebeccapurple;
    img {
      float: left;
      margin-right: 20px;
    }
    p {
      padding: 10px;
    }
  }
}
</style>
