import DoubleLinkedList from "./双向链表.js";
class StackLinkedList{
  constructor() {
    this.items = new DoubleLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.isEmpty()) return undefined;
    return this.items.removeAt(this.size() - 1);
  }
  peek() {
    if (this.items.isEmpty()) return undefined;
    return this.items.getElementAt(this.size() - 1).element;
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.count;
  }
  clear() {
    this.items.clear();
  }
  toString() {
    return this.items.toString();
  }
}

let stackLinkedList = new StackLinkedList();
stackLinkedList.push(1);
stackLinkedList.push(134);
stackLinkedList.push(10);
stackLinkedList.pop();
console.log(stackLinkedList.size());
 
console.log(stackLinkedList);

console.log(stackLinkedList.toString());
