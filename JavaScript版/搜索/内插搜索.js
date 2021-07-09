//内插搜索：类似于二分搜索，但是不使用中值与搜索值比较，
//使用postion代替mid值

import {
  Compare,
  defaultCompares,
  defaultDiffFn,
  defaultEquals,
} from "../modules/search-models.js";
import quickSort from "../排序/快速排序.js";

const DOES_NOT_EXIST = -1;
export default function interpolationSearch(
  array,
  value,
  diffFn = defaultDiffFn,
  compareFn = defaultCompares,
  equalsFn = defaultEquals
) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  let delta;

  while (compareFn(sortedArray[low], sortedArray[high]) !== Compare.BIG_THAN) {
    delta = Math.floor(
      diffFn(value, sortedArray[low]) /
        diffFn(sortedArray[high], sortedArray[low])
    );
    let postion = Math.floor(low + (high - low) * delta);
    if (equalsFn(value, sortedArray[postion])) return postion;
    if (compareFn(value, sortedArray[postion]) === Compare.LESS_THAN) {
      high = postion - 1;
    } else if (compareFn(value, sortedArray[postion]) === Compare.BIG_THAN) {
      low = postion + 1;
    }
  }
  return DOES_NOT_EXIST;
}

let arr = [1, 2, 54, 32, 67, 24, 6, 67, 32, 4];

console.log(interpolationSearch(arr, 4));
