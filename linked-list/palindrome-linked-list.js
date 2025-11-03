// LeetCode 題目：Palindrome Linked List

// 題目敘述：
// 給定一個單向鏈結串列的頭節點 `head`，判斷該鏈結串列是否為迴文。
// 如果是，返回 `true`；否則，返回 `false`。

// 範例 1：
// 輸入：head = [1,2,2,1]
// 輸出：true

// 範例 2：
// 輸入：head = [1,2]
// 輸出：false

// 提示：
// 鏈結串列中的節點數量範圍為 `[1, 10^5]`。
// 節點的值範圍為 `[0, 9]`。

// 進階：
// 你能否在 O(n) 的時間複雜度和 O(1) 的空間複雜度下解決此問題？

/**
 * 定義單向鏈結串列的節點。
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 解題思路：
  // 判斷一個鏈結串列是否為迴文，最直觀的方法是將所有節點的值儲存起來，
  // 然後檢查這個值序列是否為迴文。然而，這會使用 O(n) 的空間複雜度。
  // 為了達到 O(1) 的空間複雜度，我們需要更巧妙的方法。

  // 方法一：快慢指針 + 反轉後半部分鏈結串列
  // 1. 使用快慢指針找到鏈結串列的中點。
  //    - 快指針每次移動兩步，慢指針每次移動一步。
  //    - 當快指針到達鏈結串列末尾時，慢指針正好在中點。
  //    - 需要考慮鏈結串列長度為奇數或偶數的情況。

  // 2. 反轉鏈結串列的後半部分。
  //    - 從中點開始，將後半部分的鏈結串列反轉。
  //    - 這會將後半部分的節點指向反方向。

  // 3. 比較前半部分和反轉後的後半部分。
  //    - 同時從鏈結串列的頭部和反轉後的後半部分頭部開始遍歷。
  //    - 逐一比較對應節點的值是否相等。
  //    - 如果所有對應節點的值都相等，則為迴文；否則不是。

  // 4. 恢復鏈結串列（可選，但通常是好習慣）。
  //    - 為了不改變原始鏈結串列的結構，在比較完成後，將反轉的後半部分再次反轉回來。
  //    - 然後將鏈結串列重新連接。

  // 步驟詳解：

  // 1. 處理邊界情況：
  //    - 如果鏈結串列為空或只有一個節點，它一定是迴文。

  // 2. 找到中點：
  //    - 初始化兩個指針：`slow` (慢指針) 和 `fast` (快指針)，都指向 `head`。
  //    - 當 `fast` 及其 `next` 節點都存在時，`fast` 移動兩步，`slow` 移動一步。
  //    - 這樣當循環結束時，`slow` 會指向鏈結串列的中點（或偏左的中點）。

  // 3. 反轉後半部分：
  //    - 找到後半部分的起始節點。如果鏈結串列長度為奇數，`slow` 應該再往前走一步。
  //    - 將前半部分的末尾節點的 `next` 指針設為 `null`，將鏈結串列斷開。
  //    - 實作一個反轉鏈結串列的輔助函數，將 `slow` 指針指向的後半部分鏈結串列反轉。
  //    - 輔助函數會返回反轉後鏈結串列的頭節點。

  // 4. 比較：
  //    - 現在我們有兩個鏈結串列的頭節點：原始鏈結串列的 `head` (前半部分) 和反轉後後半部分的頭節點。
  //    - 同時遍歷這兩個鏈結串列，逐一比較它們的 `val`。
  //    - 如果在任何時候發現 `val` 不相等，則立即返回 `false`。
  //    - 如果其中一個鏈結串列遍歷完畢（表示比較完成），且沒有發現不相等的值，則返回 `true`。

  // 5. 恢復鏈結串列（進階）：
  //    - 如果需要恢復原始鏈結串列，在比較完成後，再次調用反轉輔助函數，將後半部分反轉回來。
  //    - 然後將前半部分的末尾節點重新連接到恢復後的後半部分頭節點。
};

// 測試案例：

// 輔助函數：用於建立鏈結串列
function createLinkedList(arr) {
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

// 測試函數
function testIsPalindrome() {
  console.log("--- Palindrome Linked List 測試 ---");

  // 測試案例 1: 迴文 (偶數長度)
  let head1 = createLinkedList([1, 2, 2, 1]);
  console.log(`輸入: [1,2,2,1], 預期輸出: true, 實際輸出: ${isPalindrome(head1)}`);

  // 測試案例 2: 非迴文
  let head2 = createLinkedList([1, 2]);
  console.log(`輸入: [1,2], 預期輸出: false, 實際輸出: ${isPalindrome(head2)}`);

  // 測試案例 3: 迴文 (奇數長度)
  let head3 = createLinkedList([1, 2, 3, 2, 1]);
  console.log(`輸入: [1,2,3,2,1], 預期輸出: true, 實際輸出: ${isPalindrome(head3)}`);

  // 測試案例 4: 單一節點
  let head4 = createLinkedList([1]);
  console.log(`輸入: [1], 預期輸出: true, 實際輸出: ${isPalindrome(head4)}`);

  // 測試案例 5: 空鏈結串列
  let head5 = createLinkedList([]);
  console.log(`輸入: [], 預期輸出: true, 實際輸出: ${isPalindrome(head5)}`);

  // 測試案例 6: 非迴文 (偶數長度)
  let head6 = createLinkedList([1, 2, 3, 4]);
  console.log(`輸入: [1,2,3,4], 預期輸出: false, 實際輸出: ${isPalindrome(head6)}`);

  // 測試案例 7: 迴文 (兩個相同節點)
  let head7 = createLinkedList([5, 5]);
  console.log(`輸入: [5,5], 預期輸出: true, 實際輸出: ${isPalindrome(head7)}`);

  console.log("--- 測試結束 ---");
}

// 執行測試
// testIsPalindrome(); // 在實作 isPalindrome 函數後取消註解以執行測試
