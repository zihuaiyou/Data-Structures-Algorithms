import defaultToString, { ValuePair } from '../modules/util.js'
export default class HashTable {
    constructor(strFn = defaultToString) {
        this.strFn = strFn;
        this.table = {};
    }

    //创建散列函数
    loseloseHashCode(key) {
        if (typeof key === 'number') return key;
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
            delete valuePair;
            return true;
        }
        return false;
    }
}