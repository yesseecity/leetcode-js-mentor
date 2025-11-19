/**
 * 21. Merge Two Sorted Lists
 * 題目：合併兩個排序好的鏈結串列
 * 難度：簡單
 * 連結：https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * 描述：
 * 給定兩個已排序的鏈結串列 `list1` 和 `list2` 的頭節點。
 * 將這兩個串列合併成一個 **已排序** 的串列。
 * 這個串列應該是透過將前兩個串列的節點拼接在一起而形成的。
 * 返回 **合併後鏈結串列的頭節點**。
 *
 * 範例 1：
 * 輸入：list1 = [1,2,4], list2 = [1,3,4]
 * 輸出：[1,1,2,3,4,4]
 *
 * 範例 2：
 * 輸入：list1 = [], list2 = []
 * 輸出：[]
 *
 * 範例 3：
 * 輸入：list1 = [], list2 = [0]
 * 輸出：[0]
 *
 * 限制：
 * - 兩個串列中的節點數量都在 `[0, 50]` 範圍內。
 * - `-100 <= Node.val <= 100`
 * - `list1` 和 `list2` 都以 **非遞減** 順序排序。
 */

/**
 * 定義單向鏈結串列的節點。
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 步驟 1：創建一個虛擬頭節點 (dummy node)。
  // 這樣做可以簡化邊界條件的處理，特別是當合併後的串列為空或需要返回頭節點時。
  // 虛擬頭節點的 `next` 將指向合併後串列的實際頭節點。

  // 步驟 2：創建一個指針 `current`，初始時指向虛擬頭節點。
  // 這個指針將用於構建新的合併串列，每次將較小的節點連接到 `current.next`。

  // 步驟 3：使用一個 while 迴圈，只要 `list1` 和 `list2` 都不為空，就繼續比較。
  // 在迴圈內部：
  //   a. 比較 `list1.val` 和 `list2.val`。
  //   b. 如果 `list1.val` 較小（或等於），則將 `list1` 的當前節點連接到 `current.next`。
  //      然後將 `list1` 指針向前移動到 `list1.next`。
  //   c. 否則，將 `list2` 的當前節點連接到 `current.next`。
  //      然後將 `list2` 指針向前移動到 `list2.next`。
  //   d. 無論哪種情況，都要將 `current` 指針向前移動到 `current.next`，以便為下一個節點做準備。

  // 步驟 4：當迴圈結束時，表示其中一個串列已經遍歷完畢。
  // 另一個串列中可能還有剩餘的節點（因為它們已經是排序好的）。
  // 將 `current.next` 指向剩下非空的那個串列。
  // 例如，如果 `list1` 還有剩餘，則 `current.next = list1`；如果 `list2` 還有剩餘，則 `current.next = list2`。
  // 如果兩個都為空，則 `current.next` 會指向 `null`，這也是正確的。

  // 步驟 5：最後，返回虛擬頭節點的 `next`。
  // 這就是合併後串列的實際頭節點。
};

// 輔助函數：將陣列轉換為鏈結串列
function arrayToList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 輔助函數：將鏈結串列轉換為陣列
function listToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

console.log("--- 測試案例 ---");

// 範例 1
let list1_1 = arrayToList([1, 2, 4]);
let list2_1 = arrayToList([1, 3, 4]);
let merged1 = mergeTwoLists(list1_1, list2_1);
console.log("範例 1 輸入：list1 = [1,2,4], list2 = [1,3,4]");
console.log("範例 1 輸出：", listToArray(merged1)); // 預期：[1,1,2,3,4,4]

// // 範例 2
// let list1_2 = arrayToList([]);
// let list2_2 = arrayToList([]);
// let merged2 = mergeTwoLists(list1_2, list2_2);
// console.log("範例 2 輸入：list1 = [], list2 = []");
// console.log("範例 2 輸出：", listToArray(merged2)); // 預期：[]

// // 範例 3
// let list1_3 = arrayToList([]);
// let list2_3 = arrayToList([0]);
// let merged3 = mergeTwoLists(list1_3, list2_3);
// console.log("範例 3 輸入：list1 = [], list2 = [0]");
// console.log("範例 3 輸出：", listToArray(merged3)); // 預期：[0]

// // 額外測試案例：一個串列為空，另一個不為空
// let list1_4 = arrayToList([5]);
// let list2_4 = arrayToList([]);
// let merged4 = mergeTwoLists(list1_4, list2_4);
// console.log("額外案例 1 輸入：list1 = [5], list2 = []");
// console.log("額外案例 1 輸出：", listToArray(merged4)); // 預期：[5]

// // 額外測試案例：兩個串列長度不同
// let list1_5 = arrayToList([1,2]);
// let list2_5 = arrayToList([3,4,5]);
// let merged5 = mergeTwoLists(list1_5, list2_5);
// console.log("額外案例 2 輸入：list1 = [1,2], list2 = [3,4,5]");
// console.log("額外案例 2 輸出：", listToArray(merged5)); // 預期：[1,2,3,4,5]

// // 額外測試案例：兩個串列交錯
// let list1_6 = arrayToList([1,3,5]);
// let list2_6 = arrayToList([2,4,6]);
// let merged6 = mergeTwoLists(list1_6, list2_6);
// console.log("額外案例 3 輸入：list1 = [1,3,5], list2 = [2,4,6]");
// console.log("額外案例 3 輸出：", listToArray(merged6)); // 預期：[1,2,3,4,5,6]
