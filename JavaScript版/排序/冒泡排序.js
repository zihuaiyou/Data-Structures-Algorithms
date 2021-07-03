//冒泡排序：比较两个相邻的项，如果第一个比第二个大，则交换他们

import { Compare, defaultCompares, swap } from "../modules/sort-models.js";
function bubbleSort(array, compareFn = defaultCompares) {
  //外循环：每个元素都要进行排序
  for (let i = 0; i < array.length; i++) {
    //内循环：每个元素要进行i-1轮排序
    for (let j = 0; j < array.length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIG_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

//改进的冒泡排序
//外循环每进行一次都会确定一个元素的顺序，内循环减去多余的排序次数
function modifiedBubbleSort(array, compareFn = defaultCompares) {
  //外循环：每个元素都要进行排序
  for (let i = 0; i < array.length; i++) {
    //内循环：每个元素要进行i-1轮排序
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIG_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55, 73];
// console.log(bubbleSort(arr));
console.log(modifiedBubbleSort(arr));
