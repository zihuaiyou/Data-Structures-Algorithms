import { Nodes, defaultEquals } from '../modules/linked-list-models.js';
import LinkedList from "./链表.js";

export default class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }

    //插入元素
    insert(index, element) {
        if (index >= 0 && index <= this.count) {
            const node = new Nodes(element);
            if (index === 0) {
                let current = this.head;
                //考虑链表为空的情况
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                    //考虑链表不为空的情况
                } else {
                    current = this.getElementAt(this.count - 1);
                    node.next = this.head;
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false
    }

    //移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.count === 1) {
                    this.head = undefined;
                } else {
                    current = this.getElementAt(this.count - 1);
                    const removed = this.head;
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

let circularLinkedList = new CircularLinkedList();
// circularLinkedList.push("a");
// circularLinkedList.push("b");
circularLinkedList.push("c");

console.log(circularLinkedList.insert(0, "x"));
console.log(circularLinkedList.removeAt(1));




console.log(circularLinkedList);
