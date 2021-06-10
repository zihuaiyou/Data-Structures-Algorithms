export default function defaultToString(item) {
    if (item === undefined) {
        return "UNDEFINED";
    } else if (item === null) {
        return "NULL";
    } else if (typeof item === String || item instanceof String) {
        return `${item}`;
    }
    //item为对象时,使用对象的toString方法;
    return item.toString()
}

export class ValuePair{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
    toString(){
        return`[#${this.key}:${this.value}]`
    }
}