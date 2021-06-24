   import defaultToString, { ValuePair } from '../modules/util.js'
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //查询是否有key
    hasKey(key) {
        return this.table[this.toStrFn(key)]
    }

    //设置键值
    set(key, value) {
        if (key != null && value != null) {
            this.table[this.toStrFn(key)] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    //根据key获取值
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair != null ? valuePair.value : undefined;
    }

    //返回字典的值
    keysValue() {
        return Object.values(this.table);
    }

    //返回键
    keys() {
        return this.keysValue().map(item => item.key);
    }

    //返回值
    values() {
        return this.keysValue().map(item => item.value);
    }

    //迭代字典的键值对
    forEach(callbackFn) {
        const valuesPair = this.keysValue();
        for (let i = 0; i < valuesPair.length; i++) {
            let result = callbackFn(valuesPair[i].key, valuesPair[i].value)
            if (result === false) break;
        }
    }

    //字典长度
    size() {
        return this.keysValue().length;
    }

    //判断字典是否为空
    isEmpty() {
        return this.size() === 0
    }

    //输出字符串方法
    toString() {
        const valuesPair = this.keysValue();
        let objString = valuesPair[0].toString();
        for (let i = 1; i < valuesPair.length; i++) {
            objString = `${objString} ${valuesPair[i].toString()}`
        }
        return objString;
    }
}

// let dictionary = new Dictionary();
// dictionary.set(1,"Bob");
// dictionary.set(2,"Jack");
// dictionary.set(3,"Tom");

// console.log(dictionary.get(1));
 

// console.log(dictionary.toString());
