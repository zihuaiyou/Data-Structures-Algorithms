import defaultToString, { ValuePair } from "../modules/util.js";
import HashTable from "./基本散列表.js";

//散列表冲突：散列值相同时(key的值相同)导致value被替换的问题
//分离链接：key的hash值重复时，元素会向下移动
export default class HashTableLinearProbing extends HashTable {
  constructor(strFn = defaultToString) {
    super(strFn);
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const postion = this.hashCode(key);
      if (this.table[postion] == null) {
        this.table[postion] = new ValuePair(key, value);
      } else {
        let index = postion + 1;
        while (this.table[index] != null) index++;
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const postion = this.hashCode(key);
    if (this.table[postion] != null) {
      if (this.table[postion].key === key) {
        return this.table[postion].value;
      }
      let index = postion + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[index].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const postion = this.hashCode(key);
    if (this.table[postion] != null) {
      if (this.table[postion].key === key) {
        delete this.table[postion];
        this.updateTable(key, postion);
        return true;
      }
      let index = postion + 1;
      while (this.table[index] != null && this.table[index].key != key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.updateTable(key, index);
        return true;
      }
    }
    return false;
  }

  updateTable(key, removedPostion) {//删除一个元素后，更新散列表中元素位置，hash值相同的元素上移
    const hash = this.hashCode(key);
    let index = removedPostion + 1;
    while (this.table[index] != null) {
    //posHash 下一个元素的hash值
      let posHash = this.hashCode(this.table[index].key)
      if (posHash <= hash || posHash <= this.hashCode(removedPostion)) {
          this.table[removedPostion] = this.table[index];
          delete this.table[index];
          removedPostion = index;
      }
      index++;
    }
  }
}

let hashTableLinearProbing = new HashTableLinearProbing();
hashTableLinearProbing.put('a', "Jack");
hashTableLinearProbing.put("n", "Bob");
hashTableLinearProbing.put("a", "Lucy");
console.log(hashTableLinearProbing.get('a'));
hashTableLinearProbing.remove('a');
console.log(hashTableLinearProbing.get('a'));
 
console.log(hashTableLinearProbing.toString());
