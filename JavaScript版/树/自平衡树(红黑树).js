import BinarySearchTree from "./二叉搜索树.js";
import { RedBlackNode, Color, Compare } from "../modules/tree-models.js";

export default class RedBlackTree extends BinarySearchTree {
  insert(key) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Color.RED;
    } else {
      let newNode = this.insertNode(this.root, key);
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

  //插入节点后验证红黑树的属性
  fixTreeProperties(node) {
    //考虑情况子节点和父节点都是红色
    while (
      node &&
      node.parent &&
      node.parent.isRed() &&
      node.color != Color.BLACK
    ) {
      const parent = node.parent;
      const grantparent = parent.parent;
      //A类型 父节点是左侧子节点
      if (grantparent && grantparent.left === parent) {
        const uncle = grantparent.right;
        //A1类型 叔节点是红色 只需重新填色
        if (uncle && uncle.isRed()) {
          grantparent.color = Color.RED;
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          node = grantparent;
        } else {
          //A2类型 节点是右侧子节点 左旋转
          if (parent.right === node) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          //A3类型 节点是左侧子节点 右旋转
          this.rotationRR(grantparent);
          parent.color = Color.BLACK;
          grantparent.color = Color.RED;
          node = parent;
        }
        //B类型 父节点是右侧子节点
      } else if (grantparent && grantparent.right === parent) {
        const uncle = grantparent.left;
        //A1类型 叔节点是红色 只需重新填色
        if (uncle && uncle.isRed()) {
          grantparent.color = Color.RED;
          parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          node = grantparent;
        } else {
          //B2类型 节点是左侧子节点 右旋转
          if (parent.left === node) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }
          //B3类型 节点是右侧子节点 左旋转
          this.rotationLL(grantparent);
          parent.color = Color.BLACK;
          grantparent.color = Color.RED;
          node = parent;
        }
      } else break;
    }
    this.root.color = Color.BLACK;
  }

  //左旋转
  rotationLL(node) {
    const temp = node.right;
    node.right = temp.left;
    //1 更新temp.left的父引用
    if (temp.left && temp.left.key) {
      temp.left.parent = node;
    }
    //2 更新temp和node的父引用
    temp.parent = node.parent;
    //3 考虑 node是根节点的情况
    if (!node.parent) {
      this.root = temp;
    } else {
      //4 更新父节点的引用
      // node在父节点的左侧
      if (node.parent.left === node) {
        temp = node.parent.left;
        // node在父节点的右侧
      } else {
        temp = node.parent.right;
      }
    }
    temp.left = node;
    node.parent = temp;
  }

  //右旋转
  rotationRR(node) {
    const temp = node.left;
    node.left = temp.right;
    //1 更新temp.right的父引用
    if (temp.right && temp.right.key) {
      temp.right.parent = node;
    }
    //2 更新temp和node的父引用
    temp.parent = node.parent;
    //3 考虑 node是根节点的情况
    if (!node.parent) {
      this.root = temp;
    } else {
      //4 更新父节点的引用
      // node在父节点的左侧
      if (node.parent.left === node) {
        temp = node.parent.left;
        // node在父节点的右侧
      } else {
        temp = node.parent.right;
      }
    }
    temp.right = node;
    node.parent = temp;
  }
}

let redBlackTree = new RedBlackTree();
redBlackTree.insert(70);
redBlackTree.insert(50);
redBlackTree.insert(80);
redBlackTree.insert(40);
redBlackTree.insert(60);
redBlackTree.insert(55);
redBlackTree.insert(65);
redBlackTree.insert(20);

// console.log(redBlackTree.root.left.left.left);

