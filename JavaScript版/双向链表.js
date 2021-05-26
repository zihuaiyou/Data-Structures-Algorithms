import { DoubleNodes, defaultEquals } from "./modules/linked-list-models.js";
import LinkedList from "./链表.js";

class DoubleLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  //任意位置插入元素
  insert(index, element) {
    const node = new DoubleNodes(element);
    let current;
    if (index >= 0 && index <= this.count) {
      //第一个位置插入
      if (index === 0) {
        //考虑链表元素为空的情况；
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          current = this.head;
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
        //最后一个位置插入
      } else if (index === this.count) {
        current = this.tail;
        node.prev = this.tail;
        current.next = node;
        this.tail = node;
        //中间位置插入
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        node.prev = previous;
        previous.next = node;
      }

      this.count++;
      return true;
    }
    return false;
  }

  //从任意位置移除元素并返回
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      //删除第一个元素
      if (index === 0) {
        this.head = current.next;
        //考虑链表只有一个元素
        if (this.count === 1) {
          this.tail = undefined;
          //链表不止一个元素
        } else {
          this.head.prev = undefined;
        }
        //删除链表的最后的一个元素
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
        //从任意位置删除元素
      } else {
        let previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  //从尾部插入元素
  push(element) {
    const node = new DoubleNodes(element);
    //如果链表为空
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      const current = this.tail;
      current.next = node;
      this.tail = node;
      this.tail.prev = current;
    }

    this.count++;
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

  getTail(){
    return this.tail;
  }

  clear(){
    super.clear();
    this.tail = undefined;
  }

  //输出字符串（反向输出）
  inverseToString(){
    if(this.tail==null) return  ""
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    for (let i = 0; i < this.count&&previous!=null; i++) {
      objString = `${objString},${previous.element}`
      previous = previous.prev;
    }
    return objString;
  }
}

// let doubleLinkedList = new DoubleLinkedList();
// doubleLinkedList.push("123");
// doubleLinkedList.push("456");
// doubleLinkedList.push("789");
// console.log(doubleLinkedList.indexOf("123"));
// console.log(doubleLinkedList.inverseToString());


 
// doubleLinkedList.insert(0,"789");
// doubleLinkedList.insert(0,"78");
// doubleLinkedList.insert(0,"7");
// console.log(doubleLinkedList.removeAt(2));
// doubleLinkedList.insert(2, "789");
// console.log(doubleLinkedList);
