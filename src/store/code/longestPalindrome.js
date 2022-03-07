/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 示例1：
 * 输入：s = "babad"，输出："bab"，解释："aba" 同样是符合题意的答案。
 * 
 * 示例 2：
 * 输入：s = "cbbd"，输出："bb"
 * 
 * 提示：1 <= s.length <= 1000，s 仅由数字和英文字母组成
 * 
 * @param {string} s
 * @return {string}
 */

/**
 * 中心扩展算法
 */
const longestPalindrome = s => {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < len; i++) {
    const {left: l1, right: r1} = expandAroundCenter(s, i, i); // 从一个数出发，向两侧扩展
    const {left: l2, right: r2} = expandAroundCenter(s, i, i + 1); // 从相邻的两个数出发， 向两侧扩展

    const odd = r1 - l1;
    const even = r2 - l2;
    const max = Math.max(odd, even);

    if (max > end - start) {
      if (odd > even) {
        start = l1;
        end = r1;
      } else {
        start = l2;
        end = r2;
      }
    }
  }
  const result = s.substring(start, end + 1);
  console.log(result, start, end);
  return result;
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    --left;
    ++right;
  }
  return {
    left: left + 1,
    right: right - 1
  };
};

/**
 * 第一种解法，从最小开始寻找，由短到长
 * 动态规划算法
 */
const longestPalindrome2 = s => {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let max = 1;
  let begin = 0;

  const dp = {};
  for (let i = 0; i < len; i++) {
    dp[i] = {};
    dp[i][i] = true;
  }

  const charArray = s.split('');

  for (let subLen = 2; subLen <= len; subLen++) {
    for (let i = 0; i < len; i++) {
      const j = subLen + i - 1;
      if (j >= len) {
        break;
      }

      if (charArray[i] !== charArray[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > max) {
        max = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + max);
};

/**
 * 从最大开始寻找，最大到最小的过程
 */
const longestPalindrome1 = s => {
  const len = s.length;
  if (len === 1) {
    return s;
  }

  let result = '';
  let subLen = len;

  while (subLen > 1 && result.length < subLen) {
    const count = len - subLen;
    // console.log('\n');
    // console.log('原始串-->', s, count, subLen);
    for (let i = 0; i <= count; i++) {
      const sub = s.slice(i, i + subLen);
      // console.log('当前检测字符串为：', sub);
      const pla = isPalindrome(sub);
      if (pla) {
        result = sub;
        console.log('回文串为：', sub);
        return sub;
      }
    }
    subLen--;
  }
  
  return s.charAt(0);
};

const reverse = s => {
  return s.split('').reverse().join('');
};

/**
 * 
 * @param {string} s 字符串
 * @returns 是回文，返回 true。
 */
const isPalindrome = s => {
  const len = s.length;
  if (len === 1) {
    return true;
  }

  const odd = len % 2 === 1; // true 奇数
  const mid = Math.floor(len / 2);

  const left = s.slice(0, mid);
  const right = s.slice(odd ? mid + 1 : mid);

  // console.log('检测字符串和结果：', left, right, reverse(left) === right);

  return reverse(left) === right;
};

console.time();

longestPalindrome('babad');
longestPalindrome('babab');

// longestPalindrome('bababbaba'); // 10ms
const a = longestPalindrome('cccc'); // 10ms
console.log('result: ', a);

// longestPalindrome('cyyoacmjwjubfkzrrbvquqkwhsxvmytmjvbborrtoiyotobzjmohpadfrvmxuagbdczsjuekjrmcwyaovpiogspbslcppxojgbfxhtsxmecgqjfuvahzpgprscjwwutwoiksegfreortttdotgxbfkisyakejihfjnrdngkwjxeituomuhmeiesctywhryqtjimwjadhhymydlsmcpycfdzrjhstxddvoqprrjufvihjcsoseltpyuaywgiocfodtylluuikkqkbrdxgjhrqiselmwnpdzdmpsvbfimnoulayqgdiavdgeiilayrafxlgxxtoqskmtixhbyjikfmsmxwribfzeffccczwdwukubopsoxliagenzwkbiveiajfirzvngverrbcwqmryvckvhpiioccmaqoxgmbwenyeyhzhliusupmrgmrcvwmdnniipvztmtklihobbekkgeopgwipihadswbqhzyxqsdgekazdtnamwzbitwfwezhhqznipalmomanbyezapgpxtjhudlcsfqondoiojkqadacnhcgwkhaxmttfebqelkjfigglxjfqegxpcawhpihrxydprdgavxjygfhgpcylpvsfcizkfbqzdnmxdgsjcekvrhesykldgptbeasktkasyuevtxrcrxmiylrlclocldmiwhuizhuaiophykxskufgjbmcmzpogpmyerzovzhqusxzrjcwgsdpcienkizutedcwrmowwolekockvyukyvmeidhjvbkoortjbemevrsquwnjoaikhbkycvvcscyamffbjyvkqkyeavtlkxyrrnsmqohyyqxzgtjdavgwpsgpjhqzttukynonbnnkuqfxgaatpilrrxhcqhfyyextrvqzktcrtrsbimuokxqtsbfkrgoiznhiysfhzspkpvrhtewthpbafmzgchqpgfsuiddjkhnwchpleibavgmuivfiorpteflholmnxdwewj'); // 回文 xrcrx，default: 1.904s 计算时间太长

console.timeEnd();