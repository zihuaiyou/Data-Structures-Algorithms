//将元素分成不同的小数组（桶），再用简单的排序算法排序桶内元素，最后将不同的桶合并
import insertSort from "./插入排序.js";
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) return array;
  //创建桶
  const buckets = createBuckets(array, bucketSize);
  //排序桶内元素
  return sortBuckets(buckets);
}

function createBuckets(array, bucketSize) {
  const buckets = [];
  let maxValue = array[0];
  let minValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  //bucketSize桶内元素的数量
  //bucketCount桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  
  //每个桶内初始化一个数组
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  //确定元素被分到哪个桶
  for (let i = 0; i < array.length; i++) {
    //桶编号
    let bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedBuckets = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      let sortedArray = insertSort(buckets[i]);
      sortedBuckets.push(...sortedArray);
    }
  }
  return sortedBuckets;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55];
console.log(bucketSort(arr));
