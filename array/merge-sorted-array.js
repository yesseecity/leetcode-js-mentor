/**
 * 88. Merge Sorted Array
 * 題目：合併排序陣列
 * 難度：簡單
 * 連結：https://leetcode.com/problems/merge-sorted-array/
 *
 * 描述：
 * 給定兩個已排序的整數陣列 `nums1` 和 `nums2`，以及兩個整數 `m` 和 `n`，
 * 分別代表 `nums1` 和 `nums2` 中的元素數量。
 * 將 `nums2` 合併到 `nums1` 中，使 `nums1` 成為一個已排序的陣列。
 *
 * 注意：
 * - 最終排序後的陣列不應該由函數返回，而是 **儲存在陣列 `nums1` 內部**。
 * - 為了適應這一點，`nums1` 的長度為 `m + n`，
 *   其中前 `m` 個元素表示應該合併的元素，後 `n` 個元素設為 `0` 且應該被忽略。
 * - `nums2` 的長度為 `n`。
 *
 * 範例 1：
 * 輸入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 輸出：[1,2,2,3,5,6]
 * 解釋：我們要合併 [1,2,3] 和 [2,5,6]。
 *       合併結果為 [1,2,2,3,5,6]，其中底線元素來自 nums1。
 *
 * 範例 2：
 * 輸入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 輸出：[1]
 * 解釋：我們要合併 [1] 和 []。
 *       合併結果為 [1]。
 *
 * 範例 3：
 * 輸入：nums1 = [0], m = 0, nums2 = [1], n = 1
 * 輸出：[1]
 * 解釋：我們要合併 [] 和 [1]。
 *       合併結果為 [1]。
 *       注意，因為 m = 0，所以 nums1 中沒有元素。0 只是為了確保合併結果可以放入 nums1。
 *
 * 限制：
 * - `nums1.length == m + n`
 * - `nums2.length == n`
 * - `0 <= m, n <= 200`
 * - `1 <= m + n <= 200`
 * - `-10^9 <= nums1[i], nums2[j] <= 10^9`
 *
 * 進階：你能設計一個時間複雜度為 O(m + n) 的演算法嗎？
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 步驟 1：創建三個指針
  // - `p1`：指向 nums1 中有效元素的最後一個位置（索引 m - 1）
  // - `p2`：指向 nums2 的最後一個元素（索引 n - 1）
  // - `p`：指向 nums1 陣列的最後一個位置（索引 m + n - 1），這是我們要填入元素的位置

  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  // 步驟 2：使用反向雙指針技巧，從後往前填充 nums1
  // 為什麼從後往前？因為 nums1 的後面有預留空間，從後往前可以避免覆蓋還沒處理的元素

  // 步驟 3：使用 while 迴圈，條件是 `p1 >= 0` 且 `p2 >= 0`
  // 在迴圈內部：
  //   a. 比較 `nums1[p1]` 和 `nums2[p2]`
  //   b. 如果 `nums1[p1]` 較大，則將 `nums1[p1]` 放到 `nums1[p]` 的位置
  //      然後將 `p1` 向前移動（p1--）
  //   c. 否則，將 `nums2[p2]` 放到 `nums1[p]` 的位置
  //      然後將 `p2` 向前移動（p2--）
  //   d. 無論哪種情況，都要將 `p` 向前移動（p--），準備填入下一個元素


  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // 步驟 4：當迴圈結束時，可能有以下情況：
  //   - 如果 `p1 < 0`，表示 nums1 的元素都已經處理完，但 nums2 可能還有剩餘元素
  //   - 如果 `p2 < 0`，表示 nums2 的元素都已經處理完，nums1 剩餘的元素已經在正確位置上

  // 步驟 5：處理 nums2 的剩餘元素（如果有的話）
  // 使用 while 迴圈，條件是 `p2 >= 0`
  // 將 `nums2[p2]` 複製到 `nums1[p]`，然後 `p2--` 和 `p--`
  // 注意：如果 nums1 還有剩餘元素，它們已經在正確的位置上，不需要移動

  while(p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
};

console.log("--- 測試案例 ---");

// 範例 1
let nums1_1 = [1, 2, 3, 0, 0, 0];
let m1 = 3;
let nums2_1 = [2, 5, 6];
let n1 = 3;
merge(nums1_1, m1, nums2_1, n1);
console.log("範例 1 輸入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3");
console.log("範例 1 輸出：", nums1_1); // 預期：[1,2,2,3,5,6]

// 範例 2
let nums1_2 = [1];
let m2 = 1;
let nums2_2 = [];
let n2 = 0;
merge(nums1_2, m2, nums2_2, n2);
console.log("範例 2 輸入：nums1 = [1], m = 1, nums2 = [], n = 0");
console.log("範例 2 輸出：", nums1_2); // 預期：[1]

// 範例 3
let nums1_3 = [0];
let m3 = 0;
let nums2_3 = [1];
let n3 = 1;
merge(nums1_3, m3, nums2_3, n3);
console.log("範例 3 輸入：nums1 = [0], m = 0, nums2 = [1], n = 1");
console.log("範例 3 輸出：", nums1_3); // 預期：[1]

// 額外測試案例：nums1 所有元素都比 nums2 大
let nums1_4 = [4, 5, 6, 0, 0, 0];
let m4 = 3;
let nums2_4 = [1, 2, 3];
let n4 = 3;
merge(nums1_4, m4, nums2_4, n4);
console.log("額外案例 1 輸入：nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3");
console.log("額外案例 1 輸出：", nums1_4); // 預期：[1,2,3,4,5,6]

// 額外測試案例：nums2 所有元素都比 nums1 大
let nums1_5 = [1, 2, 3, 0, 0, 0];
let m5 = 3;
let nums2_5 = [4, 5, 6];
let n5 = 3;
merge(nums1_5, m5, nums2_5, n5);
console.log("額外案例 2 輸入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [4,5,6], n = 3");
console.log("額外案例 2 輸出：", nums1_5); // 預期：[1,2,3,4,5,6]

// // 額外測試案例：交錯的情況
// let nums1_6 = [1, 3, 5, 0, 0, 0];
// let m6 = 3;
// let nums2_6 = [2, 4, 6];
// let n6 = 3;
// merge(nums1_6, m6, nums2_6, n6);
// console.log("額外案例 3 輸入：nums1 = [1,3,5,0,0,0], m = 3, nums2 = [2,4,6], n = 3");
// console.log("額外案例 3 輸出：", nums1_6); // 預期：[1,2,3,4,5,6]
