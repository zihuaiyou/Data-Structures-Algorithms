import defaultToString , {ValuePair} from '../modules/util.js'
import HashTable from './基本散列表.js'
import LinkedList from '../链表/链表.js'

//散列表冲突：散列值相同时(key的值相同)导致value被替换的问题
//分离链接：向每个散列值插入一个链表；用链表存储value值
export default class HashTableSeparateChaining extends HashTable{
    constructor(strFn = defaultToString){
        super(strFn);
        this.table = {};
    }

    put(key,value){
        if (key!=null&&value!=null) {
            const postion = this.hashCode(key);
            //首次插入时，插入一个链表
            if (this.table[postion] == null) {
                this.table[postion] = new LinkedList();
            } 
            const valuePair = new ValuePair(key,value)
            this.table[postion].push(valuePair);
            
            return true;
        }
        return false;
    }

    get(key){
        const postion = this.hashCode(key);
        const linkedList = this.table[postion];
        if (linkedList!=null&&!linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while(current!=null){
                if (current.element.key === key) return current.element.value;
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key){
        const postion = this.hashCode(key);
        const linkedList = this.table[postion];
        if (linkedList!=null&&!linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while(current!=null){
                if (current.element.key === key) linkedList.remove(current.element);
                if (linkedList.isEmpty()) delete this.table[postion];
                current = current.next;
            }
            return true;
        }
        return false;
    }
}

let hashTableSeparateChaining = new HashTableSeparateChaining();
hashTableSeparateChaining.put("dad","jack");
hashTableSeparateChaining.put("bother","Bob");
hashTableSeparateChaining.put("uncle","Tom");

hashTableSeparateChaining.remove("dad");

console.log(hashTableSeparateChaining.toString());
