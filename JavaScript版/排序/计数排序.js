//计数排序：定义一个辅助数据结构，将待排序数组的值作为辅助数组的索引，辅助数组的值为待排序数组的值出现的次数；

function countSort(array) {
  const maxValue = findMaxValue(array);
  //定义辅助计数数组
  //保证计数数组的索引值与待排序数组的最大值对应
  const counts = new Array(maxValue + 1);
  //初始化计数数组，并记录数组元素出现次数
  array.forEach((value) => {
    if (!counts[value]) {
      counts[value] = 0;
    }
    counts[value]++;
  });
  let sortedIdex = 0;
  counts.forEach((value, countIndex) => {
    while (value > 0) {
      array[sortedIdex] = countIndex;
      value--;
      sortedIdex++;
    }
  })
  return array;
}

function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

let arr = [1, 324, 24, 5, 44, 234, 4, 55];
console.log(countSort(arr));

