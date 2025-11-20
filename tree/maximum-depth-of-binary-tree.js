/**
 * LeetCode 題目：Maximum Depth of Binary Tree (二元樹的最大深度)
 * 題目連結：https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * 題目敘述：
 * 給定一個二元樹的根節點 `root`，找出其最大深度。
 * 二元樹的最大深度是從根節點到最遠葉節點的最長路徑上的節點數量。
 * 葉節點是指沒有任何子節點的節點。
 *
 * 範例 1:
 * 輸入: root = [3,9,20,null,null,15,7]
 * 輸出: 3
 *
 * 範例 2:
 * 輸入: root = [1,null,2]
 * 輸出: 2
 *
 * 限制:
 * - 樹中節點的數量在 [0, 10^4] 之間。
 * - -100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right)
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // 步驟 1: 思考基本情況 (Base Case)
  // 如果根節點為空 (null)，表示沒有樹，其深度為 0。
  // 這是遞迴的終止條件。
  if (root === null) return 0;


  // 步驟 2: 理解題目要求
  // 題目要求計算二元樹的最大深度。最大深度是從根節點到最遠葉節點的最長路徑上的節點數量。
  // 葉節點是沒有左右子節點的節點
  if (null === root.left  && null === root.right) {
    return 1
  }

  // 步驟 3: 思考遞迴關係
  // 對於任何一個非空節點，其深度為 1 (計算當前節點本身) 加上其左右子樹中較大的深度。
  let depth =  1 + Math.max(maxDepth(root.left), maxDepth(root.right))

  // 步驟 4: 實作遞迴函數
  // 根據上述思考，撰寫遞迴函數來計算最大深度。

  return depth
};


// 測試案例
// 為了方便測試，我們需要一個 TreeNode 的定義和一個將陣列轉換為二元樹的輔助函數。

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

// 輔助函數：將陣列 (LeetCode 格式) 轉換為二元樹
// 陣列格式為層序遍歷，null 表示空節點
function arrayToBinaryTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) {
    return null;
  }

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    let current = queue.shift();

    // 左子節點
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    // 右子節點
    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
}

// 測試案例 1:
// 輸入: root = [3,9,20,null,null,15,7]
// 預期輸出: 3
let root1 = arrayToBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log("測試案例 1:", maxDepth(root1)); // 預期輸出: 3

// 測試案例 2:
// 輸入: root = [1,null,2]
// 預期輸出: 2
let root2 = arrayToBinaryTree([1, null, 2]);
console.log("測試案例 2:", maxDepth(root2)); // 預期輸出: 2

// 測試案例 3:
// 輸入: root = [] (空樹)
// 預期輸出: 0
let root3 = arrayToBinaryTree([]);
console.log("測試案例 3:", maxDepth(root3)); // 預期輸出: 0

// 測試案例 4:
// 輸入: root = [0] (單一節點)
// 預期輸出: 1
let root4 = arrayToBinaryTree([0]);
console.log("測試案例 4:", maxDepth(root4)); // 預期輸出: 1

// 測試案例 5:
// 輸入: root = [1,2,3,4,5]
// 預期輸出: 3
let root5 = arrayToBinaryTree([1, 2, 3, 4, 5]);
console.log("測試案例 5:", maxDepth(root5)); // 預期輸出: 3