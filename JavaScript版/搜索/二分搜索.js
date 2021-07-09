//二分搜索：二分法查找
import { Compare, defaultCompares } from "../modules/search-models.js";
import quickSort from "../排序/快速排序.js";

const DOES_NOT_EXIST = -1;
function binarySearch(array, value, compareFn = defaultCompares) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  let mid ;

  while (compareFn(sortedArray[low], sortedArray[high]) !== Compare.BIG_THAN) {
     mid = Math.floor((low + high) / 2);
    if (compareFn(value, sortedArray[mid]) === Compare.LESS_THAN) {
      high = mid - 1;
    } else if (compareFn(value, sortedArray[mid]) === Compare.BIG_THAN) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

let arr = [1,2,54,32,67,24,6,67,32,4];

console.log(binarySearch(arr,6));