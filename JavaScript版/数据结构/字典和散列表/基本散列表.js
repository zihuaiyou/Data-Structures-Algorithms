import defaultToString, { ValuePair } from "../modules/util.js";
export default class HashTable {
  constructor(strFn = defaultToString) {
    this.strFn = strFn;
    this.table = {};
  }

  //创建散列函数
  loseloseHashCode(key) {
    if (typeof key === "number") return key;
    let hash = 0;
    const strKey = this.strFn(key);
    for (let i = 0; i < strKey.length; i++) {
      hash += strKey.charCodeAt(i);
    }
    return hash % 37;
  }

  //调用散列函数
  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  //向散列表添加键值对
  put(key, value) {
    if (key != null && value != null) {
      const postion = this.hashCode(key);
      this.table[postion] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  //获取散列表的键值对
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  //移除散列表的值
  remove(key) {
    const postion = this.hashCode(key);
    const valuePair = this.table(postion);
    if (valuePair != null) {
      valuePair = null;
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.size() === 0) return true;
    return false;
  }

  size() {
    return Object.keys(this.table).length;
  }

  toString(){
      if (this.isEmpty()) return "";
      const valuePair = Object.values(this.table);
      const valuePairKeys = Object.keys(this.table);
      let objString = `{${valuePairKeys[0]} => ${valuePair[0].toString()}}`;
      for (let i = 1; i < this.size(); i++) {
          objString = `${objString}${'\n'}{${valuePairKeys[i]} => ${valuePair[i].toString()}}`
      }
      return objString;
  }
}

// let hashTable = new HashTable();
// hashTable.put("asd", "张三");
// hashTable.put("dds", "李四");
// hashTable.put("dsaf", "王五");

// console.log(hashTable.get());
// console.log(hashTable.size());
// console.log(hashTable.toString());

// console.log(hashTable.hashCode("dsaf"));
