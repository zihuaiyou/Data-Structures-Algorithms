import BinarySearchTree from './二叉搜索树.js';
import TraversalTree from './树的遍历.js'
import { Compare } from '../modules/tree-models.js'

export default class SearchTree extends TraversalTree {
    //搜索最小值    
    min() {
        return this.minNode(this.root)
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    //搜索最大值
    max() {
        return this.maxNode(this.root)
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    //搜索任意值
    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) return false;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIG_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    //删除节点
    remove(key) {
        //赋值给this.root是为了更新节点的引用(指针)
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        if (node == null) return null;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIG_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
        //找到相同键值的节点;
            //第一种情况:该节点没有子节点
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            //第二种情况:该节点只有一个子节点
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            //第三种情况:该节点有两个子节点
            //寻找该节点右侧子树中的最小值(比该节点的键大的最小值)
            const aux = this.minNode(node.right);
            //用该值替换要删除的节点
            node.key = aux.key;
            //删除原节点
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }

    }
}

let searchTree = new SearchTree();
searchTree.insert(11);
searchTree.insert(7);
searchTree.insert(15);
searchTree.insert(5);
searchTree.insert(3);
searchTree.insert(6);
searchTree.insert(9);
searchTree.insert(8);
searchTree.insert(10);
searchTree.insert(13);
searchTree.insert(12);
searchTree.insert(14);
searchTree.insert(20);
searchTree.insert(18);
searchTree.insert(25);
// console.log(searchTree.min());
// console.log(searchTree.max());

searchTree.remove(10);
console.log(searchTree.search(10));
searchTree.postOrderTraverse((value) => {
    console.log(value.key);
});




