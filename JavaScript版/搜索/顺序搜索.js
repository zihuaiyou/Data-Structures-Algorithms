//顺序搜索：按顺序查找，性能差
import {defaultEquals} from '../modules/search-models.js';

const DOES_NOT_EXIST = -1;
function sequentialSearch(array,value,equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(array[i],value)) return i;
    }
    return DOES_NOT_EXIST;
}

let arr = [1,2,54,32,67,24,6,67,32,4];
console.log(sequentialSearch(arr,6));

