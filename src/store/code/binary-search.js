const search = (source, target) => {
  let start = 0;
  let end = source.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    const current = source[mid];
    if (current === target) {
      return mid;
    } else if (target > current) {
      start = mid++;
    } else {
      end = mid--;
    }
  }
  return -1;
};

const source = [1, 12, 14, 2, 22, 23, 25, 3, 34, 37, 38, 44, 50, 52, 53, 55, 60, 62];
console.log('source.sort(): ', source.sort());
const target = 25;
const result = search(source.sort(), target);
console.log(result);
