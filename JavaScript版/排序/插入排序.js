//将第二项以后的每个值视为插入值，将插入值和每个值比较
import { Compare, defaultCompares } from "../modules/sort-models.js";

export default function insertSort(array, compareFn = defaultCompares) {
  //循环从1开始，认为第一项已经排好序
  for (let i = 1; i < array.length; i++) {
    //设置辅助变量j;
    let j = i;
    //插入值temp
    let temp = array[i];
    while (j > 0 && compareFn(array[j-1], temp) === Compare.BIG_THAN) {
        array[j] = array[j-1];
        //为了将插入项继续与前面值比较
        j--;
    }
    array[j] = temp;
  }
  return array;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55, 73];
// console.log(insertSort(arr));

