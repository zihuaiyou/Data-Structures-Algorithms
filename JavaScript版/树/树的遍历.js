import BinarySearchTree from './二叉搜索树.js';

export default class TraversalTree extends BinarySearchTree {

    //中序遍历 :以最小到最大(上行搜索)顺序遍历所有节点;一般用于排序
    //中序遍历优先级: 1.遍历左侧子节点,2.节点本身,3.右侧子节点
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node);
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    //先序遍历,先遍历节点本身,再遍历子节点
    //先序遍历优先级: 1.节点本身,2.遍历左侧子节点,3.右侧子节点
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback)
        }
    }

    //后序遍历:先遍历子节点,再遍历节点本身
    //后序遍历优先级: 1.遍历左侧子节点,2.右侧子节点,3.节点本身
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node);
        }
    }
}

let traversalTree = new TraversalTree();
traversalTree.insert(11);
traversalTree.insert(7);
traversalTree.insert(15);
traversalTree.insert(5);
traversalTree.insert(3);
traversalTree.insert(6);
traversalTree.insert(9);
traversalTree.insert(8);
traversalTree.insert(10);
traversalTree.insert(13);
traversalTree.insert(12);
traversalTree.insert(14);
traversalTree.insert(20);
traversalTree.insert(18);
traversalTree.insert(25);
// traversalTree.inOrderTraverse((value) => {
//     console.log(value.key);
// });

// traversalTree.preOrderTraverse((value) => {
//     console.log(value.key);
// })

// traversalTree.postOrderTraverse((value) => {
//     console.log(value.key);
// })
