//归并排序：1.将大数组二分为数量只有1的小数组，
          //2.将小数组排序然后再合并为大数组
import { Compare, defaultCompares } from "../modules/sort-models.js";

function mergeSort(array, compareFn = defaultCompares) {
  if (array.length > 1) {
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle), compareFn);
    let right = mergeSort(array.slice(middle, array.length));
    array = merge(left, right, compareFn);
  }
  return array;
}

function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (compareFn(left[i], right[j]) === Compare.LESS_THAN) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55];
console.log(mergeSort(arr));
