//快速排序：1.分割：设置数组某个元素作为主元，设置主元左右两个指针，左指针寻找比主元大的值，右指针反之，然后左右指针交换
// 2.将分割完的子数组（左，右数组）重复上述步骤；

import { Compare, defaultCompares, swap } from "../modules/sort-models.js";

export default  function quickSort(array, compareFn = defaultCompares) {
  return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      //重复步骤，继续划分子数组
      quick(array, left, index - 1, compareFn);
    }
    if (right > index) {
      //重复步骤，继续划分子数组
      quick(array, index, right, compareFn);
    }
  }

  return array;
}

function partition(array, left, right, compareFn) {
  let i = left;
  let j = right;
  //定义主元
  let pivot = array[Math.floor((left + right) / 2)];
  while (i <= j) {
    //当左指针比主元大时，停止循环
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
    }
    //当右指针比主元小时，停止循环
    while (compareFn(array[j], pivot) === Compare.BIG_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;                 
      j--;
    }
  }
  return i;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55];

// console.log(quickSort(arr));


