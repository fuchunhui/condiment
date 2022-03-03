/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log(m+n)) 。
 * 
 * 示例 1：
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 示例 2：
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4]，中位数 (2 + 3) / 2 = 2.5
 * 
 * 提示：
 * nums1.length == m，nums2.length == n
 * 0 <= m <= 1000，0 <= n <= 1000，1 <= m + n <= 2000
 * -106 <= nums1[i], nums2[i] <= 106
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 二分法计算，换算成，找到数组中第 k 小的元素
 * 
 * 时间复杂度：O(log(m+n))
 * 空间复杂度：O(1)
 */
const findMedianSortedArrays =(nums1, nums2) => {
  const l = nums1.length + nums2.length;
  const middle = Math.floor(l / 2);
  let mid = 0;
  if (l % 2 === 1) { // odd
    mid = getKthElement(nums1, nums2, middle + 1);
  } else {
    const pre = getKthElement(nums1, nums2, middle);
    const next = getKthElement(nums1, nums2, middle + 1);
    mid = (pre + next) / 2;
  }
  return mid;
};

const getKthElement = (nums1, nums2, k) => {
  const lm = nums1.length;
  const ln = nums2.length;
  let m = 0;
  let n = 0;

  while (true) { // eslint-disable-line
    // 边界监测
    if (m === lm) {
      return nums2[n + k - 1];
    }
    if (n === ln) {
      return nums1[m + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[m], nums2[n]);
    }
    
    const half = Math.floor(k / 2);
    const newm = Math.min(m + half, lm) - 1;
    const newn = Math.min(n + half, ln) - 1;
    const mv = nums1[newm];
    const nv = nums2[newn];

    if (mv <= nv) {
      k = k - (newm - m + 1);
      m = newm + 1;
    } else {
      k = k - (newn - n + 1);
      n = newn + 1;
    }
  }
};

const findMedianSortedArrays4 =(nums1, nums2) => {
  const lm = nums1.length;
  const ln = nums2.length;
  // 对长度短的数组进行二分查找    
  if (lm > ln) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let len = lm + ln;
  let start = 0;
  let end = lm;
  // 两个数组左分段的长度    
  let partm = 0;
  let partn = 0;

  while (start <= end) {
    partm = (start + end) >> 1;
    partn = ((len + 1) >> 1) - partm;

    let l1 = partm === 0 ? -Infinity : nums1[partm - 1];
    let l2 = partn === 0 ? -Infinity : nums2[partn - 1];
    let r1 = partm === lm ? Infinity : nums1[partm];
    let r2 = partn === ln ? Infinity : nums2[partn];

    if (l1 > r2) {
      end = partm - 1;
    } else if (l2 > r1) {
      start = partm + 1;
    } else { // 满足条件的情况： l1 <= r2 && l2 <= r1
      return len % 2 === 0
        ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2
        : Math.max(l1, l2);
    }
  }
};

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([3], [-2, -1]));
// console.log(findMedianSortedArrays([1, 2], [3, 4]));
// console.log(findMedianSortedArrays([1, 2, 3, 4], [3, 4, 5]));

/**
 * 简单的数组循环，最基本的做法。
 */
const findMedianSortedArrays1 =(nums1, nums2) => {
  const nums = [].concat(nums1, nums2);
  nums.sort((a, b) => a - b);
  console.log(nums);
  const length = nums.length;
  const odd_even = length % 2 === 0; // true 偶数
  const middle = Math.floor(length / 2);
  let mid = 0;
  if (odd_even) {
    mid = (nums[middle] + nums[middle - 1]) / 2;
  } else {
    mid = nums[middle];
  }
  return mid;
};

const findMedianSortedArrays2 =(nums1, nums2) => {
  const l = nums1.length + nums2.length;
  const middle = Math.floor(l / 2); // 中间值，是索引。

  let m = 0; // m, n 都是索引
  let n = 0;
  const result = [];

  while (result.length - 1 < middle) {
    const mv = nums1[m];
    const nv = nums2[n];

    if (mv > nv || m === nums1.length) {
      result.push(nv);
      n++;
      continue;
    }
    if (mv <= nv || n === nums2.length) {
      result.push(mv);
      m++;
      continue;
    }
  }

  console.log(result);
  let mid = result.pop();
  if (l % 2 === 0) {
    mid = (mid + result.pop()) / 2;
  }
  
  console.log('result: ', mid);
  return mid;
};

/**
 * 速度确实是最快的，内存占用也比较小，就是不符合时间复杂度的要求
 * @returns 
 */
const findMedianSortedArrays3 =(nums1, nums2) => {
  const l = nums1.length + nums2.length;
  const middle = Math.floor(l / 2); // 中间值，是索引。

  let m = 0; // m, n 都是索引
  let n = 0;
  const node = {
    pre: null,
    next: null
  };

  while (m + n - 1 < middle) {
    const mv = nums1[m];
    const nv = nums2[n];

    node.pre = node.next;
    if (mv > nv || m === nums1.length) {
      node.next = nv;
      n++;
      continue;
    }
    if (mv <= nv || n === nums2.length) {
      node.next = mv;
      m++;
      continue;
    }
  }

  console.log(node);
  let mid = node.next;
  if (l % 2 === 0) {
    mid = (mid + node.pre) / 2;
  }
  
  console.log('result: ', mid);
  return mid;
};
