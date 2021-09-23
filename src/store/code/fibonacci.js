/**
 * Fibonacci 基本的数据知识，竟然忘记了，算法基础啊
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711...
 */
const count = Number(process.argv[2]);

const step = n => {
  if (n <= 2) {
    return n;
  }
  const dp = [1, 2];
  for (let i = 2; i < n; i ++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp);
  return dp[n - 1];
};

const num = step(count);
console.log('num: ', num);

const step1 = n => {
  const count = parseInt(n);
  if (isNaN(count) || count <= 0) {
    return 0;
  }
  const fn = count => {
    if (count < 2) {
      return 1;
    }
    return fn(count - 1) + fn(count - 2);
  };
  return fn(count);
};

const num1 = step1(count);
console.log('num1: ', num1);
