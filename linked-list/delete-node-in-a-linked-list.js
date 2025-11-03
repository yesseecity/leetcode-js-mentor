/**
 * LeetCode 題目：Delete Node in a Linked List (刪除鏈結串列中的節點)
 * 題目連結：https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 *
 * 題目敘述：
 * 給定一個單向鏈結串列中的節點 `node`，請刪除該節點。
 * 題目保證給定的節點不是鏈結串列的尾節點。
 *
 * 範例 1:
 * 輸入: head = [4,5,1,9], node = 5
 * 輸出: [4,1,9]
 * 解釋: 給定鏈結串列為 4 -> 5 -> 1 -> 9，如果給定節點為 5，則刪除後鏈結串列變為 4 -> 1 -> 9。
 *
 * 範例 2:
 * 輸入: head = [4,5,1,9], node = 1
 * 輸出: [4,5,9]
 * 解釋: 給定鏈結串列為 4 -> 5 -> 1 -> 9，如果給定節點為 1，則刪除後鏈結串列變為 4 -> 5 -> 9。
 *
 * 限制:
 * - 鏈結串列中節點的數量在 [2, 1000] 之間。
 * - 每個節點的值在 [-1000, 1000] 之間。
 * - 給定的 `node` 永遠是鏈結串列中的一個有效節點，且不是尾節點。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 步驟 1: 理解題目要求
  // 題目要求我們刪除給定的 `node`，但我們無法直接訪問 `node` 的前一個節點。
  // 由於題目保證 `node` 不是尾節點，這意味著 `node.next` 肯定存在。

  // 步驟 2: 思考如何「刪除」一個節點
  // 傳統上，刪除一個節點需要知道其前一個節點，然後將前一個節點的 `next` 指向要刪除節點的 `next`。
  // 但這裡我們只有要刪除的 `node` 本身。

  // 步驟 3: 利用 `node.next` 進行操作
  // 既然我們不能刪除 `node` 本身，我們可以將 `node` 的值替換為 `node.next` 的值。
  // 這樣，從外部看，`node` 似乎被「替換」成了它後面的節點。

  // 步驟 4: 調整 `node` 的 `next` 指針
  // 在替換了 `node` 的值之後，現在 `node` 的值已經是 `node.next` 的值了。
  // 我們現在需要「刪除」原本 `node.next` 這個節點。
  // 為了做到這一點，我們將 `node` 的 `next` 指針指向 `node.next.next`。
  // 這樣，原本的 `node.next` 節點就被跳過了，從鏈結串列中移除了。

  node.val = node.next.val
  node.next = node.next.next
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

// 輔助函數：將鏈結串列轉換為陣列 (用於驗證結果)
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// 測試案例 1:
// 輸入: head = [4,5,1,9], node = 5
// 預期輸出: [4,1,9]
let head1 = arrayToLinkedList([4, 5, 1, 9]);
let nodeToDelete1 = head1.next; // 節點 5
deleteNode(nodeToDelete1);
console.log("測試案例 1:", linkedListToArray(head1)); // 預期輸出: [4, 1, 9]

// 測試案例 2:
// 輸入: head = [4,5,1,9], node = 1
// 預期輸出: [4,5,9]
let head2 = arrayToLinkedList([4, 5, 1, 9]);
let nodeToDelete2 = head2.next.next; // 節點 1
deleteNode(nodeToDelete2);
console.log("測試案例 2:", linkedListToArray(head2)); // 預期輸出: [4, 5, 9]

// 測試案例 3:
// 輸入: head = [1,2,3,4], node = 3
// 預期輸出: [1,2,4]
let head3 = arrayToLinkedList([1, 2, 3, 4]);
let nodeToDelete3 = head3.next.next; // 節點 3
deleteNode(nodeToDelete3);
console.log("測試案例 3:", linkedListToArray(head3)); // 預期輸出: [1, 2, 4]
