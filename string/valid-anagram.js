// LeetCode: Valid Anagram
// 題目：給定兩個字串 s 和 t，判斷 t 是否是 s 的異位詞。
// 異位詞的定義是：如果 t 是 s 的異位詞，則 t 包含 s 的所有字元，且每個字元的數量都相同。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // 步驟 1: 首先，檢查兩個字串的長度是否相同。
  // 如果長度不同，它們不可能互為異位詞，直接返回 false。

  // 步驟 2: 創建一個 Map 或物件來儲存字串 s 中每個字符的頻率。
  // 遍歷字串 s，對於每個字符，增加其在 Map 中的計數。

  // 步驟 3: 遍歷字串 t。對於字串 t 中的每個字符：
  //   a. 檢查該字符是否存在於 Map 中。如果不存在，或者其計數已經為 0，則表示 t 包含了 s 中沒有的字符，或者字符數量不匹配，返回 false。
  //   b. 如果字符存在且計數大於 0，則減少其在 Map 中的計數。

  // 步驟 4: 如果成功遍歷完字串 t，且沒有返回 false，則表示 t 是 s 的異位詞。
  // 返回 true。
};

// 測試案例
// console.log(isAnagram("anagram", "nagaram")); // 預期輸出: true
// console.log(isAnagram("rat", "car"));     // 預期輸出: false
// console.log(isAnagram("listen", "silent")); // 預期輸出: true
// console.log(isAnagram("hello", "world")); // 預期輸出: false
