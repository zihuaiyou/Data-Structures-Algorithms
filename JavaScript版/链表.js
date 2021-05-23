import { Nodes, defaultEquals } from './modules/linked-list-models.js';

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    //向链表尾部添加元素
    push(element) {
        //Nodes 链表内的节点,含有元素及对下一元素的引用
        const node = new Nodes(element);
        let current;
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            //获取最后一项
            while (current.next != undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    //移除链表指定位置的元素
    removeAt(index) {
        //判断index是否合法
        if (index >= 0 && index < this.count) {
            let current = this.head;
            //移除第一项 
            if (index === 0) this.head = this.head.next;
            else {
                let previous;

                //移除中间项或最后一项
                /* for (let i = 0; i < index; i++) {
                    //循环至current(第index项),previous(第index-1项)
                    previous = current;
                    current = current.next;
                } */

                //使用getElementAt复用代码
                previous = this.getElementAt(index - 1);
                current = previous.next;
                //删除第index项(将第index项的下一项与第index-1项的下一项绑定起来;)
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    //返回指定位置的元素
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined
    }

    //任意位置插入元素
    insert(index, element) {
        const node = new Nodes(element);
        //判断index是否合法
        if (index >= 0 && index < this.count) {
            //在第一个位置插入
            if (index === 0) {
                const current = this.head;
                this.head = node;
                this.head.next = current;
            } else {
                // 在其他位置插入
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current
                previous.next = node;

            }
            this.count++
            return true;
        }
        return false;
    }

    //返回元素位置
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }

    //删除指定元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    //返回元素个数
    size() {
        return this.count;
    }

    //返回链表是否为空
    isEmpty() {
        return this.size() === 0;
    }

    //返回链表第一项
    getHead() {
        return this.head
    }

    //转换成字符串输出
    toString() {
        if (this.isEmpty()) return undefined;
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current.element != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }
}


// let linkedlist = new LinkedList();
// linkedlist.push("qwe");
// linkedlist.push("123");
// linkedlist.push("yur");
// console.log(linkedlist.size());

// linkedlist.removeAt(0);
// console.log(linkedlist.getElementAt(1));
// console.log(linkedlist.insert(1, "666"));
// console.log(linkedlist.remove("666"));
// console.log(linkedlist.indexOf("666"));

console.log(linkedlist.toString());




