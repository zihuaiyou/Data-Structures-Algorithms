export default class Set {
  constructor() {
    this.items = {};
  }

  //检查元素是否在集合中
  has(element) {
    return element in this.items;
  }

  //向集合中添加元素
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  //删除集合元素
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  //清除集合元素
  clear() {
    this.items = {};
  }

  //集合元素个数
  size() {
    return Object.keys(this.items).length;
  }

  //返回一个包含所有集合元素的数组
  values() {
    return Object.values(this.items);
  }

  //集合运算
  //并集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((item) => unionSet.add(item));
    otherSet.values().forEach((item) => unionSet.add(item));
    return unionSet;
  }

  //交集
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSetVal = values;
    let smallerSetVal = otherValues;
    if (values.length < otherValues.length) {
      biggerSetVal = otherValues;
      smallerSetVal = values;
    }
    smallerSetVal.forEach((item) => {
      if (biggerSetVal.includes(item)) intersectionSet.add(item);
    });
    return intersectionSet;
  }

  //差集
  diffenerce(otherSet) {
    const diffenerceSet = new Set();
    this.values().forEach((item) => {
      if (!otherSet.has(item)) diffenerceSet.add(item);
    });
    return diffenerceSet;
  }

  //子集
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;
    let isSubSet = true;
    this.values().every((item) => {
      if (!otherSet.has(item)) {
        isSubSet = false;
        return false;
      }
      return true;
    });
    return isSubSet;
  }
}
let set1 = new Set();
set1.add(1);
set1.add(4);
set1.add(7);

let set2 = new Set();
set2.add(1);
// set2.add(4);
set2.add(7);
set2.add(78);

//  console.log( set.has(2));
//  set.delete(3);
//  console.log( set.size());
//  console.log(set.values());
//  console.log(set);
//  set.clear();

console.log(set1.union(set2).values());
console.log(set1.intersection(set2).values());
console.log(set1.diffenerce(set2));
console.log(set1.isSubSetOf(set2));

