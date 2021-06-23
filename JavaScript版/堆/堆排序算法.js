import {
  Compare,
  swap,
  defaultCompares,
  reverseCompare,
} from "../modules/heap-models.js";

function heapify(array, index, size, compareFn) {
  let element = index;

  let left = index * 2 + 1;
  let right = index * 2 + 2;
  if (
    left < size &&
    compareFn(array[element], array[left]) === Compare.LESS_THAN
  ) {
    element = left;
  }
  if (
    right < size &&
    compareFn(array[element], array[right]) === Compare.LESS_THAN
  ) {
    element = right;
  }
        
  if (index !== element) {
    swap(array, index, element);
     index = element;
    heapify(array, index, size, compareFn);
  }
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length/2); i >= 0; i-=1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

function heapSort(array, compareFn = defaultCompares) {
  let heapSize = array.length;
  array = buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

let arr = [6, 7, 3, 5, 4, 1, 2];
console.log(heapSort(arr));


