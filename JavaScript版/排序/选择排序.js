//选择排序：找出数据结构中的最小值并将其放在第一个位置，以此类推；
import { Compare, defaultCompares, swap } from "../modules/sort-models.js";
function selectSort(array, compareFn = defaultCompares) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (compareFn(array[j], array[minIndex]) === Compare.LESS_THAN) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex)
        }
    }
    return array;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55, 73];
console.log(selectSort(arr));