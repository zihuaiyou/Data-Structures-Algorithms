//基数排序：按照基数将整数分布到桶中，再利用计数排序
//基数即为进制数

function radixSort(array, radix = 10) {
  if (array.length < 2) return array;
  let maxValue = array[0];
  let minValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  let significantDigit = 1;
  while (Math.floor((maxValue - minValue) / significantDigit) >= 1) {
    array = countingSortForRadix(array, minValue, significantDigit, radix);
    significantDigit *= radix;
  }
  return array;
}

function countingSortForRadix(array, minValue, significantDigit, radix) {
  let bucketIndex;
  const buckets = [];
  const aux = [];

  //十进制就有十个桶
  //初始化每个桶的计数
  for (let i = 0; i < radix; i++) {
    buckets[i] = 0;
  }
  //确定数组中的元素会被分到哪个桶
  //使用计数排序
  for (let i = 0; i < array.length; i++) {
    bucketIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radix
    );
    buckets[bucketIndex]++;
  }
  //将桶中的计数累加，用以确定排序后数组的元素顺序
  for (let i = 1; i < buckets.length; i++) {
    buckets[i] += buckets[i - 1];
  }
  //
  for (let i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(
      ((array[i] - minValue) / significantDigit) % radix
    );
    aux[--buckets[bucketIndex]] = array[i];
  }
  return aux;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55];
console.log(radixSort(arr));
