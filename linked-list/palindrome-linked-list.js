/**
 * LeetCode 題目：Palindrome Linked List (迴文鏈結串列)
 * 題目連結：https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * 題目敘述：
 * 給定一個單向鏈結串列的頭節點 `head`，判斷這個鏈結串列是否為迴文串列。
 * 迴文串列是指從頭到尾讀取和從尾到頭讀取都相同的鏈結串列。
 *
 * 範例 1:
 * 輸入: head = [1,2,2,1]
 * 輸出: true
 *
 * 範例 2:
 * 輸入: head = [1,2]
 * 輸出: false
 *
 * 限制:
 * - 鏈結串列中的節點數量在 [1, 10^5] 之間。
 * - 每個節點的值在 [0, 9] 之間。
 *
 * 進階:
 * 你能否在 O(n) 的時間複雜度和 O(1) 的空間複雜度下解決此問題？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 步驟 1: 理解迴文鏈結串列的定義
  // 迴文串列意味著從頭到尾和從尾到頭讀取節點值序列是相同的。
  // 例如：1 -> 2 -> 2 -> 1 是迴文，1 -> 2 -> 3 不是迴文。

  // 步驟 2: 思考如何比較前半部分和後半部分
  // 為了判斷是否為迴文，我們需要比較鏈結串列的前半部分和後半部分。
  // 如果我們能將後半部分反轉，然後與前半部分逐一比較，就能得出結果。

  // 步驟 3: 找到鏈結串列的中點
  // 使用快慢指針（fast and slow pointers）來找到鏈結串列的中點。
  // - 慢指針 (slow pointer) 每次移動一步。
  // - 快指針 (fast pointer) 每次移動兩步。
  // 這樣做的目的是，當快指針到達鏈結串列的末尾時（或超出末尾一個節點），
  // 慢指針剛好會位於鏈結串列的中點。
  // 例如：
  // 鏈結串列: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
  //
  // 步驟 | 慢指針 (S) | 快指針 (F)
  // --- | -------- | --------
  // 初始 | 1        | 1
  // 1   | 2        | 3
  // 2   | 3        | 5
  // 3   | 4        | 7
  // 4   | 5        | 9 (快指針到達末尾，慢指針在中間)
  // 這種方式可以有效地在一次遍歷中找到中點。

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 步驟 4: 反轉鏈結串列的後半部分
  // 從中點開始，將鏈結串列的後半部分反轉。
  // 這需要一個輔助函數來反轉鏈結串列。

  
  function reverseList(head) {
    let previous = null;
    let current = head;
    while (current !== null) {
      // 暫存
      let next = current.next;

      // 反轉
      // p c n
      current.next = previous;
      
      // 移動
      previous = current;
      current = next;
    }
    return  previous;
  }

  let reversedHalf = reverseList(slow);

  // 步驟 5: 比較前半部分和反轉後的後半部分
  // 逐一比較前半部分（從 `head` 開始）和反轉後的後半部分（從反轉後的頭節點開始）。
  // 如果所有對應節點的值都相同，則為迴文；否則不是。

  while (reversedHalf !== null) {
    if (head.val !== reversedHalf.val) {
      return false;
    }
    head = head.next;
    reversedHalf = reversedHalf.next;
  }
  return true;
  // 步驟 6: 恢復鏈結串列（可選，但通常是好習慣）
  // 如果題目要求不修改原始鏈結串列結構，則在比較完成後，需要將反轉的後半部分再次反轉，恢復原狀。
  // 對於此題，通常不要求恢復，但了解這一點很重要。

  // 提示：
  // - 處理空鏈結串列或只有一個節點的鏈結串列的邊界情況。
  // - 如何在找到中點後，將前半部分和後半部分斷開（或標記）。

};

// 測試案例
// 為了方便測試，我們需要一個 ListNode 的定義和一個將陣列轉換為鏈結串列的輔助函數。

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// 輔助函數：將陣列轉換為鏈結串列
function arrayToLinkedList(arr) {
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

// 測試案例 1: 迴文鏈結串列
// 輸入: head = [1,2,2,1]
// 預期輸出: true
let head1 = arrayToLinkedList([1, 2, 2, 1]);
console.log("測試案例 1:", isPalindrome(head1)); // 預期輸出: true

// 測試案例 2: 非迴文鏈結串列
// 輸入: head = [1,2]
// 預期輸出: false
let head2 = arrayToLinkedList([1, 2]);
console.log("測試案例 2:", isPalindrome(head2)); // 預期輸出: false

// 測試案例 3: 單一節點
// 輸入: head = [1]
// 預期輸出: true
let head3 = arrayToLinkedList([1]);
console.log("測試案例 3:", isPalindrome(head3)); // 預期輸出: true

// 測試案例 4: 空鏈結串列
// 輸入: head = []
// 預期輸出: true (通常空鏈結串列被視為迴文)
let head4 = arrayToLinkedList([]);
// console.log("測試案例 4:", isPalindrome(head4)); // 預期輸出: true

// 測試案例 5: 偶數長度非迴文
// 輸入: head = [1,2,3,4]
// 預期輸出: false
let head5 = arrayToLinkedList([1, 2, 3, 4]);
// console.log("測試案例 5:", isPalindrome(head5)); // 預期輸出: false

// 測試案例 6: 奇數長度迴文
// 輸入: head = [1,2,3,2,1]
// 預期輸出: true
let head6 = arrayToLinkedList([1, 2, 3, 2, 1]);
// console.log("測試案例 6:", isPalindrome(head6)); // 預期輸出: true

// 測試案例 7: 奇數長度非迴文
// 輸入: head = [1,2,3,4,5]
// 預期輸出: false
let head7 = arrayToLinkedList([1, 2, 3, 4, 5]);
// console.log("測試案例 7:", isPalindrome(head7)); // 預期輸出: false