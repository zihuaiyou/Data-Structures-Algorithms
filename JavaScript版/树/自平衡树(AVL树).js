//自平衡树：任意节点左右两侧子树高度之差最多为1；
import SearchTree from "./搜索树中的值.js";
import Node, { Compare, defaultCompares } from "../modules/tree-models.js";

export default class AVLTree extends SearchTree {
  //计算节点的高度
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  //获取平衡因子
  getBalanceFactor(node) {
    if (node != null) {
      const heightDifference =
        this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
      switch (heightDifference) {
        case -2:
          return BalanceFactor.UNBALANCE_RIGHT;
        case -1:
          return BalanceFactor.SLIGHT_UNBALANCE_RIGHT;
        case 1:
          return BalanceFactor.SLIGHT_UNBALANCE_LEFT;
        case 2:
          return BalanceFactor.UNBALANCE_LEFT;
        default:
          return BalanceFactor.BALANCED;
      }
    }
    return null;
  }

  //向右的单旋转
  //左侧子节点的高度大于右侧子节点的高度，并且左侧子节点左侧较重
  rotationRR(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    this.root = temp;
    return temp;
  }

  //向左的单旋转
  //右侧子节点的高度大于左侧子节点的高度，并且右侧子节点右侧较重
  rotationLL(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    this.root = temp;
    return temp;
  }

  //向右的双旋转
  //左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
  rotationLR(node) {
    node.left = this.rotationLL(node.left);
    return this.rotationRR(node);
  }

  //向左的双旋转
  //右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重
  rotationRL(node) {
    node.right = this.rotationRR(node.right);
    return this.rotationLL(node);
  }

  //插入节点
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (this.compareFn(key, node.key) === Compare.BIG_THAN) {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    } else {
      return node;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationRR(node);
      } else if (this.compareFn(key, node.left.key) === Compare.BIG_THAN) {
        node = this.rotationLR(node);
      } else {
        return node;
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIG_THAN) {
        node = this.rotationLL(node);
      } else if (this.compareFn(key, node.right.key) === Compare.LESS_THAN) {
        node = this.rotationRL(node);
      } else {
        return node;
      }
    }
  }

  //删除节点
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node == null) return node;
    node = super.removeNode(node, key);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCE_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHT_UNBALANCE_LEFT
      ) {
        return this.rotationRR(node);
      } else if (balanceFactorLeft === BalanceFactor.SLIGHT_UNBALANCE_RIGHT) {
        return this.rotationLR(node.left);
      }
    } else if (balanceFactor === BalanceFactor.UNBALANCE_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHT_UNBALANCE_RIGHT
      ) {
        return this.rotationLL(node);
      } else if (balanceFactorRight === BalanceFactor.SLIGHT_UNBALANCE_LEFT) {
        return this.rotationRL(node.right);
      }
    }
    return node;
  }
}
export const BalanceFactor = {
  UNBALANCE_RIGHT: 1,
  SLIGHT_UNBALANCE_RIGHT: 2,
  SLIGHT_UNBALANCE_LEFT: 3,
  UNBALANCE_LEFT: 4,
  BALANCED: 5,
};

let aVLTree = new AVLTree();
aVLTree.insert(70);
aVLTree.insert(50);
aVLTree.insert(80);
aVLTree.insert(40);
aVLTree.insert(60);
aVLTree.insert(55);
aVLTree.insert(65);
aVLTree.insert(20);

aVLTree.remove(65);
aVLTree.remove(80);

// const node = aVLTree.search(50);
console.log(aVLTree.root);
console.log(aVLTree.min().key);
console.log(aVLTree.max().key);

console.log(aVLTree.getBalanceFactor(aVLTree.root));
console.log(aVLTree.getNodeHeight(aVLTree.root));
