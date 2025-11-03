/**
 * LeetCode 題目：Remove Duplicates from Sorted Array (從有序陣列中刪除重複項)
 *
 * 題目敘述：
 * 給定一個已排序的陣列 `nums`，請你原地刪除重複的元素，使每個元素只出現一次，
 * 並返回新的長度。
 *
 * 不要使用額外的陣列空間，你必須在原地修改輸入陣列並使用 O(1) 額外空間。
 *
 * 範例 1:
 * 輸入: nums = [1,1,2]
 * 輸出: 2, nums = [1,2,_]
 * 解釋: 函數應該返回新的長度 2，並且原陣列 nums 的前兩個元素被修改為 1, 2。
 *      你不需要考慮陣列中超出新長度後面的元素。
 *
 * 範例 2:
 * 輸入: nums = [0,0,1,1,1,2,2,3,3,4]
 * 輸出: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 解釋: 函數應該返回新的長度 5，並且原陣列 nums 的前五個元素被修改為 0, 1, 2, 3, 4。
 *      你不需要考慮陣列中超出新長度後面的元素。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  // 1. 處理邊界情況：如果陣列為空，則沒有重複項，長度為 0。
  if (nums.length === 0) {
    return 0;
  }

  // 2. 初始化「慢指針」`j`。
  //    `j` 指針將指向下一個要寫入的不重複元素的位置。
  //    由於第一個元素 `nums[0]` 總是唯一的（因為我們從第二個元素開始比較），
  //    所以 `j` 從 0 開始，表示 `nums[0]` 是第一個不重複的元素。
  let j = 0;

  // 3. 使用「快指針」`i` 遍歷整個陣列，從第二個元素開始 (索引 `i` 從 1 開始)。
  //    `i` 指針負責尋找新的不重複元素。
  for (let i = 1; i < nums.length; i++) {
    // 4. 比較 `nums[i]` (快指針指向的當前元素) 和 `nums[j]` (慢指針指向的最後一個不重複元素)。
    
    if (nums[j] !== nums[i]) {
      j += 1
      nums[j] = nums[i]
    }
    // 5. 如果它們不相等，表示 `nums[i]` 是一個新的不重複元素。
    //    首先，將慢指針 `j` 向前移動一位，為新元素騰出位置。
    //    然後，將 `nums[i]` 寫入 `nums[j]` 的位置。
      
    // 6. 如果 `nums[i]` 與 `nums[j]` 相等，表示 `nums[i]` 是重複元素。
    //    此時，我們不需要將 `nums[i]` 寫入 `nums[j+1]` 的位置，因為 `nums[j]` 已經是這個重複元素中的一個。
    //    我們只需讓快指針 `i` 繼續向前移動，跳過這個重複元素，尋找下一個不同的元素。
    //    慢指針 `j` 在這種情況下保持不動，因為它指向的元素已經是目前為止最後一個不重複的元素。
  }

  // 7. 迴圈結束後，`j` 指針的索引值就是新陣列中最後一個不重複元素的索引。
  //    因此，`j + 1` 就是新陣列的長度。
  return j + 1;
};

// 測試案例
// console.log("測試案例 1:");
// let nums1 = [1, 1, 2];
// let expectedLength1 = 2;
// let expectedNums1 = [1, 2];
// let actualLength1 = removeDuplicates(nums1);
// console.log("輸入: nums = [1,1,2], 預期長度:", expectedLength1, ", 預期陣列內容:", expectedNums1);
// console.log("實際長度:", actualLength1, ", 實際陣列內容:", nums1.slice(0, actualLength1)); // 預期輸出: 2, [1,2]

console.log("\n測試案例 2:");
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let expectedLength2 = 5;
let expectedNums2 = [0, 1, 2, 3, 4];
let actualLength2 = removeDuplicates(nums2);
console.log("輸入: nums = [0,0,1,1,1,2,2,3,3,4], 預期長度:", expectedLength2, ", 預期陣列內容:", expectedNums2);
console.log("實際長度:", actualLength2, ", 實際陣列內容:", nums2.slice(0, actualLength2)); // 預期輸出: 5, [0,1,2,3,4]

// console.log("\n測試案例 3: 空陣列");
// let nums3 = [];
// let expectedLength3 = 0;
// let expectedNums3 = [];
// let actualLength3 = removeDuplicates(nums3);
// console.log("輸入: nums = [], 預期長度:", expectedLength3, ", 預期陣列內容:", expectedNums3);
// console.log("實際長度:", actualLength3, ", 實際陣列內容:", nums3.slice(0, actualLength3)); // 預期輸出: 0, []

// console.log("\n測試案例 4: 單一元素陣列");
// let nums4 = [5];
// let expectedLength4 = 1;
// let expectedNums4 = [5];
// let actualLength4 = removeDuplicates(nums4);
// console.log("輸入: nums = [5], 預期長度:", expectedLength4, ", 預期陣列內容:", expectedNums4);
// console.log("實際長度:", actualLength4, ", 實際陣列內容:", nums4.slice(0, actualLength4)); // 預期輸出: 1, [5]

// console.log("\n測試案例 5: 所有元素都相同");
// let nums5 = [7, 7, 7, 7, 7];
// let expectedLength5 = 1;
// let expectedNums5 = [7];
// let actualLength5 = removeDuplicates(nums5);
// console.log("輸入: nums = [7,7,7,7,7], 預期長度:", expectedLength5, ", 預期陣列內容:", expectedNums5);
// console.log("實際長度:", actualLength5, ", 實際陣列內容:", nums5.slice(0, actualLength5)); // 預期輸出: 1, [7]
