/**
 * LeetCode 題目：Reverse Linked List (反轉鏈結串列)
 *
 * 題目敘述：
 * 給定一個單向鏈結串列的頭節點 `head`，請反轉該鏈結串列，並回傳反轉後的鏈結串列的頭節點。
 *
 * 範例 1:
 * 輸入: head = [1,2,3,4,5]
 * 輸出: [5,4,3,2,1]
 *
 * 範例 2:
 * 輸入: head = [1,2]
 * 輸出: [2,1]
 *
 * 範例 3:
 * 輸入: head = []
 * 輸出: []
 *
 * 限制條件:
 * - 鏈結串列中的節點數量範圍是 [0, 5000]。
 * - -5000 <= Node.val <= 5000
 */

/**
 * 定義鏈結串列節點的結構。
 * 這是 LeetCode 環境中通常會提供的 ListNode 類別。
 * 如果在本地環境測試，可能需要自行定義。
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList2 = function (head) {
  // 步驟 1: 初始化三個指標
  //   - `prev` (previous 的簡寫): 指向反轉後鏈結串列的尾部，初始為 null (因為新的頭節點的 next 會是 null)。
  //   - `curr`: 指向當前正在處理的節點，初始為 `head`。
  //   - `nextTemp`: 用於暫存 `curr` 節點的下一個節點，以避免在修改 `curr.next` 後丟失對後續鏈結串列的引用。
  let prev = null;
  let curr = head;

  // 步驟 2: 迭代遍歷鏈結串列
  //   - 使用一個 while 迴圈，條件是 `curr` 不為 null。
  while (curr !== null) {
    // 步驟 3: 在迴圈內部，執行反轉操作
    //   - 暫存 `curr` 的下一個節點到 `nextTemp`。
    let nextTemp = curr.next;
    //   - 將 `curr` 的 `next` 指向 `prev` (完成當前節點的反轉)。
    curr.next = prev;
    //   - 將 `prev` 更新為 `curr` (移動 `prev` 到下一個已反轉的節點)。
    prev = curr;
    //   - 將 `curr` 更新為 `nextTemp` (移動 `curr` 到下一個待反轉的節點)。
    curr = nextTemp;
  }

  // 步驟 4: 迴圈結束後，`prev` 將指向反轉後鏈結串列的頭節點。
  //   - 回傳 `prev`。
  return prev;
};

var reverseList = function (head) {
  let current = head;
  let previous = null;

  while (current !== null) {
    // 1. 暫存
    let next = current.next;

    // 2. 反轉
    current.next = previous;

    // 3. 移動
    previous = current;
    current = next;
  }

  /*
  * null, [{ val: 1, next: 2} , { val: 2, next: 3}]
  next = { val: 2, next: 3 }; // 暫存
  current.next = previous; // is null , 反轉
  * null, [{ val: 1, next: null}, { val: 2, next: 3}, { val: 3, next: 4} ]
  * previous,  current,                 next
  * 移動
  previous = current;
  current = next;
  * null, [{ val: 1, next: null}, { val: 2, next: 3}, { val: 3, next: 4} ]
  *           previous,              current

  * 新的一輪
  next = current.next; // 暫存
  current.next = previous; // 反轉
  * null, [{ val: 1, next: null}, { val: 2, next: 1}, { val: 3, next: 4} ]
  *           previous,              current,              next
  
  * 移動
  pervious = current;
  current = next;
  * null, [{ val: 1, next: null}, { val: 2, next: 1}, { val: 3, next: 4}, { val: 4, next: 5} ]
  *                                  previous,              current,              
  */ 
  return previous;
};

// 測試案例
// 為了方便測試，我們需要一個輔助函數來建立鏈結串列。
function createLinkedList(arr) {
  if (arr.length === 0) {
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

// 輔助函數：將鏈結串列轉換為陣列，以便於比較。
function linkedListToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

console.log("--- 測試案例 ---");

// 測試案例 1: head = [1,2,3,4,5]
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let reversed1 = reverseList(head1);
console.log("輸入: [1,2,3,4,5]");
console.log("預期輸出: [5,4,3,2,1]");
console.log("實際輸出: ", linkedListToArray(reversed1)); // 應該輸出 [5,4,3,2,1]

// 測試案例 2: head = [1,2]
let head2 = createLinkedList([1, 2]);
let reversed2 = reverseList(head2);
console.log("\n輸入: [1,2]");
console.log("預期輸出: [2,1]");
console.log("實際輸出: ", linkedListToArray(reversed2)); // 應該輸出 [2,1]

// 測試案例 3: head = []
let head3 = createLinkedList([]);
let reversed3 = reverseList(head3);
console.log("\n輸入: []");
console.log("預期輸出: []");
console.log("實際輸出: ", linkedListToArray(reversed3)); // 應該輸出 []

// 測試案例 4: head = [1] (單一節點)
let head4 = createLinkedList([1]);
let reversed4 = reverseList(head4);
console.log("\n輸入: [1]");
console.log("預期輸出: [1]");
console.log("實際輸出: ", linkedListToArray(reversed4)); // 應該輸出 [1]
