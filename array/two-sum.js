/**
 * LeetCode 題目：Two Sum (兩數之和)
 *
 * 題目敘述：
 * 給定一個整數陣列 `nums` 和一個目標值 `target`，
 * 請你在該陣列中找出和為目標值 `target` 的那兩個整數，並返回它們的陣列下標。
 *
 * 你可以假設每種輸入只會對應一個答案。
 * 但是，陣列中同一個元素不能被重複利用。
 *
 * 範例 1:
 * 輸入: nums = [2,7,11,15], target = 9
 * 輸出: [0,1]
 * 解釋: 因為 nums[0] + nums[1] == 9, 所以我們返回 [0, 1]。
 *
 * 範例 2:
 * 輸入: nums = [3,2,4], target = 6
 * 輸出: [1,2]
 *
 * 範例 3:
 * 輸入: nums = [3,3], target = 6
 * 輸出: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // 1. 思考如何遍歷陣列中的每個數字。
  //    我們需要找到兩個數字，所以可能需要兩層迴圈，或者更有效率的方法。

  // 2. 如果使用兩層迴圈：
  //    外層迴圈遍歷第一個數字 `num1` 及其索引 `i`。
  //    內層迴圈遍歷第二個數字 `num2` 及其索引 `j`。
  //    注意：`j` 應該從 `i + 1` 開始，以避免重複使用同一個元素。

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // 3. 在迴圈內部，檢查 `num1 + num2` 是否等於 `target`。
  //    如果相等，則找到了答案，返回它們的索引 `[i, j]`。

  // 4. 思考更有效率的方法：使用哈希表 (Map 或 Object)。
  //    遍歷陣列一次。對於每個數字 `num` 及其索引 `i`：
  //    計算 `complement = target - num`。
  //    檢查哈希表中是否存在 `complement`。
  //    如果存在，表示我們找到了另一個數字，其索引儲存在哈希表中。
  //    此時，返回 `[哈希表中 complement 的索引, i]`。

  // 5. 如果 `complement` 不存在於哈希表中，
  //    則將當前數字 `num` 及其索引 `i` 存入哈希表，
  //    以便後續的數字可以查找它。
  //    思考哈希表的鍵和值應該是什麼。
};

// 測試案例
console.log("測試案例 1:");
console.log("輸入: nums = [2,7,11,15], target = 9, 預期輸出: [0,1]");
console.log("實際輸出:", twoSum([2, 7, 11, 15], 9)); // 預期輸出: [0,1]

console.log("\n測試案例 2:");
console.log("輸入: nums = [3,2,4], target = 6, 預期輸出: [1,2]");
console.log("實際輸出:", twoSum([3, 2, 4], 6)); // 預期輸出: [1,2]

console.log("\n測試案例 3:");
console.log("輸入: nums = [3,3], target = 6, 預期輸出: [0,1]");
console.log("實際輸出:", twoSum([3, 3], 6)); // 預期輸出: [0,1]

console.log("\n測試案例 4: 負數情況");
console.log("輸入: nums = [-1, -2, -3, -4, -5], target = -8, 預期輸出: [2,4]");
console.log("實際輸出:", twoSum([-1, -2, -3, -4, -5], -8)); // 預期輸出: [2,4]

console.log("\n測試案例 5: 零和正負數混合");
console.log("輸入: nums = [0, 4, 3, 0], target = 0, 預期輸出: [0,3]");
console.log("實際輸出:", twoSum([0, 4, 3, 0], 0)); // 預期輸出: [0,3]
