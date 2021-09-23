// 题目：假设现在有一个数组，长度是99位，元素是1-100里的值，数组是无序的也是不重复的，怎么快速的去找到这个数组和1-100相比较缺失的那个元素？

// 随机生成数组，长度自定义。
// 找到缺失项
// 多种方法
const log = console.log;
const constantContent = (label = 'start', handler = () => {}) => {
  log(`---------------------------${label}---------------------------`);
  console.time(label);
  handler();
  console.timeEnd(label);
};

const createArr = (max = 100) => {
  const source = [];
  for (let i = 0; i < max; i++) {
    source.push(i + 1);
  }
  return source;
};

const createRandomArr = (length, max) => {
  const source = createArr(max);
  const target = [];
  let loopNum = max;
  while (loopNum > max - length) {
    const targetIndex = Math.floor(Math.random() * loopNum);
    const delArr = source.splice(targetIndex, 1);
    target.push(delArr[0]);
    loopNum--;
  }
  return target;
};

const MAX = 100;
let source = [];
let target = [];

constantContent('生成原始数组', () => {
  source = createArr(MAX);
  log(`生成长度为${MAX}的原始数组：`, source);
});

constantContent('生成随机数组', () => {
  target = createRandomArr(MAX - 1, MAX);
  log(`生成长度为${MAX}的随机数组为：`, target);
});

let sortTarget = [];
constantContent('排序', () => {
  sortTarget = [...target].sort((a, b) => a - b);
});

const findNumByTotal = (randomArr, length) => {
  let sum = 0;
  for (let i = 1; i <= length; i++) {
    sum = sum + i;
  }
  const total = randomArr.reduce((a, b) => a + b, 0);
  log('数组求和: ', sum, total);
  return sum - total;
};

constantContent('method 1，求和取差值即结果', () => {
  log(findNumByTotal(sortTarget, MAX));
  // log('有同学提到先计算求和，然后差值就是缺失那个。这个思路有意思，但是不能解决，有多个元素未放入数组中的场景');
});

const findNumByIndex = randomArr => {
  const missNum = randomArr.find((item, index) => {
    if (item !== index + 1) {
      return item;
    }
  });
  return missNum - 1;
};

constantContent('method 2，索引与value不想等', () => {
  log(findNumByIndex(target));
});
