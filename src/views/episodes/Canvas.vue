<script setup lang="ts">
import {ref, onMounted} from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvas = document.createElement('canvas');

const makeCanvas = () => {
  canvas = canvasRef.value as HTMLCanvasElement;

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
  ctx.font = '16px serif';
  ctx.strokeStyle = 'red';

  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineTo(1420, 100);
  ctx.moveTo(0, 60);
  ctx.lineTo(1420, 60);
  ctx.stroke();

  baselines.forEach((baseline, index) => {
    ctx.save();
    ctx.textBaseline = baseline as CanvasRenderingContext2D['textBaseline'];
    let x = index * 140;
    ctx.fillText('Abcdefghijklmnop', x, 100);
    ctx.restore();
    ctx.fillText(baseline, x + 30, 50);
  });
};

onMounted(() => {
  makeCanvas();
});
</script>

<template>
  <section class="base-canvas">
    <canvas
      ref="canvasRef"
      class="canvas"
      width="1420"
      height="600"
    />
  </section>
</template>

<style lang="less">
.base-canvas {
  .canvas {
    padding: 10px;
  }
}
</style>