/**
 * LeetCode 題目：Remove Nth Node From End of List (從列表末尾刪除第 N 個節點)
 *
 * 題目敘述：
 * 給定一個鏈表的頭節點 `head`，以及一個整數 `n`，請從鏈表的末尾刪除第 `n` 個節點，並返回其頭節點。
 *
 * 範例：
 * 輸入：head = [1,2,3,4,5], n = 2
 * 輸出：[1,2,3,5]
 *
 * 輸入：head = [1], n = 1
 * 輸出：[]
 *
 * 輸入：head = [1,2], n = 1
 * 輸出：[1]
 */

/**
 * 定義鏈表節點。
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 步驟 1：創建一個虛擬頭節點 (dummy node)。
  // 這樣做可以簡化處理刪除頭節點的情況。
  // 虛擬頭節點的 `next` 指向原始鏈表的 `head`。
  let dummy = new ListNode(0);
  dummy.next = head

  // 步驟 2：使用兩個指針，`fast` 和 `slow`。
  // 將 `fast` 指針向前移動 `n` 步。
  // 這樣 `fast` 和 `slow` 之間就有了 `n` 個節點的距離。

  // 首先，初始化 `fast` 和 `slow` 指針都指向虛擬頭節點 `dummy`。
  let fast = dummy;
  let slow = dummy;
  // 接著，使用一個 `for` 迴圈，讓 `fast` 指針向前移動 `n` 步。
  // 提示：在迴圈中，每次迭代都將 `fast` 指針更新為 `fast.next`。
  // 確保在移動 `fast` 之前檢查 `fast` 是否為 `null`，以避免錯誤。
  for (let i = 0; i <= n; i++) { // fast 指針需要領先 n+1 步，因為 slow 停在要刪除節點的前一個 
    fast = fast.next;
  }

  // 步驟 3：同時移動 `fast` 和 `slow` 指針。
  // 現在，`fast` 指針已經領先 `slow` 指針 `n` 個節點。
  // 我們需要讓這兩個指針以相同的速度向前移動，直到 `fast` 指針到達鏈表的末尾。
  // 使用一個 `while` 迴圈，條件是 `fast` 不為 `null`。
  // 在迴圈的每次迭代中，同時將 `fast` 和 `slow` 指針都更新為它們的 `next` 節點。
  // 當迴圈結束時，`fast` 將會指向鏈表的最後一個節點（或 `null`），
  // 而 `slow` 將會停在要刪除節點的「前一個」節點。
  // 提示：在迴圈中，同時更新 `fast = fast.next` 和 `slow = slow.next`。
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 步驟 4：執行刪除操作。
  // 當 `slow` 指針停在要刪除節點的前一個節點時，您需要修改 `slow.next`。
  // 將 `slow.next` 指向 `slow.next.next`，這樣就跳過了目標節點，實現了刪除。
  slow.next = slow.next.next;

  // 步驟 5：返回虛擬頭節點的 `next`，這就是修改後的鏈表頭節點。
  // 由於我們使用了虛擬頭節點，所以最終返回 `dummy.next` 即可。
  return dummy.next;
};

// 測試案例
// 輔助函數：將陣列轉換為鏈表
function arrayToList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let head = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}

// 輔助函數：將鏈表轉換為陣列
function listToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// 測試用例 1
let head1 = arrayToList([1, 2, 3, 4, 5]);
let n1 = 2;
let result1 = removeNthFromEnd(head1, n1);
console.log(`測試用例 1: 輸入 [1,2,3,4,5], n = 2 -> 預期輸出 [1,2,3,5] -> 實際輸出 ${listToArray(result1)}`);

// 測試用例 2
let head2 = arrayToList([1]);
let n2 = 1;
let result2 = removeNthFromEnd(head2, n2);
console.log(`測試用例 2: 輸入 [1], n = 1 -> 預期輸出 [] -> 實際輸出 ${listToArray(result2)}`);

// 測試用例 3
let head3 = arrayToList([1, 2]);
let n3 = 1;
let result3 = removeNthFromEnd(head3, n3);
console.log(`測試用例 3: 輸入 [1,2], n = 1 -> 預期輸出 [1] -> 實際輸出 ${listToArray(result3)}`);

// 測試用例 4 (刪除頭節點)
let head4 = arrayToList([1, 2, 3]);
let n4 = 3;
let result4 = removeNthFromEnd(head4, n4);
console.log(`測試用例 4: 輸入 [1,2,3], n = 3 -> 預期輸出 [2,3] -> 實際輸出 ${listToArray(result4)}`);
