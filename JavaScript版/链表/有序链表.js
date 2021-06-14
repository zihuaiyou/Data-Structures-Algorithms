import Compare, {
  Nodes,
  defaultEquals,
  defaultCompares,
} from "../modules/linked-list-models.js";
import LinkedList from "./链表.js";

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, comparesFn) {
    super(equalsFn);
    this.comparesFn = defaultCompares;   
  }

  //有序插入元素
  insert(element,index = 0) {
    //链表元素为空时,从头插入
    if (this.isEmpty()) return super.insert(0, element);
    //当链表元素不为空时，从指定位置插入
    const pos = this.getIndex(element);
    return super.insert(pos, element);
  }

  //获取元素在有序链表中的位置
  getIndex(element) {
    let i;
    let current = this.head;
    for (i = 0; i < this.count && current; i++) {
      if (this.comparesFn(element, current.element) === Compare.LESS_THAN) {
          return i;
      }
      current = current.next;
    }
    return i;
  }
}

let sortedLinkedList = new SortedLinkedList();
sortedLinkedList.insert(13);
sortedLinkedList.insert(12);
sortedLinkedList.insert(18);
console.log(sortedLinkedList);

console.log(sortedLinkedList.toString());
 