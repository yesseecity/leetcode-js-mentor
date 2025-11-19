/**
 * LeetCode 題目：Binary Tree Inorder Traversal (二元樹中序遍歷)
 * 題目連結：https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * 題目敘述：
 * 給定一個二元樹的根節點 `root`，返回其中序遍歷的節點值。
 * 中序遍歷的順序是：左子樹 -> 根節點 -> 右子樹。
 *
 * 範例 1:
 * 輸入: root = [1,null,2,3]
 * 輸出: [1,3,2]
 *
 * 範例 2:
 * 輸入: root = []
 * 輸出: []
 *
 * 範例 3:
 * 輸入: root = [1]
 * 輸出: [1]
 *
 * 限制:
 * - 樹中節點的數量在 [0, 100] 之間。
 * - 每個節點的值在 [-100, 100] 之間。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  const result = []

  // 步驟 1: 定義一個輔助函式來執行中序遍歷
  // 這個函式將遞迴地遍歷二元樹。
  let traverse = function(node) {
    // 步驟 2: 處理基本情況 (Base Case)
    // 如果當前節點為空，表示已經到達葉子節點的下方，直接返回。
    if (node === null) {
      return;
    }

    // 步驟 3: 遞迴遍歷左子樹
    // 根據中序遍歷的定義 (左 -> 根 -> 右)，首先遍歷左子樹。
    traverse(node.left);

    // 步驟 4: 訪問根節點
    // 在遍歷完左子樹後，將當前節點的值加入結果陣列。
    result.push(node.val);

    // 步驟 5: 遞迴遍歷右子樹
    // 最後，遍歷右子樹。
    traverse(node.right);
  }

  // 步驟 6: 從根節點開始呼叫輔助函式
  // 啟動中序遍歷的過程。
  traverse(root);

  // 步驟 7: 返回結果陣列
  return result
};

// 測試案例
// 為了方便測試，我們需要一個 TreeNode 的定義和一個將陣列轉換為二元樹的輔助函數。

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 輔助函數：將陣列轉換為二元樹 (層序遍歷)
function arrayToBinaryTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null;
  }

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let currentNode = queue.shift();

    // 左子節點
    if (arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]);
      queue.push(currentNode.left);
    }
    i++;

    // 右子節點
    if (i < arr.length && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
    }
    i++;
  }
  return root;
}

// 測試案例 1:
// 輸入: root = [1,null,2,3]
// 預期輸出: [1,3,2]
let root1 = arrayToBinaryTree([1, null, 2, 3]);
console.log("測試案例 1:", inorderTraversal(root1)); // 預期輸出: [1, 3, 2]

// 測試案例 2:
// 輸入: root = []
// 預期輸出: []
let root2 = arrayToBinaryTree([]);
console.log("測試案例 2:", inorderTraversal(root2)); // 預期輸出: []

// 測試案例 3:
// 輸入: root = [1]
// 預期輸出: [1]
let root3 = arrayToBinaryTree([1]);
console.log("測試案例 3:", inorderTraversal(root3)); // 預期輸出: [1]

// 測試案例 4:
// 輸入: root = [3,1,4,null,2]
// 預期輸出: [1,2,3,4]
let root4 = arrayToBinaryTree([3, 1, 4, null, 2]);
console.log("測試案例 4:", inorderTraversal(root4)); // 預期輸出: [1, 2, 3, 4]