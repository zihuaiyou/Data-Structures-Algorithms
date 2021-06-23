import { Compare, swap, defaultCompares, reverseCompare } from "../modules/heap-models.js";

//最小堆数据结构
export class MinHeap {
  constructor(compareFn = defaultCompares) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  //获取左侧子节点的位置
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  //获取右侧子节点的位置
  getRightIndex(index) {
    return index * 2 + 2;
  }

  //获取父节点的位置
  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  insert(elem) {
    if (elem != null) {
      this.heap.push(elem);
      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  shiftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      parent >= 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIG_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMinmium() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.heap[0];
  }
}

export class MaxHeap extends MinHeap{
  constructor(compareFn = defaultCompares){
    super(compareFn);
    this.compareFn = reverseCompare;
  }
  findMaxmium(){
    return this.isEmpty()?undefined:this.heap[0];   
  }
}

let minheap = new MinHeap();
let maxheap = new MaxHeap();
minheap.insert(13);
minheap.insert(12);
minheap.insert(1);
minheap.insert(11);
minheap.insert(28);

maxheap.insert(13);
maxheap.insert(12);
maxheap.insert(1);
maxheap.insert(11);
maxheap.insert(28);
console.log(minheap.findMinmium());
console.log(maxheap.findMaxmium());
