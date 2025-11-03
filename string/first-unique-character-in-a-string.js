// LeetCode: First Unique Character in a String
// 題目：給定一個字串 s ，找出其中第一個不重複的字元，並返回它的索引。如果不存在，則返回 -1。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charCount = new Map();

  // 第一次遍歷：計算每個字符的頻率
  for (const char of s) {
    // console.log('char: ', char)
    charCount.set(char, (charCount.get(char) || 0 )+ 1);
  }
  // console.log(charCount)

  // 第二次遍歷：找到第一個頻率為 1 的字符的索引
  for (const char of s) {
    if(charCount.get(char) === 1) return s.indexOf(char)
  }
  // 如果沒有唯一字符，返回 -1
  return -1;
};

// 測試案例
// console.log(firstUniqChar("leetcode")); // 0
// console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
