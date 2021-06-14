//利用扩展运算符模拟集合运算

const set1 = new Set([1,2,3]);
const set2 = new Set([1,4,6]);
//模拟并集运算
console.log(new Set([...set1,...set2]));

//模拟交集运算
console.log(new Set([...set1].filter(item => {
    return set2.has(item);
})));

//模拟差集运算
console.log(new Set([...set1].filter(item => {
    return !set2.has(item);
})));


