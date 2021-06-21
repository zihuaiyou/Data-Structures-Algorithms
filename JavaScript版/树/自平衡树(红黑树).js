import BinarySearchTree from "./二叉搜索树.js";
import { RedBlackNode, Color, Compare } from "../modules/tree-models";

export default class RedBlackTree extends BinarySearchTree {
  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Color.RED;
    } else {
      newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (this.compareFn(key, node.key) === Compare.BIG_THAN) {
      if (node.right == null) {
        node.right = new RedBlackNode(key);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(node.right, key);
      }
    } else {
        return false;
    }
  }
}
