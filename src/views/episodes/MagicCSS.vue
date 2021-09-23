<template>
  <div class="magic-css">
    <div class="magic-wrap">
      <div class="magic-wrap-item first-item">
        <div class="hover-first-item"/>
      </div>
      <div class="magic-wrap-item second-item">
        <time datetime="2021-02-1" pubdate="">February 1st, 2021</time>
      </div>
      <div class="magic-wrap-item third-item">
        <div class="dashed-third-item-1"/>
        <div class="dashed-third-item-2"/>
      </div>
      <div class="magic-wrap-item forth-item">
        <div class="hover-forth-item"/>
      </div>
      <div class="magic-wrap-item fifth-item">
        <div class="hover-fifth-item"/>
      </div>
      <div class="magic-wrap-item">
        <div class="hover-sixth-item"/>
      </div>
      <div class="magic-wrap-item">
        <div class="hover-seventh-item"/>
      </div>
      <div class="magic-wrap-item">
        <div class="hover-eighth-item"/>
      </div>
      <div class="magic-wrap-item">
        <div class="hover-ninth-item"/>
      </div>
      <div class="magic-wrap-item tenth-item">
        <div class="hover-tenth-item">
          <span class="hover-tenth-item-text">tonight</span>
        </div>
      </div>
      <div class="magic-wrap-item checker-board-item"/>
      <div class="magic-wrap-item">
        <div class="dynamic-title">
          <p class="dynamic-title-content">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。
          </p>
          <p class="dynamic-title-content dynamic-title-back" title="北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。
          </p>
        </div>
        <div class="dynamic-title">
          <p class="dynamic-title-content">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色。
          </p>
          <p class="dynamic-title-content dynamic-title-back" title="北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色。">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色。
          </p>
        </div>
      </div>
      <div class="magic-wrap-item">
        <div class="dynamic-title">
          <p class="dynamic-title-content">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。
          </p>
          <p class="dynamic-title-content dynamic-title-back-before" title="北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。">
            北京的夏天，总是来的静悄悄，不知不觉中，就是满眼绿色，茂密的叶子把阳光分割成好多块，像极了筛子。
          </p>
        </div>
      </div>
      <div class="magic-wrap-item">
        something to do
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MagicCSS'
};
</script>

<style lang="less">
:root {
  --magicBorderColor: #03A9F3;
}
@borderColor: #03A9F3;
.magic-css {
  display: grid;
  grid-template-columns: 0.5fr minmax(10px, 4fr) 0.5fr;
  padding-top: 1rem;
}
.magic-wrap {
  grid-column: 2/3;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  &-item {
    position: relative;
    border: 1px solid rgba(34, 34, 34, 0.2);
    border-radius: 0.5rem;
    padding: 2rem;
    > div {
      width: 100%;
      height: 100%;
    }

    time::before {
      content: '🌟 ';
    }
  }
  .first-item {
    grid-column: 1/0;
  }
  .hover-first-item {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #03A9F3;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: .3s ease-in-out;
    }
    &::before {
      top: -10px;
      left: -10px;
      border-top: 1px solid @borderColor;
      // border-left: 1px solid @borderColor;
      border-left: 1px solid var(--magicBorderColor);
    }
    &::after {
      right: -10px;
      bottom: -10px;
      border-bottom: 1px solid @borderColor;
      border-right: 1px solid @borderColor;
    }
    
    &:hover::before,
    &:hover::after {
      width: calc(100% + 19px);
      height: calc(100% + 19px);
    }
  }
  .second-item {
    background-image: linear-gradient(45deg, rgb(55, 59, 68), rgb(66, 134, 244));
  }
  .third-item {
    display: grid;
    grid-gap: 8px;
    grid-auto-flow: column;
    grid-template-columns: repeat(autofit, 1fr);
    .dashed-third-item-1 {
      border: 1px dashed @borderColor;
    }
    .dashed-third-item-2 {
      background: 
        linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
        linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
        linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y,
        linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y;
      background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      cursor: pointer;
      &:hover {
        animation: linearGradientMove .3s infinite linear;
      }
    }
  }
  
  .forth-item {
    .hover-forth-item {
      border: 1px solid @borderColor;
      cursor: pointer;
      &:hover {
        border: none;
        background: 
          linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
          linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
          linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y,
          linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y;
        background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
        animation: linearGradientMove .3s infinite linear;
      }
    }
  }

  .fifth-item {
    .hover-fifth-item {
      outline: 1px solid @borderColor;
      outline-offset: -1px;
      cursor: pointer;
      &:hover {
        outline: 1px solid transparent;
        background: 
          linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
          linear-gradient(90deg, @borderColor 50%, transparent 0) repeat-x,
          linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y,
          linear-gradient(0deg, @borderColor 50%, transparent 0) repeat-y;
        background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
        animation: linearGradientMove .3s infinite linear;
      }
    }
  }

  .hover-sixth-item,
  .hover-seventh-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      left: -200%;
      top: -200%;
      width: 500%;
      height: 500%;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
      animation: rotate 4s linear infinite;
      z-index: -2;
    }
    &::after {
      content: '';
      position: absolute;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: white;
      border-radius: 5px;
      z-index: -1;
    }
  }
  .hover-seventh-item {
    &::before {
      background-image: linear-gradient(#399953, #399953);
    }
  }
  .hover-eighth-item {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid gold;
      animation: clippath 3s infinite linear;
    }
  }
  .hover-ninth-item {
    position: relative;
    background: #2b4855;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
      animation: rotate 4s linear infinite;
    }
  }
  .hover-tenth-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;

    &:hover {
      filter: contrast(1.1);
    }
    &:active {
      filter: contrast(0.9);
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px;
      border: 2px solid gold;
      border-radius: 10px;
      transition: all .5s;
      animation: clippath-over 3s infinite linear;
    }
    &::after {
      animation: clippath-over 3s infinite -1.5s linear;
    }
  }
  .checker-board-item {
    background-image: paint(checkerboard);
  }

  .dynamic-title {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
  }
  .dynamic-title-content {
    max-height: 48px;
    margin: 0;
  }
  .dynamic-title-back {
    background-color: #399953;
    position: relative;
    top: -48px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dynamic-title-back-before {
    background-color: #399953;
    position: relative;
    top: -48px;
  }
  .dynamic-title-back-before::before {
    content: attr(title);
    width: 50%;
    float: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: rtl;
  }
}

@keyframes linearGradientMove {
  100% {
    background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
  }
}
@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
}
@keyframes clippath-over {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }
  
  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}
</style>
