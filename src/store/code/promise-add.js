/**
 * 实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法
 * 
 * add 函数已实现，模拟异步请求后端返回一个相加后的值
 */

const add = async (a, b) => {
  return Promise.resolve(a + b);
};

const sum = async source => {
  let total = 0;
  for (let i = 0; i < source.length; i++) {
    total = await add(total, source[i]);
  }
  return total;
};

const source = [1, 2, 4, 3, 5, 8, 6, 7, 10, 9];
sum(source).then(res => console.log(res));
// sum1(source).then(res => console.log('sum1: ', res));

// https://juejin.cn/post/7091486488201805861
