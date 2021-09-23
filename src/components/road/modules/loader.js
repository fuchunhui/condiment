/* eslint-disable */
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  import('./util').then(module => {
    module.funcA();
    module.default();
  });
});

const loadUtil = () => import('./util');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', async () => {
  const utilsModule = await loadUtil();
  utilsModule.funcA();
  utilsModule.default();
});
