/**
 * 节流，节省流量呗就是，规定时间内只执行一次，是先被触发的那个执行，后续的都忽略。
 * 
 * 使用场景：滚动条下、拉加载更多、多次点击，表单重复提交
 */
const throttle = (fn, delay) => {
  let timer = null;

  const inner = arg => {
    if (timer !== null) {
      return;
    }
    timer = setTimeout(() => {
      fn.call(this, arg);
      timer = null;
    }, delay);
  };
  return inner;
};

/**
 * 防抖，规定时间内，只让最后一次生效，前面的不生效
 * 
 * 使用场景：级联搜索、查询、短时间内重复多次触发、resize
 */
const debounce = (fn, delay) => {
  let timer = null;

  const inner = arg => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, arg);
    }, delay);
  };
  return inner;
};

const print = count => {
  console.log(count);
  console.log(new Date());
};

const search = debounce(print, 1000);
const click = throttle(print, 1000);

for (let i = 0; i < 10; i ++) {
  search(`debounce-${i}`);
  click(`throttle-${i}`);
}

setTimeout(() => {
  click(2000);
}, 2000);
