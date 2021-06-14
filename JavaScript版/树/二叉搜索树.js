import Node, { Compare, defaultCompares } from '../modules/tree-models.js'

export default class BinarySearchTree {
    constructor(compareFn = defaultCompares) {
        this.compareFn = compareFn;
        this.root = null;
    }

    //插入新的节点
    insert(key) {
        //根节点为空则插入根节点
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            //根节点不为空
            this.insertNode(this.root, key);
        }
    }

    //根节点不为空的情况
    insertNode(node, key) {
        //插入节点的键比根节点小的情况
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            //左侧子节点为空的情况
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                //左侧子节点不为空的情况;递归调用
                this.insertNode(node.left, key);
            }
        } else {
            //插入节点的键比根节点大的情况
            //右侧子节点为空的情况
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                //右侧子节点不为空的情况;
                this.insertNode(node.right, key);
            }
        }
    }
}

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(11);
// binarySearchTree.insert(7);
// binarySearchTree.insert(15);
// binarySearchTree.insert(5);
// binarySearchTree.insert(3);
// binarySearchTree.insert(6);
// binarySearchTree.insert(9);
// binarySearchTree.insert(8);
// binarySearchTree.insert(10);
// binarySearchTree.insert(13);
// binarySearchTree.insert(12);
// binarySearchTree.insert(14);
// binarySearchTree.insert(20);
// binarySearchTree.insert(18);
// binarySearchTree.insert(25);
//  console.log(binarySearchTree);
 